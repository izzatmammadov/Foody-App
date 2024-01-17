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
      faqDesc:"How to contact with Customer Service?",
      faqDesc2:"App installation failed, how to update system information?",
      faqDesc3:"Website reponse taking time, how to improve?",
      faqDesc4:"How do I create a account?",
      faqDesc5:"Website reponse taking time, how to improve?",
      faqDesc6: "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!.",
      howItWorksDesc:"Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices.It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address."
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
      faqDesc:"Müştəri Xidmətləri ilə necə əlaqə saxlamaq olar?",
      faqDesc2:"Proqram quraşdırılması uğursuz oldu, sistem məlumatını necə yeniləmək olar?",
      faqDesc3:"Veb saytın cavabı vaxt alır, necə yaxşılaşdırmaq olar?  ",
      faqDesc4:"Hesabı necə yarada bilərəm?",
      faqDesc5:"Veb saytın cavabı vaxt alır, necə yaxşılaşdırmaq olar?",
      faqDesc6:"Müştəri Təcrübəsi Qrupumuz həftənin 7 günü mövcuddur və biz əlaqə saxlamağın 2 yolunu təklif edirik. E-poçt və Çat. Biz tez cavab verməyə çalışırıq, ona görə də cavab üçün çox gözləməyinizə ehtiyac yoxdur!.",
      howItWorksDesc: "Satış müddətində çatdırılma uzadıla bilər. Məkanınız üçün yenilənmiş təxmin üçün yoxlama səhifəsinə baxın. Nəzərə alın ki, sifariş verdikdən sonra sifarişinizi dəyişdirmək artıq mümkün deyil. Vergilər və rüsumlar bütün məhsul qiymətlərinə daxildir. Kredit kartı ilə ödəniş edərkən evinizdən və ya faktura ünvanınızdan fərqli ünvana çatdırılma ilə sifariş vermək mümkündür. Nəzərə alın ki, Klarna ödənişləri sifarişinizin qeydiyyatdan keçmiş ev ünvanınıza göndərilməsini tələb edir."
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});

export default i18n;