import { useAuthRedirect } from '~/utils/supabase/hooks/useAuthRedirect';

export const AuthStatusChangeHandler = () => {
  useAuthRedirect();
  return null;
};
