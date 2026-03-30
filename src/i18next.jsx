import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "Login": "Login",
          "Register": "Register",
          "Cart": "Cart",
          "Categories": "Categories",
          "Products": "Products"
        }
      },
      ar: {
        translation: {
          "Home": "الرئيسية",
          "Login": "تسجيل الدخول",
          "Register": "انشاء حساب",
          "Cart": "السلة",
          "Categories": "التصنيفات",
          "Products": "المنتجات"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });

  export default i18n;