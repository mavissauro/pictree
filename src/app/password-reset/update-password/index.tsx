import { Stack } from 'expo-router';

import UpdatePasswordContainer from '~/features/password-reset/password-update/password-update.container';

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Update Password',
        }}
      />
      <UpdatePasswordContainer />
    </>
  );
}
