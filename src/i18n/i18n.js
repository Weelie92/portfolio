import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation_en from './locales/en/translation.json';
import translation_no from './locales/no/translation.json';

const resources = {
  en: {
    translation: translation_en,
  },
  no: {
    translation: translation_no,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
