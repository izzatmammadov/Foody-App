import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import { AdminLeftModal } from "../adminLeftModal";
import {
  ProductValues,
  deleteProduct,
  getProducts,
  getRestourans,
  updateProduct,
} from "@/share/services/axios";
import { useGlobalStore } from "@/share/services/provider";
import { ToastContainer, toast } from "react-toastify";
interface cartTipe {
  foodname: string;
  restoranname: string | number;
  foodimage: string;
  foodprice: string | number;
  food_id: any;
}

const AdminCard = ({
  foodname,
  restoranname,
  foodimage,
  food_id,
  foodprice,
}: cartTipe) => {
  const { t, i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const { products, setProducts } = useGlobalStore();
  const [restaurants, setRestaurants] = useState();


  //^ MODAL
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  //!DELETE PRODUCT

  const handleButtonDelete = async () => {
    const res = await deleteProduct(food_id);
    if (res?.status == 204) {
      let newProduct = products?.filter((item: any) => item?.id !== food_id);
      setProducts(newProduct);
      toast.success("Deleted Successfully!");
      setIsModalOpen((prev) => !prev);
    }
  };

  function getImgUrl(url: string) {
    setImage(url);
  }

  const addProductName = useRef<HTMLInputElement>(null);
  const addProductPrice = useRef<HTMLInputElement>(null);
  const addProductRestaurant = useRef<HTMLInputElement>(null);
  const addProductDesc = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);


  //*EDIT PRODUCT

  const editProduct = async () => {
    const productName = addProductName?.current?.value;
    const productPrice = addProductPrice?.current?.value;
    const productDesc = addProductDesc?.current?.value;
    const productRestaurant = addProductRestaurant?.current?.value;
    const img = imgRef.current?.src;

    const productValues: ProductValues = {
      name: productName,
      description: productDesc,
      img_url: img,
      rest_id: productRestaurant,
      price: productPrice,
    };

    if (
      !isInputValid(
        productName,
        productDesc,
        img,
        productRestaurant,
        productPrice
      )
    ) {
      toast.warning("Please fill the correctly!");
    }

    const res = await updateProduct(food_id, productValues);

    if (res?.status == 200) {
      toast.success("Edit was successfully!"); //!error verir 
      const updatedData = products.map((item: any) => {
        if (item?.id === food_id) {
          return productValues;
        }
        return item;
      });
      setProducts(updatedData);

      setTimeout(() => {
        changeHidden();
      }, 500);
    }
  };

  function isInputValid(
    name: string | undefined,
    description: string | undefined,
    img_url: string | undefined,
    rest_id: string | undefined,
    price: string | undefined
  ): boolean {
    return !!name && !!description && !!img_url && !!rest_id && !!price;
  }

   //* RENDER RESTAURANTS FOR PRODUCT

   const renderRestaurants = async () => {
    const res = await getRestourans();
    let item = res?.data.result.data.map((i: any) => i.name);
    setRestaurants(item);
  };



  useEffect(() => {
    renderRestaurants();
  }, []);

  //& HANDLE EDIT

  const handleEdit = async () => {
    changeHidden();
    const res: any = await getProducts();
    if (res?.status === 200) {
      const currentData = res?.data?.result.data;
      const filteredProduct = currentData.filter(
        (item: any) => item?.id == food_id
      );

      if (filteredProduct) {
        (addProductName?.current as { value: string }).value =
          filteredProduct[0]?.name || "";

        (addProductDesc?.current as { value: string }).value =
          filteredProduct[0]?.description || "";

        (addProductPrice?.current as { value: string }).value =
          filteredProduct[0]?.price || "";

        (addProductRestaurant?.current as { value: string }).value =
          filteredProduct[0]?.rest_id || "";

        (imgRef?.current as { src: string }).src =
          filteredProduct[0]?.img_url || "";
      }
    }

  };


  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  //^ POP UP
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);

  async function changeHidden() {
    setIsHiddenModal((prev) => !prev);
  }
  return (
    <>
      <AdminLeftModal
        btn="Update Product"
        p="Edit product"
        p2="Edit your Product description and necessary information"
        onClickClose={changeHidden}
        hidden={isHiddenModal}
        imgRef={imgRef}
        addProductName={addProductName}
        addProductDesc={addProductDesc}
        addProductPrice={addProductPrice}
        addProductRestaurant={addProductRestaurant}
        getImgUrl={getImgUrl}
        ButtonOnClick={editProduct}
        arr={restaurants}
      />
      <ToastContainer />
      <div className=" rounded-lg w-52 h-72 bg-white">
        <div className="flex  flex-col items-center mt-3 py-2">
          <img className="h-40 object-cover" width="170" height="158" src={foodimage} alt="" />
        </div>
        <div className="m-1 mx-5">
          <p className=" text-lg font-medium">{foodname}</p>
          <p className=" text-[#8E8E93]">{restoranname}</p>
        </div>
        <div className=" mx-5 flex justify-between">
          <p className="text-[#00B2A9;] font-medium">${foodprice}</p>

          <div className="flex mx-3 gap-3">
            <Image
              width="24"
              height="0"
              src="/adminMarqaritaEditButton.svg"
              alt=""
              className=" cursor-pointer"
              onClick={handleEdit}
            />
            <Image
              width="24"
              height="0"
              src="/adminMarqaritaDeleteButton.svg"
              alt=""
              className=" cursor-pointer"
              onClick={handleButtonClick}
            />
          </div>
        </div>
        {/* MODAL CONTENT FOR DELETE */}
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <div className="flex justify-between items-center">
            <p className="mx-auto text-3xl font-medium">{t("modalDesc")}</p>
            <Button
              className="text-mainRed text-lg"
              innerText="&#10006;"
              onClick={handleModalClose}
            />
          </div>

          <p className=" text-grayText1 w-2/3 mx-auto text-center my-5">
            {t("modalDesc2")}
          </p>

          <div className="mx-auto flex items-center justify-center gap-9">
            <Button
              className=" border-grayText1 text-grayText1 py-1 px-8 rounded-md border-2 shadow-md hover:scale-95 transition-all duration-500"
              innerText={t("modalDesc3")}
              onClick={handleModalClose}
            />
            <div onClick={handleButtonDelete}>
              <Button
                className="bg-mainRed border-2 text-white py-1 px-8 rounded-md border-mainRed shadow-md hover:scale-95 transition-all duration-500"
                innerText={t("modalDesc4")}
              />
            </div>
          </div>
        </Modal>
        {/* MODAL CONTENT FOR SHOW */}
      </div>
    </>
  );
};

export default AdminCard;
