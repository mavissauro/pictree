import { Text, View } from 'react-native-ui-lib';

import EditScreenInfo from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View>
      <Text>{title}</Text>
      <View />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
