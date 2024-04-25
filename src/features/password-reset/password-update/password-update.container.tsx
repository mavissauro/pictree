import { useRouter } from 'expo-router';
import { View } from 'react-native-ui-lib';

import PasswordResetComponent from '~/features/password-reset/password-reset.component';
import { useSupabase } from '~/utils/supabase/hooks/useSupabase';
import useToast from '~/utils/toast/toast.hook';

const UpdatePasswordContainer = () => {
  const { push } = useRouter();
  const toast = useToast();
  const supabase = useSupabase();

  const handlePasswordUpdateWithPress = async (password: string) => {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      toast.show({ message: 'Password change failed', preset: 'failure' });
      console.log('Password change failed', error);
      return;
    }
    push('/');
  };

  return (
    <View flex spread>
      <PasswordResetComponent type="password" handleWithPress={handlePasswordUpdateWithPress} />
    </View>
  );
};

export { UpdatePasswordContainer, UpdatePasswordContainer as default };
