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
          "Sign in": "Sign in",
          "Sign out":"Sign out",
          "Register": "Register",
          "Cart": "Cart",
          "Categories": "Categories",
           "Some of our popular categories include cosmetic": "Some of our popular categories include cosmetic",
          "Popular Categories":"Popular Categories",
          "Products": "Products",
          "Our Products":"Our Products",
          "Add our products to weekly line up":"Add our products to weekly line up",
          "Shop":"Shop",
          "About Us":"About Us",
          "Blog":"Blog",
          "Contact Us":"Contact Us",
            "Call Us":  "Call Us",
            "show more":"show more",
            "Setting":"Setting",
            "Additional 20% Off Sale Items – Please See Details":"Additional 20% Off Sale Items – Please See Details",
            "Add To Cart":"Add To Cart",
            "Available Quantity":"Available Quantity",
            "Reviews":"Reviews"
        }
      },
      ar: {
        translation: {
          "Home": "الرئيسية",
          "Sign in": "تسجيل الدخول",
           "Sign out":"تسجيل الخروج",
          "Register": "انشاء حساب",
          "Cart": "السلة",
          "Categories": "التصنيفات",
          "Popular Categories":"التصنيفات الشائعة",
          "Some of our popular categories include cosmetic":"بعض من فئاتنا الأكثر شيوعًا تشمل مستحضرات التجميل",
          "Products": "المنتجات",
          "Our Products":"منتجاتنا",
          "Add our products to weekly line up":"أدرِج منتجاتنا ضمن قائمتك الأسبوعية",
          "Shop":"تسوق",
           "About Us":"حول",
            "Blog":"المدونة",
          "Contact Us":"تواصل معنا",
          "Call Us":"اتصل بنا",
          "show more":"عرض المزيد",
          "Setting":"الاعدادات",
          "Additional 20% Off Sale Items – Please See Details":"خصم إضافي 20٪ على العناصر المخفضة – يرجى الاطلاع على التفاصيل",
          "Add To Cart":"اضف الى السلة",
          "Available Quantity":"الكمية المتاحة",
          "Reviews":"التقييمات"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });

  export default i18n;