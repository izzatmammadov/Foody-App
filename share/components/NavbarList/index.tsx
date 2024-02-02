import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const NavbarList = () => {
  const navigate = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <ul className="justify-around text-lg w-1/2 font-medium text-grayText1 hidden sm:flex ">
      <li
        onClick={() => navigate.push("/")}
        className={`cursor-pointer transition-all ${
          navigate.pathname === "/" ? "text-mainRed" : "hover:text-mainRed"
        }`}
      >
        {t("home")}
      </li>
      <li
        onClick={() => navigate.push("/restaurants")}
        className={`cursor-pointer transition-all ${
          navigate.pathname === "/restaurants"
            ? "text-mainRed"
            : "hover:text-mainRed"
        }`}
      >
        {t("restaurants")}
      </li>
      <li
        onClick={() => navigate.push("/about-us")}
        className={`cursor-pointer transition-all ${
          navigate.pathname === "/about-us"
            ? "text-mainRed"
            : "hover:text-mainRed"
        }`}
      >
        {t("about_us")}
      </li>
      <li
        onClick={() => navigate.push("/how-it-works")}
        className={`cursor-pointer transition-all ${
          navigate.pathname === "/how-it-works"
            ? "text-mainRed"
            : "hover:text-mainRed"
        }`}
      >
        {t("how_it_works")}
      </li>
      <li
        onClick={() => navigate.push("/faqs")}
        className={`cursor-pointer transition-all ${
          navigate.pathname === "/faqs" ? "text-mainRed" : "hover:text-mainRed"
        }`}
      >
        FAQs
      </li>
    </ul>
  );
};
