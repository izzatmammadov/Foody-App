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

export const Navbar = () => {
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
    str += parsedUser.fullname.split(" ")[0][0];
    str += parsedUser.fullname.split(" ")[1][0];
    let avatar = str.toUpperCase();

    setIsFullName(fullName);
    setIsActiveName(avatar);

    if (parsedItem?.access_token) {
      setIsToken(true);
    }
  }, [isToken]);

  //^ INPUT MODAL

  const [isInputModal, setInputModal] = useState(false);

  const toggleInputModal = () => {
    setInputModal(!isInputModal);
  };

  const closeInputModal = () => {
    setInputModal(false);
  };

  return (
    <nav className="flex justify-between m-0 sm:m-8 items-center bg-whiteLight1 rounded-md py-11 px-5 sm:p-11">
      <h1 className="text-4xl font-extrabold flex items-center">
        <button onClick={toggleModal} className="sm:hidden block mr-5">
          <Image width={40} height={0} src={"/hamburger.svg"} alt="hamburger" />
        </button>
        Foody
        <span className="text-mainRed">.</span>
      </h1>

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

      {/* HAMBURGER */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black m-0 min-h-screen bg-opacity-50 z-50 flex items-center justify-start">
          <div className="bg-white w-4/5 min-h-screen p-8 flex flex-col">
            <button
              className="text-mainRed font-bold text-lg block text-start"
              onClick={toggleModal}
            >
              <Image width={35} height={0} alt="close2" src={"/close2.svg"} />
            </button>
            <Button
              className=" w-full mt-8 mx-auto py-4 rounded-full text-2xl text-black font-medium "
              innerText={isFullName}
            />
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
                  onClick={() => navigate.push("/login")}
                  className="cursor-pointer hover:text-mainRed transition-all text-[22px] mt-8"
                >
                  Logout
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
