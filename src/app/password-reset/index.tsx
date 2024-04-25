import { Stack } from 'expo-router';

import PasswordResetContainer from '~/features/password-reset/password-reset.container';

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Reset Password',
        }}
      />
      <PasswordResetContainer />
    </>
  );
}
