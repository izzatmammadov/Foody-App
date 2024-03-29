import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import { AdminLeftModal } from "../adminLeftModal";
import {
  deleteRestourans,
  formtype,
  getCategories,
  getEditRestourans,
  updateRestourans,
} from "@/share/services/axios";
import { ToastContainer, toast } from "react-toastify";

import { useGlobalStore } from "@/share/services/provider";

interface AdminRestouransCard {
  data: {
    img_url: string;
    name: string;
    category_id: string;
  };
}

const AdminRestouransCard: FC<AdminRestouransCard> = ({ data }: any) => {
  const { restouranData, setRestouranData } = useGlobalStore();

  const { t, i18n } = useTranslation();

  const [showPopup, setShowPopup] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeId, setActiveId] = useState("");

  //*-------------
  const RestouransNameRef = useRef<HTMLInputElement>(null);

  const cuisineRef = useRef<HTMLInputElement>(null);

  const delivery_priceRef = useRef<HTMLInputElement>(null);

  const delivery_minRef = useRef<HTMLInputElement>(null);

  const addressRef = useRef<HTMLInputElement>(null);

  const category_idRef = useRef<HTMLInputElement>(null);

  const imgRef = useRef<HTMLInputElement>(null);

  const [imgUrl, setImgUrl] = useState<string>("");

  function getImgUrl(url: string): void {
    setImgUrl(url);
  }

  //^ MODAL
  const handleButtonClick = (id: string) => {
    setIsModalOpen(true);
    setActiveId(id);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  //^ POP UP
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);
  function changeHidden() {
    setIsHiddenModal((prev) => !prev);
  }

  async function handleEditClick(id: string) {
    setActiveId(id);

    changeHidden();
    const res = await getEditRestourans(id);

    if (res?.status === 200) {
      const currentData = res?.data.result.data;

      if (
        RestouransNameRef &&
        cuisineRef &&
        delivery_priceRef &&
        delivery_minRef &&
        addressRef &&
        category_idRef &&
        imgRef
      ) {
        (RestouransNameRef.current as HTMLInputElement).value =
          currentData?.name || "";
        (cuisineRef.current as HTMLInputElement).value =
          currentData?.cuisine || "";
        (delivery_priceRef.current as HTMLInputElement).value =
          currentData?.delivery_price || "";
        (delivery_minRef.current as HTMLInputElement).value =
          currentData?.delivery_min || "";
        (addressRef.current as HTMLInputElement).value =
          currentData?.address || "";
        (category_idRef.current as HTMLInputElement).value =
          currentData?.category_id || "";
        (imgRef.current as HTMLInputElement).src = currentData?.img_url || "";
      }
    }
  }

  async function UpdateRestouran() {
    const resName = RestouransNameRef?.current?.value;
    const rescuisine = cuisineRef?.current?.value;
    const resdelivery_price = delivery_priceRef?.current?.value;
    const resdelivery_min = delivery_minRef?.current?.value;
    const resaddress = addressRef?.current?.value;
    const rescategory_id = category_idRef?.current?.value;
    const resimgRef = imgRef?.current?.src;

    // const form: {
    //   name?: string;
    //   cuisine?: string;
    //   delivery_price?: number;
    //   delivery_min?: number;
    //   address?: string;
    //   category_id?: string;
    //   imgRef?: string;
    // }

    const form: formtype = {
      name: resName,
      cuisine: rescuisine,
      delivery_price: resdelivery_price,
      delivery_min: resdelivery_min,
      address: resaddress,
      category_id: rescategory_id,
      img_url: resimgRef,
    };

    const response = await updateRestourans(activeId, form);

    if (response?.status === 200 || response?.status === 201) {
      setTimeout(() => {
        changeHidden();
      }, 500);
      toast.success("Category updated successfully!");

      const updatedData = restouranData.map((item: any) => {
        if (item.id === activeId) {
          return response.data.data;
        }
        return item;
      });
      setRestouranData(updatedData);
    }
  }

  async function deleteRestouransfunction() {
    const res = await deleteRestourans(activeId);

    if (res?.status === 204) {
      const updatedArr = restouranData.filter(
        (item: any) => item.id !== activeId
      );
      setRestouranData(updatedArr);

      toast.success("Deleted successfully!");

      setIsModalOpen((prev) => !prev);
    }

    return;
  }
  const [resCategoryARR, setResCategoryARR] = useState();

  async function categoriesRender2() {
    try {
      const response = await getCategories();

      const categoryArry = response?.data.result.data;

      let items = categoryArry.map((item: any) => item.name);

      setResCategoryARR(items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    categoriesRender2();
  }, []);

  return (
    <>
      <ToastContainer />
      <AdminLeftModal
        arr={resCategoryARR}
        p="Edit Restuarant  "
        mod="2"
        p1="Upload Image"
        btn="Update Restaurant"
        p2="Edit your Restuarants information"
        onClickClose={changeHidden}
        hidden={isHiddenModal}
        RestouransNameRef={RestouransNameRef}
        cuisineRef={cuisineRef}
        delivery_priceRef={delivery_priceRef}
        delivery_minRef={delivery_minRef}
        addressRef={addressRef}
        category_idRef={category_idRef}
        imgRef={imgRef}
        ButtonOnClick={UpdateRestouran}
        getImgUrl={getImgUrl}
      />

      <div className=" bg-white w-72 h-20 rounded-md">
        <div className=" flex  w-72 h-20 items-center justify-between">
          <img
            className=" ml-3  h-16  object-cover"
            width="65"
            height="30"
            src={data?.img_url}
            alt=""
          />
          <div>
            <p className="text-gray-900 text-lg not-italic font-medium leading-6  whitespace-nowrap overflow-x-scroll  max-w-40 px-2 ">
              {data.name}
            </p>
            <p className="text-sm not-italic font-medium leading-6 whitespace-nowrap overflow-x-scroll  max-w-40 px-2   ">
              {data.category_id}
            </p>
          </div>
          <div className="flex ">
            {" "}
            <div className="flex flex-col mx-3 gap-3">
              <Image
                width="24"
                height="0"
                src="/adminMarqaritaDeleteButton.svg"
                alt=" "
                className=" cursor-pointer"
                // onClick={deleteRestourans}
                onClick={() => handleButtonClick(data.id)}
              />
              <Image
                // onClick={changeHidden}
                onClick={() => handleEditClick(data.id)}
                width="24"
                height="0"
                src="/adminMarqaritaEditButton.svg"
                alt=" "
                className=" cursor-pointer"
              />
            </div>
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
            <Button
              className="bg-mainRed border-2 text-white py-1 px-8 rounded-md border-mainRed shadow-md hover:scale-95 transition-all duration-500"
              innerText={t("modalDesc4")}
              onClick={deleteRestouransfunction}
            />
          </div>
        </Modal>
        {/* MODAL CONTENT FOR SHOW */}
      </div>
    </>
  );
};

export default AdminRestouransCard;
