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
    },
  },
  az: {
    translation: {
      login: "Login",
      register: "Qeydiyyat",
      username: "İstifadəçi Adı",
      password: "Şifrə",
      fullname: "Ad Soyad",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "az",
  resources,
});

export default i18n;
