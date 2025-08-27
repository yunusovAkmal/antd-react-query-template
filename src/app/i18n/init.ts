import { initReactI18next } from 'react-i18next'
import * as i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import uz from './translations/uz.json'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    },
    resources: {
      uz: {
        translation: uz
      }
    }
  } satisfies i18next.InitOptions)
