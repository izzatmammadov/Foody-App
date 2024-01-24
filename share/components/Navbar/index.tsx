import Image from "next/image";
import { Button } from "../Button";
import { Langugages } from "../Languages/index";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

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

  return (
    <nav
      className={`flex justify-between m-8 items-center ${
        forLogin ? "bg-lightRed" : "bg-whiteLight1"
      } rounded-md py-11 sm:p-11`}
    >
      <h1
        className={`text-4xl font-extrabold ${
          forLogin ? "text-white" : ""
        } flex items-center`}
      >
        <button onClick={toggleModal} className="sm:hidden block mr-5">
          <Image width={40} height={0} src={"hamburger.svg"} alt="hamburger" />
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

          <input
            className="px-6 py-3 relative rounded-xl w-1/5 shadow-sm hidden sm:block"
            type="text"
            placeholder="Search"
          />
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
            <Image
              className="cursor-pointer hover:scale-95 transition-all duration-500"
              width={40}
              height={0}
              src={"basket.svg"}
              alt="basket"
            />
            <Button
              className="rounded-full w-10 h-10 text-lg text-white shadow-md bg-mainRed font-semibold hover:scale-95 transition-all duration-500"
              innerText="ZZ"
            />
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
            />
          </div>
        </>
      )}

{isModalOpen && (
        <div className="fixed inset-0 bg-black m-8 bg-opacity-50 z-50 flex items-center justify-start">
          {/* MODAL BASLAYIR*/}
          <div className="bg-white w-4/5 min-h-full p-8 flex flex-col">
          <button className="text-mainRed font-bold text-lg block text-start" onClick={toggleModal}><Image width={30} height={0} alt="close2" src={"close2.svg"}/></button>
            <Button className=" w-1/2 mx-auto py-4 rounded-full text-xl bg-mainRed text-white font-medium shadow-md hover:scale-95 transition-all duration-500" innerText={t("signUp")}/>
            <ul className="justify-around text-2xl w-1/2 font-medium text-grayText1 flex flex-col mt-20 gap-4 ">
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
