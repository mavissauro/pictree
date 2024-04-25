import { useRouter } from 'expo-router';
import { View } from 'react-native-ui-lib';

import PasswordResetComponent from '~/features/password-reset/password-reset.component';
import { useSupabase } from '~/utils/supabase/hooks/useSupabase';
import useToast from '~/utils/toast/toast.hook';

const PasswordResetContainer = () => {
  const { push } = useRouter();
  const toast = useToast();
  const supabase = useSupabase();

  const handleEmailWithPress = async (email: string) => {
    // Send email with the password reset link
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      toast.show({ message: 'Password reset request failed' });
      console.log('Password reset request failed', error);
      return;
    }

    push('/');
  };

  return (
    <View flex spread>
      <PasswordResetComponent type="email" handleWithPress={handleEmailWithPress} />
    </View>
  );
};

export { PasswordResetContainer, PasswordResetContainer as default };
