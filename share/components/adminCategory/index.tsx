import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import Modal from "../Modal";
import { Button } from "../Button";
import {
  Form,
  deleteCategories,
  getEditCategories,
  updateCategories,
} from "@/share/services/axios";
import { AdminLeftModal } from "../adminLeftModal";
import { ToastContainer, toast } from "react-toastify";

interface itemP {
  id: number;
  img_url: string;
  name: string;
  slug: string;
}

const AdminCategory = ({ item }: any) => {
  const categoryRef = useRef<HTMLInputElement>(null);

  const slugRef = useRef<HTMLInputElement>(null);

  const imgRef = useRef<HTMLInputElement>(null);

  const { t, i18n } = useTranslation();

  const [imgUrl, setImgUrl] = useState<string>("");

  // const [showPopup, setShowPopup] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeId, setActiveId] = useState("");

  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);

  function getImgUrl(url: string) {
    setImgUrl(url);
  }

  function changeHidden(): void {
    setIsHiddenModal((prev: boolean) => !prev);
    // console.log(isHiddenModal);
  }

  //^ MODAL
  const handleButtonClick = (id: string) => {
    setIsModalOpen(true);
    setActiveId(id);
    console.log(id);
  };
  
  async function handleEditClick(id: string) {
    setActiveId(id);
    console.log(activeId);

    changeHidden();
    const res = await getEditCategories(id);
    console.log(res);
    if (res?.status === 200) {
      const currentData = res?.data.result.data;
      if (categoryRef && slugRef && imgRef) {
        console.log(imgRef.current);

        (categoryRef.current as { value: string }).value =currentData?.name || "";

        (slugRef.current as { value: string }).value = currentData?.slug || "";

        (imgRef.current as { src: string }).src = currentData?.img_url || "";
      }
      console.log(currentData);
    }
  }

  async function updateCategory() {
    const category = categoryRef?.current?.value;
    const slug = slugRef?.current?.value;
    const img = imgRef.current?.src;

    const form: Form = {
      name: category,
      slug: slug,
      img_url: img,
    };

    if (!isInputValid(category, slug, img)) {
      toast.warning("Please fill all the inputs!");
      return;
    }
    // console.log(activeId);

    const res = await updateCategories(activeId, form);
    if (res?.status === 200) {
      toast.success("Category updated successfully!");
      changeHidden();
    }
    console.log(res);
  }

  function isInputValid(
    category: string | undefined,
    slug: string | undefined,
    img: string|undefined
  ): boolean {
    console.log(category, slug, img);

    return !!category && !!slug && !!img;
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  async function deleteCategory() {
    const res = await deleteCategories(activeId);
    console.log(res);
    if (res?.status === 204) {
      toast.success("Deleted successfully!");
      setIsModalOpen((prev) => !prev);
    }

    return;
  }

  //^ POP UP
  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  return (
    <>
      <ToastContainer />
      <AdminLeftModal
        onClickClose={changeHidden}
        mod="3"
        p="Edit Category  "
        p1="Upload  image"
        p2="Edit your Category information"
        hidden={isHiddenModal}
        btn="Edit Category"
        categoryRef={categoryRef}
        ButtonOnClick={updateCategory}
        getImgUrl={getImgUrl}
        slugRef={slugRef}
        imgRef={imgRef}
      />
      <tr className="text-center h-16  border-y border-gray-800 text-sm not-italic font-normal leading-6">
        <td className="text-center max-w-[75px]   overflow-x-auto">
          <div className="flex  justify-center ">
            <p className="  border px-2 rounded-lg  ">{item.id}</p>
          </div>
        </td>
        <td className="flex justify-center items-center">
          <Image width="50" height="40" src={item.img_url} alt="" />
        </td>
        <td>{item.name}</td>
        <td>{item.slug}</td>
        <td>
          <div className="flex justify-center items-right mx-3 gap-3">
            <Image
              width="24"
              height="0"
              src="/adminMarqaritaEditButton.svg"
              alt=""
              className=" cursor-pointer"
              onClick={() => handleEditClick(item.id)}
            />
            <Image
              width="24"
              height="0"
              src="/adminMarqaritaDeleteButton.svg"
              alt=""
              className=" cursor-pointer"
              onClick={() => handleButtonClick(item.id)}
            />
            {/* {showPopup && (
              <div className="absolute right-0 w-max bg-whiteLight1 shadow-md rounded-md p-2 flex flex-col items-center justify-center gap-1">
                <Button
                  className="text-[#14ae5c] cursor-pointer hover:text-[#109850]"
                  innerText={t("userDesc11")}
                />
                <hr className="w-full text-grayText1" />
                <Button
                  className="text-lightRed cursor-pointer hover:text-mainRed"
                  innerText={t("userDesc12")}
                />
              </div>
            )} */}
          </div>
        </td>
      </tr>
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
            onClick={deleteCategory}
          />
        </div>
      </Modal>
      {/* MODAL CONTENT FOR SHOW */}
    </>
  );
};

export default AdminCategory;
