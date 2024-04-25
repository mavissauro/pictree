import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Button } from 'react-native-ui-lib';

import useToast from '~/utils/toast/toast.hook';

export const InternalizationExample = () => {
  const { t, i18n } = useTranslation();
  const toast = useToast();

  const toggleLanguage = (locale: 'en' | 'fr') => {
    i18n.changeLanguage(locale);
  };
  return (
    <>
      <View>
        <Button label={t('button.french')} onPress={() => toggleLanguage('fr')} />
        <Button label={t('button.english')} onPress={() => toggleLanguage('en')} />
        <Button
          label={t('button.spanish')}
          onPress={() =>
            toast.show({ message: t('toast.spanish'), autoDismiss: 300, position: 'top' })
          }
        />
        <Button label={t('button.spanish')} onPress={() => toast.hide()} />
      </View>
    </>
  );
};
