import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modal";
import { Button } from "../Button";
import Image from "next/image";
import { deleteOrderHistory } from "@/share/services/axios";
import { useGlobalStore } from "@/share/services/provider";
import { ToastContainer, toast } from "react-toastify";

interface AdminOffersTableType {
  data: {
    id: number | string;
    customer_id: number | string;
    created: string;
    delivery_address: string;
    amount: string;
    payment_method: string|number;
    contact: string;
  };
}

//& DATE

const formatDate = (timestamp: any) => {
  const currentDate = new Date();
  const date = new Date(timestamp);
  const timeDifference = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
};

const AdminOrderHistoryTable: FC<AdminOffersTableType> = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { history, setHistory} = useGlobalStore()
console.log(data);


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

  //* DELETE ORDER

  const deleteOrderData = async () => {
    const response = await deleteOrderHistory(data?.id);
   

    if (response?.status === 204) {
      let filteredOrder = history.filter((item: any) => item.id !== data?.id);
      setHistory(filteredOrder);
      toast.success("Order deleted successfully!");
      handleModalClose();
    }
  };

  return (
    <>
    <ToastContainer/>
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
        <td>{formatDate(data.created)}</td>
        <td>{data.delivery_address} </td>   
        <td>{data.payment_method == 1 ? "Credit Card" : "Pay Cash"}</td>
        <td>{data.amount}</td>
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
            onClick={deleteOrderData}
          />
        </div>
      </Modal>
      {/* MODAL CONTENT FOR SHOW */}
    </>
  );
};

export default AdminOrderHistoryTable;
