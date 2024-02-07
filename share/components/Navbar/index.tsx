import Image from "next/image";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Input } from "../input";
import { RestaurantSearchModal } from "../restaurantSearchModal";
import { NavbarAvatar } from "../navbarAvatar";
import { NavbarList } from "../NavbarList";
import { NavbarLangButton } from "../navbarLangButton";
import { AdminNavbarAvatar } from "../adminNavbarAvatar";
import { AdminAside } from "../adminAside";

interface NavbarProps {
  adminNavbar: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ adminNavbar }) => {
  const { t } = useTranslation();
  const navigate = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isToken, setIsToken] = useState(false);
  const [isActiveName, setIsActiveName] = useState("");
  const [isFullName, setIsFullName] = useState("");

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const localItem: any = localStorage.getItem("tokenObj");
    const localUser: any = localStorage.getItem("userInfo");

    let parsedItem = JSON.parse(localItem);
    let parsedUser = JSON.parse(localUser);
    let fullName = parsedUser?.fullname;
    let str = " ";
    str += parsedUser?.fullname.split(" ")[0][0];
    str += parsedUser?.fullname.split(" ")[1][0];
    let avatar = str.toUpperCase();

    setIsFullName(fullName);
    setIsActiveName(avatar);

    if (parsedItem?.access_token) {
      setIsToken(true);
    }
  }, [isToken]);

  const logOut = () => {
    localStorage.removeItem("tokenObj")
    localStorage.removeItem("userInfo")
    navigate.push("/login")
  }

  //^ INPUT MODAL

  const [isInputModal, setInputModal] = useState(false);

  const toggleInputModal = () => {
    setInputModal(!isInputModal);
  };

  const closeInputModal = () => {
    setInputModal(false);
  };

  return (
    <nav
      className={`${
        adminNavbar
          ? "flex justify-between m-0 mb-4 items-center rounded-md py-11 px-5 sm:m-0 sm:mb-4 bg-darkBlue_3 sm:p-5"
          : "flex justify-between m-0 items-center rounded-md py-11 px-5 sm:m-8 bg-whiteLight1 sm:p-11"
      }`}
    >
      <h1
        className={`${
          adminNavbar
            ? "text-white text-3xl font-extrabold flex items-center"
            : "text-4xl font-extrabold flex items-center"
        }`}
      >
        <button
          onClick={toggleModal}
          className={`${
            adminNavbar ? "sm:hidden block mr-1" : "sm:hidden block mr-5"
          }`}
        >
          <Image
            width={40}
            height={0}
            src={`${adminNavbar ? "/hamburgerWhite.svg" : "/hamburger.svg"}`}
            alt="hamburger"
          />
        </button>
        Foody
        <span className={`${adminNavbar ? "text-orange" : "text-mainRed"}`}>
          .
        </span>
      </h1>

      {adminNavbar ? (
        <div className="flex gap-2 sm:gap-5">
          <Button className="hidden sm:block bg-lightPurple_3 text-white text-sm font-medium px-3 rounded-full shadow-sm shadow-textGreenLight hover:scale-95 transition-all duration-500" innerText={t("addCategory")}/>
          <Button className="block sm:hidden bg-lightPurple_3 text-white text-2xl font-medium px-4 rounded-full shadow-sm shadow-textGreenLight hover:scale-95 transition-all duration-500" innerText="&#43;"/>
          <AdminNavbarAvatar isName={isActiveName} />
        </div>
      ) : (
        <>
          {isToken ? (
            <>
              <NavbarList />

              <div className="w-1/5 hidden sm:block">
                <Input
                  OnClick={toggleInputModal}
                  Type="text"
                  Placeholder="Search"
                  ClassName="w-full px-6 py-3 relative rounded-xl outline-none shadow-sm"
                />
                {isInputModal && (
                  <RestaurantSearchModal onClose={closeInputModal} />
                )}
              </div>
              <NavbarAvatar isName={isActiveName} />
            </>
          ) : (
            <>
              <NavbarList />

              <div className="w-1/5 hidden sm:block">
                <Input
                  OnClick={toggleInputModal}
                  Type="text"
                  Placeholder="Search"
                  ClassName="w-full px-6 py-3 relative rounded-xl outline-none shadow-sm"
                />
                {isInputModal && (
                  <RestaurantSearchModal onClose={closeInputModal} />
                )}
              </div>
              <NavbarLangButton />
            </>
          )}
        </>
      )}

      {/* HAMBURGER */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black m-0 min-h-screen bg-opacity-50 z-50 flex items-center justify-start">
          <div
            className={`${
              adminNavbar
                ? " bg-lightPurple_2 w-4/5 min-h-screen py-8 flex flex-col"
                : "bg-white w-4/5 min-h-screen p-8 flex flex-col"
            }`}
          >
            <button
              className="text-mainRed font-bold text-lg block text-start"
              onClick={toggleModal}
            >
              <Image width={35} height={0} alt="close2" src={"/close2.svg"} />
            </button>

            {adminNavbar ? (
              <>
                <AdminAside />
              </>
            ) : (
              <>
              {isToken ? (
                <Button
                className=" w-full mt-8 mx-auto py-4 rounded-full text-2xl text-black font-medium "
                innerText={isFullName}
              />
              ) : (<Button
                className=" w-4/5 mt-8 mx-auto py-4 rounded-full bg-mainRed text-2xl text-white font-medium "
                innerText={t("signUp")}
                onClick={()=>navigate.push("/login")}
              />)}
                
                <ul className="justify-around text-2xl w-full font-medium text-grayText1 flex flex-col mt-6 gap-3">
                  <li
                    onClick={() => navigate.push("/")}
                    className="cursor-pointer hover:text-mainRed transition-all text-[22px]"
                  >
                    {t("home")}
                  </li>
                  {isToken && (
                    <>
                      <li
                        onClick={() => navigate.push("/userProfile")}
                        className="cursor-pointer hover:text-mainRed transition-all text-[22px]"
                      >
                        Profile
                      </li>
                      <li
                        onClick={() => navigate.push("/userBasket")}
                        className="cursor-pointer hover:text-mainRed transition-all text-[22px]"
                      >
                        Your Basket
                      </li>
                      <li
                        onClick={() => navigate.push("/userOrder")}
                        className="cursor-pointer hover:text-mainRed transition-all text-[22px]"
                      >
                        Your Orders
                      </li>
                      <li
                        onClick={() => navigate.push("/userCheckout")}
                        className="cursor-pointer hover:text-mainRed transition-all text-[22px]"
                      >
                        Checkout
                      </li>
                    </>
                  )}
                  <li
                    onClick={() => navigate.push("/restaurants")}
                    className="cursor-pointer hover:text-mainRed transition-all text-[22px]"
                  >
                    {t("restaurants")}
                  </li>
                  <li
                    onClick={() => navigate.push("/about-us")}
                    className="cursor-pointer hover:text-mainRed transition-all text-[22px]"
                  >
                    {t("about_us")}
                  </li>
                  <li
                    onClick={() => navigate.push("/how-it-works")}
                    className="cursor-pointer hover:text-mainRed transition-all text-[22px]"
                  >
                    {t("how_it_works")}
                  </li>
                  <li
                    onClick={() => navigate.push("/faqs")}
                    className="cursor-pointer hover:text-mainRed transition-all text-[22px]"
                  >
                    FAQs
                  </li>
                  {isToken && (
                    <li
                      onClick={logOut}
                      className="cursor-pointer hover:text-mainRed transition-all text-[22px] mt-8"
                    >
                      Logout
                    </li>
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
      {/* HAMBURGER END */}
    </nav>
  );
};
