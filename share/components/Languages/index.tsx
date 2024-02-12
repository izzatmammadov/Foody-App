import Image from "next/image";
import {  useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  bgDark?:boolean
}

export const Langugages = ({ bgDark }: Props) => {

  // const currentPathname = window.location.pathname;
  const { t, i18n } = useTranslation();
  const [langDropdown, setLangDropdown] = useState(false);



  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);


  const clickHandle = async (lang: string) => {
    await i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    setLangDropdown(false); 
  
  };


  const toggleDropDown = () => {
    setLangDropdown(!langDropdown);
  };

  return (
    <div className=" relative max-w-[41px]">
      <Image
        className="cursor-pointer mx-2"
        width={40}
        height={0}
        src={`/${selectedLanguage}.svg`} 
        alt={`/${selectedLanguage}Flag`}
        onClick={toggleDropDown}
      />
      {langDropdown && (
        <div className={`flex flex-col gap-4 w-max ${bgDark?" bg-darkBlue_3":"bg-white "} px-2 py-4 absolute shadow-lg z-10 top-12 left-0 `}>
          <Image
            className="cursor-pointer hover:scale-95 transition-all duration-500"
            width={40}
            height={0}
            src={"/en.svg"}
            alt="EnFlag"
            onClick={() => clickHandle("en")}
          />
          {/* <hr /> */}
          {/* <Image
            className="cursor-pointer hover:scale-95 transition-all duration-500"
            width={40}
            height={0}
            src={"fr.svg"}
            alt="FrFlag"
            onClick={() => clickHandle("fr")}
          /> */}
          <hr />
          <Image
            className="cursor-pointer hover:scale-95 transition-all duration-500"
            width={40}
            height={0}
            src={"/az.svg"}
            alt="AzFlag"
            onClick={() => clickHandle("az")}
          />
        </div>
      )}
    </div>
  );
};
