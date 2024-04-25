import { Stack } from 'expo-router';

import SignUpContainer from '~/features/sign-up/sign-up.container';

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sign Up',
        }}
      />
      <SignUpContainer />
    </>
  );
}
