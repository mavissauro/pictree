import { Provider } from '@supabase/supabase-js';
import { getInitialURL } from 'expo-linking';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { ReactNode } from 'react';
import { Platform } from 'react-native';
import { View } from 'react-native-ui-lib';

import { SignUpSignInComponent } from '~/features/sign-in/sign-up-sign-in.component';
import { capitalizeWord } from '~/utils/string';
import { initiateAppleSignIn } from '~/utils/supabase/appleAuth';
import { useSupabase } from '~/utils/supabase/hooks/useSupabase';
import useToast from '~/utils/toast/toast.hook';

export const SignInContainer = (): ReactNode => {
  const { replace } = useRouter();
  const toast = useToast();
  const supabase = useSupabase();

  const signInWithApple = async () => {
    try {
      const { token, nonce } = await initiateAppleSignIn();
      const { error } = await supabase.auth.signInWithIdToken({
        provider: 'apple',
        token,
        nonce,
      });
      if (error) {
        return toast.show({ message: 'Authentication Error', preset: 'failure' });
      } else {
        replace('/');
      }
    } catch (e) {
      if (typeof e === 'object' && !!e && 'code' in e) {
        if (e.code === 'ERR_REQUEST_CANCELED') {
          toast.show({ message: 'Canceled', preset: 'failure' });
        } else {
          toast.show({ message: 'Error', preset: 'failure' });
          // handle other errors
        }
      } else {
        console.error('Unexpected error from Apple SignIn: ', e);
      }
    }
  };

  const handleOAuthWithWeb = async (provider: Provider) => {
    try {
      const redirectUri = (await getInitialURL()) || 't4://';
      const response = await WebBrowser.openAuthSessionAsync(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=${redirectUri}`,
        redirectUri
      );
      if (response.type === 'success') {
        const url = response.url;
        const params = new URLSearchParams(url.split('#')[1]);
        const accessToken = params.get('access_token') || '';
        const refreshToken = params.get('refresh_token') || '';
        await supabase.auth
          .setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })
          .then(({ data: { session }, error }) => {
            if (session) {
              // @ts-ignore set session does not call subscribers when session is updated
              supabase.auth._notifyAllSubscribers('SIGNED_IN', session);
              replace('/');
            } else {
              toast.show({
                message: `${capitalizeWord(provider)} sign in failed`,
                preset: 'failure',
              });
              console.log('Supabase session error:', error);
            }
          });
      }
    } catch (error) {
      toast.show({ message: `${capitalizeWord(provider)} sign in failed`, preset: 'failure' });
    } finally {
      WebBrowser.maybeCompleteAuthSession();
    }
  };

  const handleOAuthSignInWithPress = async (provider: Provider) => {
    if (provider === 'apple' && Platform.OS === 'ios') {
      // use native sign in with apple in ios
      await signInWithApple();
    } else {
      // use web sign in with other providers
      await handleOAuthWithWeb(provider);
    }
  };

  const handleEmailSignUpWithPress = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log('error', error);
      toast.show({ message: 'Sign up failed', preset: 'failure' });
    } else if (data?.user) {
      toast.show({
        message: 'Check your email ',
      });
      replace('/');
    }
  };

  return (
    <View flex>
      <SignUpSignInComponent
        type="sign-up"
        handleOAuthWithPress={handleOAuthSignInWithPress}
        handleEmailWithPress={handleEmailSignUpWithPress}
      />
    </View>
  );
};

export default SignInContainer;
