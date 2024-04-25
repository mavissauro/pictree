import { Stack } from 'expo-router';

import { SignInContainer } from '~/features/sign-in/sign-in.container';

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sign In',
        }}
      />
      <SignInContainer />
    </>
  );
}
