import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Загружает переводы через HTTP (для продакшена)
  .use(LanguageDetector) // Автоматически определяет язык
  .use(initReactI18next) // Подключает i18next к React
  .init({
    fallbackLng: "en", // Язык по умолчанию
    debug: true,
    interpolation: {
      escapeValue: false, // React сам экранирует значения
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Путь к файлам перевода
    },
  });

export default i18n;
