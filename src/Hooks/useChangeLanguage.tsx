import { useEffect } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import i18n from 'i18next';
//@ts-ignore
import {languages} from '../config/AppKey'
// Define an array of language codes

// Initialize i18n resources dynamically
const resources: Record<string, any> = {};
languages.forEach((language:any) => {
  resources[language] = { translation: require(`../translate/${language}.json`) };
});

let language: string = localStorage.getItem('language') || 'en';

i18n.use(initReactI18next).init({
  resources: resources,
  lng: language,
  interpolation: {
    escapeValue: false
  }
});

export function useLanguage() {
  useEffect(() => {
    changeLanguage(language);
  }, []);

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    applyLanguageStyles(newLanguage);
  };

  return { changeLanguage };
}

function applyLanguageStyles(language: string) {
  document.body.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  if (language === 'ar') {
    document.body.classList.add('ar');
  } else {
    document.body.classList.remove('ar');
  }
}

export function useLanguageMenu() {
  const { t } = useTranslation();

  // Create language options dynamically
  const languageOptions = languages.map((language:any) => ({
    code: language,
    icon: `../language/${language}.svg`, // Assuming icon names follow language codes
    label: t(language), // Capitalize the language label
  }));

  return { languageOptions };
}
