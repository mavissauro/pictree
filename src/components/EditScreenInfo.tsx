import { useTranslation } from 'react-i18next';
import {View, Text} from "react-native-ui-lib";

export default function EditScreenInfo({ path }: { path: string }) {
  const { t } = useTranslation();
  const title = t('getStarted');
  const description = t('changeCode');

  return (
    <View>
      <Text>{title}</Text>
      <View>
        <Text>{path}</Text>
      </View>
      <Text>{description}</Text>
    </View>
  );
}
