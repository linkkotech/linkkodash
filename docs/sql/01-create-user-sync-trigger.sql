-- ============================================================================
-- AUTOMAÇÃO DE SINCRONIZAÇÃO DE USUÁRIOS - LinkKoDash
-- ============================================================================
-- 
-- OBJETIVO:
-- Criar um trigger que sincroniza novos usuários da tabela auth.users 
-- para a tabela public.users automaticamente, fechando o gap de latência.
--
-- MOTIVO:
-- A signupAction precisa fazer UPDATE em admin_role_id, mas se a linha ainda
-- não existe em public.users, a ação falha. Este trigger resolve isso.
--
-- ONDE EXECUTAR:
-- 1. Acesse: https://app.supabase.com/project/[seu-project]/sql
-- 2. Cole este arquivo inteiro (ou copie por seções)
-- 3. Clique em "RUN"
--
-- ============================================================================

-- PASSO 1: REMOVER TRIGGER E FUNÇÃO ANTIGAS (se existirem)
-- ============================================================================
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- ============================================================================
-- PASSO 2: CRIAR FUNÇÃO PostgreSQL (handle_new_user)
-- ============================================================================
-- Essa função será executada sempre que um novo usuário for criado em auth.users
-- Ela cria instantaneamente um registro correspondente em public.users
--
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Inserir novo usuário em public.users
  INSERT INTO public.users (id, email)
  VALUES (new.id, new.email);
  
  RETURN new;
END;
$$;

-- ============================================================================
-- PASSO 3: CRIAR TRIGGER
-- ============================================================================
-- Este trigger dispara a função APÓS cada INSERT em auth.users
-- FOR EACH ROW = a função executa uma vez para cada linha inserida
--
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE PROCEDURE public.handle_new_user();

-- ============================================================================
-- CONFIRMAÇÃO
-- ============================================================================
-- Se você vir as mensagens abaixo, tudo funcionou!
-- 
-- ✅ "Trigger created successfully"
-- ✅ "Function created successfully"
--
-- ============================================================================
-- COMO TESTAR
-- ============================================================================
-- 1. Crie um novo usuário via /signup na sua aplicação
-- 2. Verifique se apareceu em public.users (sem erro)
-- 3. Verifique em Supabase Dashboard > Database > Users (tabela public.users)
--
-- ============================================================================
-- NOTAS IMPORTANTES
-- ============================================================================
-- - Este trigger é AUTOMÁTICO e não requer ação manual
-- - A função usa SECURITY DEFINER para ter permissões de INSERT
-- - O email é extraído de new.email (campo direto de auth.users)
-- - Não é necessário reiniciar a aplicação
--
-- ============================================================================
