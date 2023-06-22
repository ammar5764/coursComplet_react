import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const availableLanguages = ['en','fr'];
const options = {
  order: [ 'navigator', 'htmlTag', 'path', 'subdomain'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
  cookieMinutes: 10,
  cookieDomain: 'myDomain', //mettez le nom de votre domain
  htmlTag: document.documentElement,
  checkWhitelist: true
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr", // de facon courante cette var est en "En"
    debug: true,
    whitelist: availableLanguages,
    detection: options,
    lng: "fr",
    resources: {
      en: {
        translations: require("./locales/en/translations.json"),
      },
      fr: {
        translations: require("./locales/fr/translations.json"),
      }

    },
    ns: ["translations"],
    defaultNS: "translations",
  });

i18n.languages = ["en", "fr"];

export default i18n;