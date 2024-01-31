import Image from "next/image";
import { Button } from "../Button";
import { Langugages } from "../Languages/index";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Input } from "../input";
import { RestaurantSearchModal } from "../restaurantSearchModal";
import { NavbarAvatar } from "../navbarAvatar";

interface NavbarParamTypes {
  isRegister: boolean | null;
  forLogin: boolean | null;
  forAdmin: boolean | null;
}

export const Navbar = ({
  isRegister,
  forLogin,
  forAdmin,
}: NavbarParamTypes) => {
  const { t, i18n } = useTranslation();
  const navigate = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  //^ INPUT MODAL

  const [isInputModal, setInputModal] = useState(false)

  const toggleInputModal = () => {
    setInputModal(!isInputModal)
  }

  const closeInputModal = () => {
    setInputModal(false)
  }

  return (
    <nav
      className={`flex justify-between m-0 sm:m-8 items-center ${
        forLogin ? "bg-lightRed" : "bg-whiteLight1"
      } rounded-md py-11 px-5 sm:p-11`}
    >
      <h1
        className={`text-4xl font-extrabold ${
          forLogin ? "text-white" : ""
        } flex items-center`}
      >
        <button onClick={toggleModal} className="sm:hidden block mr-5">
          <Image width={40} height={0} src={"/hamburger.svg"} alt="hamburger" />
        </button>
        Foody
        <span className={`${forLogin ? "text-white" : "text-mainRed"} `}>
          .
        </span>
      </h1>

      {forLogin ? (
        <></>
      ) : (
        <>
          <ul className="justify-around text-lg w-1/2 font-medium text-grayText1 hidden sm:flex ">
            <li
              onClick={() => navigate.push("/")}
              className={`cursor-pointer transition-all ${navigate.pathname === '/' ? 'text-mainRed' : 'hover:text-mainRed'}`}
            >
              {t("home")}
            </li>
            <li
              onClick={() => navigate.push("/restaurants")}
              className={`cursor-pointer transition-all ${navigate.pathname === '/restaurants' ? 'text-mainRed' : 'hover:text-mainRed'}`}
            >
              {t("restaurants")}
            </li>
            <li
              onClick={() => navigate.push("/about-us")}
              className={`cursor-pointer transition-all ${navigate.pathname === '/about-us' ? 'text-mainRed' : 'hover:text-mainRed'}`}
            >
              {t("about_us")}
            </li>
            <li
              onClick={() => navigate.push("/how-it-works")}
              className={`cursor-pointer transition-all ${navigate.pathname === '/how-it-works' ? 'text-mainRed' : 'hover:text-mainRed'}`}
            >
              {t("how_it_works")}
            </li>
            <li
              onClick={() => navigate.push("/faqs")}
              className={`cursor-pointer transition-all ${navigate.pathname === '/faqs' ? 'text-mainRed' : 'hover:text-mainRed'}`}
            >
              FAQs
            </li>
          </ul>

          {/* <input
            className="px-6 py-3 relative rounded-xl w-1/5 shadow-sm hidden sm:block"
            type="text"
            placeholder="Search"
          /> */}
          <div className="w-1/5 hidden sm:block">
          <Input OnClick={toggleInputModal} Type="text" Placeholder="Search" ClassName="w-full px-6 py-3 relative rounded-xl outline-none shadow-sm"/>
          {isInputModal && <RestaurantSearchModal onClose={closeInputModal} />}
          </div>
        </>
      )}

      {/* {forAdmin ? (
        <>
          <Button className=" py-2 px-5 rounded-full text-white text-base font-bold bg-lightPurple_2 hover:shadow-md hover:shadow-textGreenLight transition-all duration-500" innerText="+ ADD PRODUCT" />
          <Button
            className="rounded-full w-10 h-10 text-lg text-white shadow-md bg-mainRed font-semibold hover:scale-95 transition-all duration-500"
            innerText="ZZ"
          />
        </>
      ) : (
        <></>
      )} */}

      {isRegister ? (
        <>
          <div className="flex items-center justify-center gap-7 ">
            <Langugages />
           <NavbarAvatar/>
           </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center gap-7 ">
            <Langugages />
            <Button
              className={`px-6 py-2 rounded-3xl bg-mainRed text-white font-medium shadow-md hover:scale-95 transition-all duration-500 hidden sm:block ${
                forLogin ? "hidden" : "block"
              }`}
              innerText={t("signUp")}
              onClick={()=>navigate.push("/login")}
            />
          </div>
        </>
      )}

{isModalOpen && (
        <div className="fixed inset-0 bg-black m-0 min-h-screen bg-opacity-50 z-50 flex items-center justify-start">

          <div className="bg-white w-4/5 min-h-screen p-8 flex flex-col">
          <button className="text-mainRed font-bold text-lg block text-start" onClick={toggleModal}><Image width={35} height={0} alt="close2" src={"/close2.svg"}/></button>
            <Button className=" w-full mt-8 mx-auto py-4 rounded-full text-xl bg-mainRed text-white font-medium shadow-md hover:scale-95 transition-all duration-500" innerText={t("signUp")}/>
            <ul className="justify-around text-2xl w-full font-medium text-grayText1 flex flex-col mt-14 gap-4 ">
            <li
              onClick={() => navigate.push("/")}
              className="cursor-pointer hover:text-mainRed transition-all"
            >
              {t("home")}
            </li>
            <li
              onClick={() => navigate.push("/restaurants")}
              className="cursor-pointer hover:text-mainRed transition-all"
            >
              {t("restaurants")}
            </li>
            <li
              onClick={() => navigate.push("/about-us")}
              className="cursor-pointer hover:text-mainRed transition-all"
            >
              {t("about_us")}
            </li>
            <li
              onClick={() => navigate.push("/how-it-works")}
              className="cursor-pointer hover:text-mainRed transition-all"
            >
              {t("how_it_works")}
            </li>
            <li
              onClick={() => navigate.push("/faqs")}
              className="cursor-pointer hover:text-mainRed transition-all"
            >
              FAQs
            </li>
          </ul>
          </div>
          
        </div>
      )}
    </nav>
  );
};
