import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend';

// i18next-http-backend loads translations from your server https://github.com/i18next/i18next-http-backend
// LanguageDetector detect user language learn more: https://github.com/i18next/i18next-browser-languageDetector
// initReactI18next pass the i18n instance to react-i18next.
// init i18next for all options read: https://www.i18next.com/overview/configuration-options
i18n.use(Backend).use(LanguageDetector).use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'es',
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});

export default i18n;
