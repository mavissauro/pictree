import {View} from "react-native-ui-lib";
import {ReactNode} from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <View flex-1 padding-10>{children}</View>;
};
