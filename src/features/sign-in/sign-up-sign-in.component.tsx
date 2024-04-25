import { type Provider } from '@supabase/supabase-js';
import { Link } from 'expo-router';
import { ReactNode, useState } from 'react';
import { Button, Image, Text, TextField, View } from 'react-native-ui-lib';

interface Props {
  type: 'sign-up' | 'sign-in';
  handleOAuthWithPress: (provider: Provider) => void;
  handleEmailWithPress: (email: string, password: string) => void;
}

export const SignUpSignInComponent = ({
  type,
  handleOAuthWithPress,
  handleEmailWithPress,
}: Props): ReactNode => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <View paddingH-s5 paddingV-s5 width={350} flex>
        <Text text70 marginB-s1>
          {type === 'sign-up' ? 'Create your account' : 'Sign in to your account'}
        </Text>
        <View flex spread>
          <Button onPress={() => handleOAuthWithPress('google')}>
            <Image source="/auth/google-logo.png" style={{ width: 20, height: 20 }} />
          </Button>
        </View>
        <View flex spread>
          <View height={0.5} width={10} />
          <Text text30>or</Text>
          <View height={0.25} width={10} />
        </View>

        {/* email sign up option */}
        <TextField
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(text: string) => {
            setEmail(text);
          }}
        />
        <TextField
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(text) => {
            setPassword(text);
          }}
          textContentType="password"
          secureTextEntry
        />

        {/* sign up button */}
        <Button
          themeInverse
          onPress={() => {
            handleEmailWithPress(email, password);
          }}
          label={type === 'sign-up' ? 'Sign up' : 'Sign in'}
        />

        {/* or sign in, in small and less opaque font */}
        <View flex>
          <Text marginR-s2>
            {type === 'sign-up' ? 'Already have an account?' : 'Don’t have an account?'}
          </Text>
          <Link href={type === 'sign-up' ? '/sign-in' : '/sign-up'}>
            <Text>{type === 'sign-up' ? 'Sign in' : 'Sign up'}</Text>
          </Link>
        </View>

        {/* forgot password */}
        {type === 'sign-in' && (
          <View marginT-2>
            <Text size-2 marginR-2>
              Forgot your password?
            </Text>
            <Link href="/password-reset">
              <Text>Reset it</Text>
            </Link>
          </View>
        )}
      </View>
    </>
  );
};
