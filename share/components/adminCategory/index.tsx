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
import { useGlobalStore } from "@/share/services/provider";

interface itemP {
  id: number;
  img_url: string;
  name: string;
  slug: string;
}

const AdminCategory = ({ item }: any) => {
  const { categoryData, setCategoryData } = useGlobalStore();

  const categoryRef = useRef<HTMLInputElement>(null);

  const slugRef = useRef<HTMLInputElement>(null);

  const imgRef = useRef<HTMLInputElement>(null);

  const { t, i18n } = useTranslation();

  const [imgUrl, setImgUrl] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeId, setActiveId] = useState("");

  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);

  function getImgUrl(url: string) {
    setImgUrl(url);
  }

  function changeHidden(): void {
    setIsHiddenModal((prev: boolean) => !prev);
  }

  //^ MODAL
  const handleButtonClick = (id: string) => {
    setIsModalOpen(true);
    setActiveId(id);
  };

  async function handleEditClick(id: string) {
    setActiveId(id);

    changeHidden();
    const res = await getEditCategories(id);

    if (res?.status === 200) {
      const currentData = res?.data.result.data;
      if (categoryRef && slugRef && imgRef) {
        (categoryRef.current as { value: string }).value =
          currentData?.name || "";

        (slugRef.current as { value: string }).value = currentData?.slug || "";

        (imgRef.current as { src: string }).src = currentData?.img_url || "";
      }
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

    const res = await updateCategories(activeId, form);
    if (res?.status === 200) {
      toast.success("Category updated successfully!");
      changeHidden();
      const updatedData = categoryData.map((item: any) => {
        if (item.id === activeId) {
          return res.data.data;
        }
        return item;
      });
      setCategoryData(updatedData);
    }
  }

  function isInputValid(
    category: string | undefined,
    slug: string | undefined,
    img: string | undefined
  ): boolean {
    return !!category && !!slug && !!img;
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  async function deleteCategory() {
    const res = await deleteCategories(activeId);

    if (res?.status === 204) {
      const updatedArr = categoryData.filter(
        (item: any) => item.id !== activeId
      );
      setCategoryData(updatedArr);

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
        <td className="flex justify-center items-center h-16">
          <Image
            className=" object-cover"
            width="50"
            height="40"
            src={item.img_url}
            alt=""
          />
        </td>
        <td className="max-w-56 text-center ">
          <p className="whitespace-nowrap overflow-x-scroll  max-w-56  text-center ">
            {item.name}
          </p>
        </td>
        <td className="max-w-56 ">
          <p className="whitespace-nowrap overflow-x-scroll  max-w-56 ">
            {item.slug}
          </p>
        </td>
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
