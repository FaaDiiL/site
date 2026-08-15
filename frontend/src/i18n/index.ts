import { createI18n } from 'vue-i18n'
import sv from './locales/sv'
import en from './locales/en'

export const i18n = createI18n({
  legacy: false,
  locale: 'sv',
  fallbackLocale: 'en',
  messages: { sv, en },
})

export default i18n
