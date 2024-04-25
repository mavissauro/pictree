import { FC, useState } from 'react';
import { Button, Text, TextField, View } from 'react-native-ui-lib';

interface PasswordResetProps {
  type: 'email' | 'password';
  handleWithPress: (emailOrPassword: string) => void;
}

const PasswordResetComponent: FC<PasswordResetProps> = ({ type, handleWithPress }) => {
  const [emailOrPassword, setEmailOrPassword] = useState('');

  return (
    <View BR-10 paddingH-7 paddingV-6 width={350}>
      <Text text-70 marginB-1>
        {type === 'email' ? 'Reset your password' : 'Change your password'}
      </Text>

      {/* email or password input */}
      {type === 'email' ? (
        <TextField
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(text) => {
            setEmailOrPassword(text);
          }}
        />
      ) : (
        <TextField
          autoCapitalize="none"
          placeholder="New Password"
          onChangeText={(text) => {
            setEmailOrPassword(text);
          }}
          textContentType="password"
          secureTextEntry
        />
      )}

      {/* reset password button */}
      <Button
        themeInverse
        onPress={() => {
          handleWithPress(emailOrPassword);
        }}>
        {type === 'email' ? 'Reset Password' : 'Change Password'}
      </Button>
    </View>
  );
};

export { PasswordResetComponent, PasswordResetComponent as default };
