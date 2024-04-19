import { ReactNode } from 'react';
import { View } from 'react-native-ui-lib';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <View flex-1 padding-10>
      {children}
    </View>
  );
};
