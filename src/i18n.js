import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend';

i18n
	// i18next-http-backend
	// loads translations from your server
	// https://github.com/i18next/i18next-http-backend
	.use(Backend)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		// resources: {
		// 	en: {
		// 		translation: {
		// 			description: {
		// 				part1: 'Edit <1>src/App.js</1> and save to reload.',
		// 				part2: 'Learn React'
		// 			}
		// 			// here we will place our translations...
		// 		}
		// 	},
		// 	de: {
		// 		translation: {
		// 			description: {
		// 				part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
		// 				part2: 'Lerne React'
		// 			}
		// 		}
		// 	},
		// 	es: {
		// 		translation: {
		// 			description: {
		// 				part1: 'Edita <1>src/App.js</1> y salva para recargar.',
		// 				part2: 'Aprende React'
		// 			}
		// 		}
		// 	}
		// }
	});

export default i18n;
