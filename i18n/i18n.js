import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      login: "Login",
      register: "Register",
      username: "Username",
      password: "Password",
      fullname: "Fullname",
      home: "Home",
      restaurants: "Restaurants",
      about_us: "About Us",
      how_it_works: "How It Works",
      signUp: "Sign Up",
      homeDesc: "Our Food site makes it easy to find local food",
      homeDesc2: "Welcome to our vibrant food site, a digital haven for culinary enthusiasts seeking a delightful gastronomic experience. Within these virtual pages.",
      homeDesc3: "Register",
      homeDesc4: "Order Now",
      homeDesc5: "Features",
      homeDesc6: "Menu That Always Make You Fall In Love",
      homeDesc7: "Yummy Always Papa John’s Pizza.Agree? ",
      homeDesc8: "Do You Like French Fries?Mmm...",
      homeDesc9: "Our Popular Update New Foods",
      footerDesc: "Discover Restaurants Near From you",
      footerDesc2: "Explore Now",
    },
  },
  az: {
    translation: {
      login: "Login",
      register: "Qeydiyyat",
      username: "İstifadəçi Adı",
      password: "Şifrə",
      fullname: "Ad Soyad",
      home: "Ana Səhifə",
      restaurants: "Restoranlar",
      about_us: "Haqqımızda",
      how_it_works: "Necə İşləyirik",
      signUp: "Giriş Et",
      homeDesc: "Qida saytımız yerli yeməkləri tapmağı asanlaşdırır",
      homeDesc2: "Ləzzətli qastronomik təcrübə axtaran kulinariya həvəskarları üçün rəqəmsal cənnət olan canlı yemək saytımıza xoş gəlmisiniz. Bu virtual səhifələr daxilində.",
      homeDesc3: "Qeydiyyat",
      homeDesc4: "İndicə Sifariş",
    homeDesc5: "Xüsusiyyətləri",
    homeDesc6: "Həmişəki Menyu Sizi Aşiq Etdirin",
      homeDesc7: "Dadlı Həmişə Papa John's Pizza. Razılaşırsınız? ",
      homeDesc8: "Kartof qızartması xoşunuza gəlirmi? Mmm...",
      homeDesc9: "Populyar Yeniləmə Yeni Yeməklərimiz",
      footerDesc: "Sizə yaxın restoranları kəşf edin",
      footerDesc2: "Kəşf Et",
      
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});

export default i18n;