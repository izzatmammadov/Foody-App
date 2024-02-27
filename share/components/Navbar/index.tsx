import Image from "next/image";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Input } from "../input";
import { RestaurantSearchModal } from "../restaurantSearchModal";
import { NavbarAvatar } from "../navbarAvatar";
import { NavbarList } from "../NavbarList";
import { NavbarLangButton } from "../navbarLangButton";
import { AdminNavbarAvatar } from "../adminNavbarAvatar";
import { AdminAside } from "../adminAside";
import { AdminLeftModal } from "../adminLeftModal";
import {
  createProduct,
  getProductForBasket,
  getProfileInfo,
  getRestourans,
} from "@/share/services/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalStore } from "@/share/services/provider";

interface NavbarProps {
  adminNavbar?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ adminNavbar }) => {
  const { t } = useTranslation();
  const navigate = useRouter();


//   // async function ReLogin() {
//   //   try {
//   //     const res = await getProfileInfo();
//   //   } catch (err: any) {
//   //     if (err?.response?.status == 401) {
//   //       setTimeout(() => {
//   //         navigate.push("/login");
//   //         localStorage.removeItem("userInfo");
//   //       }, 60000);
//   //       setTimeout(() => {
//   //         toast.error("Your browsing session has expired !");
//   //       }, 59300);
//   //       toast.warning(
//   //         "You will be logged out from the site in the next 1 minutes.!"
//   //       );
//   //     }
//   //   }
//   // }
//   // useEffect(() => {
//   //   ReLogin();
  //   // }, []);
  

  // const date: Date = new Date();

  // function reLogin() {
  //   const loginDate: number | null = parseInt(localStorage.getItem("loginDate") || "", 10);
  //   const currentSecond: number = date.getTime();
  //   const timeDifference: number = currentSecond - (loginDate || 0);
  
  //   // console.log(timeDifference / 1000);
  // if ((timeDifference / 1000) >= 3600) {
  //     toast.error("Your browsing session has expired !");
  //     setTimeout(() => {
  //       navigate.push("/login");
  //     }, 750);
  //     localStorage.removeItem("userInfo");
  //     localStorage.removeItem("tokenObj");
  //   } else if((timeDifference / 1000) >= 3540){
  //     toast.warning("You will be logged out from the site in the next 1 minutes.!");
      
  //   }

  //   return
  // }
  
  // useEffect(() => {
  //   reLogin();
  
  //   const intervalId = setInterval(() => {
  //     reLogin();
  //   }, 300000);
  
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [isToken, setIsToken] = useState(false);
  const [isActiveName, setIsActiveName] = useState("");
  const [isFullName, setIsFullName] = useState("");
  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);
  const [image, setImage] = useState("");
  const [restaurants, setRestaurants] = useState();
  const { products, setProducts } = useGlobalStore();
  const [filterRestouran, setFilterRestouran] = useState();


  const fetchRestaurants = async () => {
    try {
      const response = await getRestourans();
      const mapRestaurant = response?.data.result.data.map(
        (item: any) => item.name
      );
      setRestaurants(mapRestaurant);
    } catch (error) {
      console.error("Error can't fetching products:", error);
    }
  };



  useEffect(() => {
    fetchRestaurants();
  }, []);

  function changeHidden(): void {
    setIsHiddenModal((prev: boolean) => !prev);
  }

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const localItem: any = localStorage?.getItem("tokenObj");
    const localUser: any = localStorage?.getItem("userInfo");

    let parsedItem = JSON.parse(localItem);
    let parsedUser = JSON.parse(localUser);
    let fullName = parsedUser?.fullname;
    let str = " ";
    str += parsedUser?.fullname?.split(" ")[0]?.[0] ?? "";
    str += parsedUser?.fullname?.split(" ")[1]?.[0] ?? "";
    let avatar = str.toUpperCase();

    setIsFullName(fullName);
    setIsActiveName(avatar);

    if (parsedItem?.access_token) {
      setIsToken(true);
    } else {
      setIsActiveName("XX");
    }
  }, [isToken]);

  const logOut = () => {
    localStorage.removeItem("tokenObj");
    localStorage.removeItem("userInfo");
    navigate.push("/login");
  };

  //^ INPUT MODAL

  const [isInputModal, setInputModal] = useState(false);

  const toggleInputModal = async () => {
    setInputModal(!isInputModal);
    let respons = await getRestourans();
    let resData = respons?.data.result.data; 
    setFilterRestouran(resData);
  };

  const closeInputModal = () => {
    setInputModal(false);
  };

  //* ADD PRODUCT

  const addProductName = useRef<HTMLInputElement>(null);
  const addProductPrice = useRef<HTMLInputElement>(null);
  const addProductRestaurant = useRef<HTMLInputElement>(null);
  const addProductDesc = useRef<HTMLInputElement>(null);
  const img = useRef<HTMLInputElement>(null);

  const addProduct = async () => {
    const productName = addProductName.current?.value;
    const productPrice = addProductPrice.current?.value;
    const productRestaurant = addProductRestaurant.current?.value;
    const productDesc = addProductDesc.current?.value;

    if (
      !productName &&
      !productPrice &&
      !productRestaurant &&
      !productDesc &&
      !image
    ) {
      toast.warning("Please fill the correctly!");
      return;
    }

    const ProductValues = {
      name: productName,
      description: productDesc,
      img_url: image,
      rest_id: productRestaurant,
      price: productPrice,
    };

    try {
      const res = await createProduct(ProductValues);

      const productValue = res?.data;

      if (res?.status == 201 || res?.status == 200) {
        setProducts((prev: any) => [...prev, productValue]);

        toast.success("Product added successfully!");
        if (addProductName.current) addProductName.current.value = "";
        if (addProductDesc.current) addProductDesc.current.value = "";
        if (addProductPrice.current) addProductPrice.current.value = "";
        if (addProductRestaurant.current)
          addProductRestaurant.current.value = "";
        if (img.current) img.current.src = "/noimg.png";

        setTimeout(() => {
          changeHidden();
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNewImage = (image_url: string) => {
    setImage(image_url);
  };

  //* Restauran search functions

  async function searchRestauran(e:React.ChangeEvent<HTMLInputElement>) {
    let respons = await getRestourans();
    let resData = respons?.data.result.data; 
    console.log(e.target.value);
    
    let filterResData = resData.filter(function (item: any) {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    // console.log(filterResData);
    console.log(filterResData);
    
    setFilterRestouran(filterResData);
  }

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
      <AdminLeftModal
        onClickClose={changeHidden}
        mod="1"
        p="Add Product  "
        p1="Upload  image"
        p2="Add your Product information"
        hidden={isHiddenModal}
        btn="Create Product"
        ButtonOnClick={addProduct}
        addProductName={addProductName}
        addProductPrice={addProductPrice}
        addProductRestaurant={addProductRestaurant}
        addProductDesc={addProductDesc}
        getImgUrl={handleAddNewImage}
       
        arr={restaurants}
        imgRef={img}
      />
      {adminNavbar ? (
        <div className="flex gap-2 sm:gap-5">
          <Button
            onClick={changeHidden}
            className="hidden sm:block bg-lightPurple_3 text-white text-sm font-medium px-3 rounded-full shadow-sm shadow-textGreenLight hover:scale-95 transition-all duration-500"
            innerText={t("addCategory")}
          />
          <Button
            onClick={changeHidden}
            className="block sm:hidden bg-lightPurple_3 text-white text-2xl font-medium px-4 rounded-full shadow-sm shadow-textGreenLight hover:scale-95 transition-all duration-500"
            innerText="&#43;"
          />
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
                    OnChange={searchRestauran}
                  Type="text"
                  Placeholder="Search"
                  ClassName="w-full px-6 py-3 relative rounded-xl outline-none shadow-sm"
                />
                {isInputModal && (
                  <RestaurantSearchModal filterRestouran={filterRestouran}  onClose={closeInputModal} />
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
                  OnChange={searchRestauran}
                  Type="text"
                  Placeholder="Search"
                  ClassName="w-full px-6 py-3 relative rounded-xl outline-none shadow-sm"
                />
                {isInputModal && (
                  <RestaurantSearchModal
                    filterRestouran={filterRestouran}
                    onClose={closeInputModal}
                  />
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
                ) : (
                  <Button
                    className=" w-4/5 mt-8 mx-auto py-4 rounded-full bg-mainRed text-2xl text-white font-medium "
                    innerText={t("signUp")}
                    onClick={() => navigate.push("/login")}
                  />
                )}

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
          <ToastContainer />
        </div>
      )}
      {/* HAMBURGER END */}
    </nav>
  );
};
