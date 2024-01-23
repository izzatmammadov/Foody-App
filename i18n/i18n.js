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
      how_it_worksDesc:
        "Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices.It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address.",
      signUp: "Sign Up",
      homeDesc: "Our Food site makes it easy to find local food",
      homeDesc2:
        "Welcome to our vibrant food site, a digital haven for culinary enthusiasts seeking a delightful gastronomic experience. Within these virtual pages.",
      homeDesc3: "Register",
      homeDesc4: "Order Now",
      homeDesc5: "Features",
      homeDesc6: "Menu That Always Make You Fall In Love",
      homeDesc7: "Yummy Always Papa John’s Pizza.Agree? ",
      homeDesc8: "Do You Like French Fries?Mmm...",
      homeDesc9: "Our Popular Update New Foods",
      footerDesc: "Discover Restaurants Near From you",
      footerDesc2: "Explore Now",
      userDesc: "Profile",
      userDesc2: "Your Basket",
      userDesc3: "Your Orders",
      userDesc4: "Checkout",
      userDesc5: "Logout",
      userDesc6: "Time",
      userDesc7: "Delivery Adress",
      userDesc8: "Amount",
      userDesc9: "Payment Method",
      userDesc10: "Contact",
      userDesc11: "SHOW",
      userDesc12: "DELETE",
      modalDesc: "Are you sure it’s deleted?",
      modalDesc2:
        "Attention! If you delete this order, it will not come back...",
      modalDesc3: "Cancel",
      modalDesc4: "Delete",
      faqsDesc: "How to contact with Customer Service?",
      faqsDesc2: "App installation failed, how to update system information?",
      faqsDesc3: "Website reponse taking time, how to improve?",
      faqsDesc4: "How do I create a account?",
      faqsDesc5: "Website reponse taking time, how to improve?",
      faqsDesc6:
        "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!",
      adminDesc: "Welcome Admin",
      signIn: "Sign in",
      adminLeftBarComponent: "Dashboard",
      adminLeftBarComponent2: "Products",
      adminLeftBarComponent3: "Restaurants",
      adminLeftBarComponent4: "Category",
      adminLeftBarComponent5: "Orders",
      adminLeftBarComponent6: "Offers",
      adminLeftBarComponent7: "Logout",
<<<<<<< HEAD
      items:"items",




      
      
=======
      userProfileContact: "Contact",
      userProfileUsarname: "Usarname",
      userProfileAddress: "Address",
      userProfileFullname: "Fullname",
      userProfileSave: "Save",
>>>>>>> 210a1451842f414e76224db3dbc67e8732533793
    },
  },
  az: {
    translation: {
      login: "Giriş",
      register: "Qeydiyyat",
      username: "İstifadəçi Adı",
      password: "Şifrə",
      fullname: "Ad Soyad",
      home: "Ana Səhifə",
      restaurants: "Restoranlar",
      about_us: "Haqqımızda",
      how_it_works: "Necə İşləyirik",
      how_it_worksDesc:
        "Satış müddətində çatdırılma uzadıla bilər. Məkanınız üçün yenilənmiş təxmin üçün yoxlama səhifəsinə baxın. Nəzərə alın ki, sifariş verdikdən sonra sifarişinizi dəyişdirmək artıq mümkün deyil. Vergilər və rüsumlar bütün məhsul qiymətlərinə daxildir. Kredit kartı ilə ödəniş edərkən evinizdən və ya faktura ünvanınızdan fərqli ünvana çatdırılma ilə sifariş vermək mümkündür. Nəzərə alın ki, Klarna ödənişləri sifarişinizin qeydiyyatdan keçmiş ev ünvanınıza göndərilməsini tələb edir.",
      signUp: "Giriş Et",
      homeDesc: "Qida saytımız yerli yeməkləri tapmağı asanlaşdırır",
      homeDesc2:
        "Ləzzətli qastronomik təcrübə axtaran kulinariya həvəskarları üçün rəqəmsal cənnət olan canlı yemək saytımıza xoş gəlmisiniz. Bu virtual səhifələr daxilində.",
      homeDesc3: "Qeydiyyat",
      homeDesc4: "İndicə Sifariş",
      homeDesc5: "Xüsusiyyətləri",
      homeDesc6: "Həmişəki Menyu Sizi Aşiq Etdirin",
      homeDesc7: "Dadlı Həmişə Papa John's Pizza. Razılaşırsınız? ",
      homeDesc8: "Kartof qızartması xoşunuza gəlirmi? Mmm...",
      homeDesc9: "Populyar Yeniləmə Yeni Yeməklərimiz",
      footerDesc: "Sizə yaxın restoranları kəşf edin",
      footerDesc2: "Kəşf Et",
      userDesc: "Kabinet",
      userDesc2: "Səbətin",
      userDesc3: "Sifarişlərin",
      userDesc4: "Yoxlanış",
      userDesc5: "Çıxış",
      userDesc6: "Zaman",
      userDesc7: "Çatacaq Adress",
      userDesc8: "Məbləğ",
      userDesc9: "Ödəniş Üsulu",
      userDesc10: "Əlaqə",
      userDesc11: "GÖSTƏR",
      userDesc12: "SİL",
      modalDesc: "Silməyə əminsiniz?",
      modalDesc2: "Diqqət! Bu sifarişi silsəniz, geri qayıtmayacaq...",
      modalDesc3: "Ləğv Et",
      modalDesc4: "Silinsin",
      faqsDesc: "Müştəri Xidmətləri ilə necə əlaqə saxlamaq olar?",
      faqsDesc2:
        "Proqram quraşdırılması uğursuz oldu, sistem məlumatını necə yeniləmək olar?",
      faqsDesc3: "Veb saytın cavabı vaxt alır, necə yaxşılaşdırmaq olar?",
      faqsDesc4: "Hesabı necə yarada bilərəm?",
      faqsDesc5: "Veb saytın cavabı vaxt alır, necə yaxşılaşdırmaq olar?",
      faqsDesc6:
        "Müştəri Təcrübəsi Qrupumuz həftənin 7 günü mövcuddur və biz əlaqə saxlamağın 2 yolunu təklif edirik. E-poçt və Çat. Tez cavab verməyə çalışırıq, ona görə də cavab üçün çox gözləməyinizə ehtiyac yoxdur!",
      adminDesc: "Xoş gəlmisiniz Admin",
      signIn: "Daxil olun",
      adminLeftBarComponent: "İdarə paneli",
      adminLeftBarComponent2: "Məhsullar",
      adminLeftBarComponent3: "Restoranlar",
      adminLeftBarComponent4: "Kateqoriya",
      adminLeftBarComponent5: "Sifarişlər",
      adminLeftBarComponent6: "Təkliflər",
      adminLeftBarComponent7: "Çıxış",
<<<<<<< HEAD
      items:"maddə",

=======
      userProfileContact: "Əlaqə",
      userProfileUsarname: "İstifadəci adı",
      userProfileAddress: "Ünvanınız",
      userProfileFullname: "Adınız Soyadınız",
      userProfileSave: "Qeydə al",
>>>>>>> 210a1451842f414e76224db3dbc67e8732533793
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});

export default i18n;
