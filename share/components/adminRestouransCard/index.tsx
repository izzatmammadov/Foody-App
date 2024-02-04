import Image from "next/image";
import React, { FC, useState } from "react";
import Modal from "../Modal";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import { AdminLeftModal } from "../adminLeftModal";

interface AdminRestouransCard{
    data:{
        image: string;
        name1: string;
        name2: string;
    
    }
}

const AdminRestouransCard : FC<AdminRestouransCard> = ({data}) => {
  const { t, i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //^ MODAL
  const handleButtonClick = () => {
    setIsModalOpen(true);
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
    console.log(isHiddenModal);
  }
  return (
    <>
          <AdminLeftModal
          p="Edit Restuarant  "
          mod="2"
          p1="Upload Image"
          btn="Update Restaurant"
          p2="Edit your Restuarants information"
          onClickClose={changeHidden}
          hidden={isHiddenModal} />
      <div className=" bg-white w-72 h-20 rounded-md">
        <div className=" flex  w-72 h-20 items-center justify-between">
          <Image className=" ml-3"
            width="65"
            height="0"
            src={data.image}
            alt=""
          />
          <div>
            <p className="text-gray-900 text-lg not-italic font-medium leading-6">
              {data.name1}
            </p>
            <p className="text-sm not-italic font-medium leading-6 ">{data.name2}</p>
          </div>
          <div className="flex ">
            {" "}
            <div className="flex flex-col mx-3 gap-3">
              <Image
                width="24"
                height="0"
                src="/adminMarqaritaDeleteButton.svg"
                alt=""
                className=" cursor-pointer"
                onClick={handleButtonClick}
              />
              <Image
                onClick={changeHidden}
                width="24"
                height="0"
                src="/adminMarqaritaEditButton.svg"
                alt=""
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
            />
          </div>
        </Modal>
        {/* MODAL CONTENT FOR SHOW */}
      </div>
    </>
  );
};

export default AdminRestouransCard;
