import React, { FC, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Modal from "../Modal";
import { Button } from "../Button";

interface AdminCategoryProps {
  item: {
    id: number;
    image: string;
    name: string;
    slug: string;
  };
}

const AdminCategory: FC<AdminCategoryProps> = ({ item }) => {
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

  return (
    <>
      <tr className="text-center h-16  border-y border-gray-800 text-sm not-italic font-normal leading-6">
        <td className="text-center">
          <div className="flex  justify-center ">
            <p className="  border px-2 rounded-lg ">{item.id}</p>
          </div>
        </td>
        <td className="flex justify-center items-center">
          <Image width="50" height="40" src={item.image} alt="" />
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
            />
            <Image
              width="24"
              height="0"
              src="/adminMarqaritaDeleteButton.svg"
              alt=""
              className=" cursor-pointer"
              onClick={handleButtonClick}
            />
            {showPopup && (
              <div className="absolute right-0 w-max bg-whiteLight1 shadow-md rounded-md p-2 flex flex-col items-center justify-center gap-1">
                <Button
                  className="text-[#14ae5c] cursor-pointer hover:text-[#109850]"
                  innerText={t("userDesc11")}
                />
                <hr className="w-full text-grayText1" />
                <Button
                  className="text-lightRed cursor-pointer hover:text-mainRed"
                  innerText={t("userDesc12")}
                  onClick={handleButtonClick}
                />
              </div>
            )}
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
          />
        </div>
      </Modal>
      {/* MODAL CONTENT FOR SHOW */}
    </>
  );
};

export default AdminCategory;
