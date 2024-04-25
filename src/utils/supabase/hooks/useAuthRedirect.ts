import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { useIsLoadingSession, useSession } from './useSessionContext';

import { useSupabase } from '~/utils/supabase/hooks/useSupabase';

export const useAuthRedirect = () => {
  const [, setSession] = useSession();
  const [, setLoading] = useIsLoadingSession();
  const supabase = useSupabase();
  const router = useRouter();
  useEffect(() => {
    const signOutListener = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        if (event === 'SIGNED_OUT') {
          setSession(null);
          router.replace('/');
        }
        if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
          setLoading(true);
          setSession(session);
          setLoading(false);
        }
      }
    );
    return () => {
      signOutListener.data.subscription.unsubscribe();
    };
  }, [supabase, router, setSession, setLoading]);
};
