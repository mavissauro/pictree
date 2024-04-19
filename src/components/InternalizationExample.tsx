import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Button } from 'react-native-ui-lib';

export const InternalizationExample = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (locale: 'en' | 'fr') => {
    i18n.changeLanguage(locale);
  };
  return (
    <>
      <View>
        <Button label={t('button.french')} onPress={() => toggleLanguage('fr')} />
        <Button label={t('button.english')} onPress={() => toggleLanguage('en')} />
      </View>
    </>
  );
};
