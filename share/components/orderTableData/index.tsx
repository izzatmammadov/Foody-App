import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import Modal from "../Modal";
import { OrderTableDetail } from "../orderTableDetail";
import { deleteOrder } from "@/share/services/axios";
import { useGlobalStore } from "@/share/services/provider";

interface TableDatailProps {
  id: number | string;
  time: number | string;
  adress: string;
  amount: number;
  payment: string;
  contact: number;
}

export const TableData: React.FC<TableDatailProps> = ({
  id,
  time,
  adress,
  amount,
  payment,
  contact,
}) => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const { orderData, setOrderData } = useGlobalStore();

  async function inDeleteOrder() {
    const response = await deleteOrder(id);
    
    if (response?.status == 204) {
      let newdata = orderData.filter((item: any) => item.id !== id);
      setOrderData(newdata);
      handleModalClose();
    }
  }

  //^ MODAL1
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  //^ MODAL2

  const handleButtonClick2 = () => {
    setIsModalOpen2(true);
  };

  const handleModalClose2 = () => {
    setIsModalOpen2(false);
  };

  //^ POP UP
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <tr>
        <td className="py-2 px-4 border-b border-whiteLight3">{id}</td>
        <td className="py-2 px-4 border-b border-whiteLight3">{time} PM</td>
        <td className="py-2 px-0 sm:px-4 border-b border-whiteLight3 text-center sm:text-start w-60">
          {adress}
        </td>
        <td className="py-2 px-4 border-b border-whiteLight3">${amount}</td>
        <td className="py-2 px-4 border-b border-whiteLight3">{payment}</td>
        <td className="py-2 px-4 border-b border-whiteLight3">+{contact}</td>
        <td className="py-2 px-4 border-b border-whiteLight3">
          <div className="relative inline-block">
            <Image
              className="cursor-pointer absolute sm:left-0 sm:relative"
              width={5}
              height={0}
              src={"3dots.svg"}
              alt="3dots"
              onClick={togglePopup}
            />

            {/* Popup */}
            {showPopup && (
              <div className="absolute right-2 w-max bg-whiteLight1 shadow-md rounded-md p-2 flex flex-col items-center justify-center gap-1">
                <Button
                  className="text-[#14ae5c] cursor-pointer hover:text-[#109850]"
                  innerText={t("userDesc11")}
                  onClick={handleButtonClick2}
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

      {/* Delete Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="flex justify-center items-center">
          <p className="mx-auto text-2xl sm:text-3xl font-medium">
            {t("modalDesc")}
          </p>
          <Button
            className="text-mainRed text-lg mr-1 sm:mr-0"
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
            onClick={inDeleteOrder}
            className="bg-mainRed border-2 text-white py-1 px-8 rounded-md border-mainRed shadow-md hover:scale-95 transition-all duration-500"
            innerText={t("modalDesc4")}
          />
        </div>
      </Modal>

      {/* Show Modal */}
      <Modal isOpen={isModalOpen2} onClose={handleModalClose2}>
        <OrderTableDetail id={id} />

        <Button
          className="mt-4 border-grayText1 text-grayText1 py-1 px-8 rounded-md border-2 shadow-md hover:scale-95 transition-all duration-500"
          innerText={t("userOrder6")}
          onClick={handleModalClose2}
        />
      </Modal>
    </>
  );
};
