import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_FR } from "./fr/translations";
import { TRANSLATIONS_EN } from "./en/translations";
import { Cookies } from "react-cookie";

i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     fr: {
       translation: TRANSLATIONS_FR
     },
     en: {
       translation: TRANSLATIONS_EN
     }
   }
 });

const cookies = new Cookies();
if (cookies.get('siteLang')) {
  i18n.changeLanguage(cookies.get('siteLang'));
} else {
  i18n.changeLanguage(navigator.language);
}

export default i18n;