import Image from "next/image";
import React, { useState } from "react";
import Modal from "../Modal";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import { AdminLeftModal } from "../adminLeftModal";
interface cartTipe {
  foodname: string;
  restoranname: string | number;
  foodimage: string;
  foodprice: string | number;
}

const AdminCard = ({
  foodname,
  restoranname,
  foodimage,
  foodprice,
}: cartTipe) => {
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
          btn="Update Product"
          p="Edit product"
          p2="Edit your Product description and necessary information"
          onClickClose={changeHidden} hidden={isHiddenModal} />
      <div className=" rounded-lg w-52 h-72 bg-white">
        <div className="flex  flex-col items-center">
          <Image width="170" height="0" src={foodimage} alt="" />
        </div>
        <div className="m-4">
          <p className=" text-lg font-medium">{foodname}</p>
          <p className=" text-[#8E8E93]">{restoranname}</p>
        </div>
        <div className=" mx-3 flex justify-between">
          <p className="text-[#00B2A9;]  font-medium">${foodprice}</p>

          <div className="flex mx-3 gap-3">
            <Image
              width="24"
              height="0"
              src="/adminMarqaritaEditButton.svg"
              alt=""
              className=" cursor-pointer"
              onClick={changeHidden}
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

export default AdminCard;
