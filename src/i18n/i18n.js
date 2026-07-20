import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import is from "./locales/is.json";
import en from "./locales/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      is: {
        translation: is
      },
      en: {
        translation: en
      }
    },

    fallbackLng: "is",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;