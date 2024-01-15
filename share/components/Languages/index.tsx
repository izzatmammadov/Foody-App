import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Langugages = () => {
  const { t, i18n } = useTranslation();
  const [LangDropdown, setLangDropdown] = useState(false);

  const clickHandle = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  const toggleDropDown = () => {
    setLangDropdown(!LangDropdown);
  };

  return (
    <>
      <Image
        className="cursor-pointer relative"
        width={40}
        height={0}
        src={"en.svg"}
        alt="EnFlag"
        onClick={toggleDropDown}
      />
      {LangDropdown && (
        <div className=" flex flex-col gap-4 w-max bg-white px-2 py-4 absolute shadow-lg z-10 top-32 -ml-[132px]">
          <Image
            className="cursor-pointer hover:scale-95 transition-all duration-500"
            width={40}
            height={0}
            src={"en.svg"}
            alt="EnFlag"
            onClick={() => clickHandle("en")}
          />
          <hr />
          <Image
            className="cursor-pointer hover:scale-95 transition-all duration-500"
            width={40}
            height={0}
            src={"fr.svg"}
            alt="FrFlag"
            onClick={() => clickHandle("fr")}
          />
          <hr />
          <Image
            className="cursor-pointer hover:scale-95 transition-all duration-500"
            width={40}
            height={0}
            src={"az.svg"}
            alt="AzFlag"
            onClick={() => clickHandle("az")}
          />
        </div>
      )}
    </>
  );
};
