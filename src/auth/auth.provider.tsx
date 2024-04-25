import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { Session } from '@supabase/supabase-js';
import { ReactNode } from 'react';

import { supabase } from '~/utils/supabase';
import { AuthStatusChangeHandler } from '~/utils/supabase/components/AuthStatusChangeHandler';

interface Props {
  children: ReactNode;
  initialSession: Session | null;
}

export const AuthProvider = ({ children, initialSession }: Props) => {
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={initialSession}>
      <AuthStatusChangeHandler />
      {children}
    </SessionContextProvider>
  );
};
