import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modal";
import { Button } from "../Button";
import Image from "next/image";

interface AdminOrdersTableType {
  data: {
    id: number | string;
    customer_id: number | string;
    created: string;
    delivery_adress: string;
    amount: string;
    payment: string;
    contact: string;
  };
}

const AdminOrdersTable: FC<AdminOrdersTableType> = ({ data }:any) => {
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
      <tr className="h-14 text-center  border-slate-700  border-y text-gray-900 text-sm not-italic font-normal leading-5">
        <td>
          <div>
            <p className=" border-slate-700  border rounded-lg ml-2">
              {data.id}
            </p>
          </div>
        </td>
        <td>
          <div className="flex justify-center">
            <p className=" border-slate-700  border rounded-lg px-2 ">
              {data.customer_id}
            </p>
          </div>
        </td>
        <td>{data.created}</td>
        <td>{data.delivery_address} </td>
        <td>{data.payment_method}</td>
        <td>{data.amount}$</td>
        <td>{data.contact}</td>
        <td>
          <Image
            width="24"
            height="0"
            src="/adminMarqaritaDeleteButton.svg"
            alt=""
            className=" cursor-pointer"
            onClick={handleButtonClick}
          />
        </td>
      </tr>{" "}
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

export default AdminOrdersTable;
