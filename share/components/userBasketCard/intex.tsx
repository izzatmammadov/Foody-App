import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modal";
import { Button } from "../Button";
import { ToastContainer } from "react-toastify";

interface UserBasketCardProps {
  name: string;
  price: number;
  count: number;
  imageSrc: string;
  increasBtn: () => void;
  decreaseBtn: () => void;
  clearBasket: () => void;
}

export const UserBasketCard: React.FC<UserBasketCardProps> = ({
  name,
  price,
  count,
  imageSrc,
  increasBtn,
  decreaseBtn,
  clearBasket,
}) => {
  const { t, i18n } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex relative sm:pr-9 justify-between items-center border-b-2 border-whiteLight2 py-8">
        <Image width={96} height={0} src={imageSrc} alt={imageSrc} />

        <div className="flex flex-col w-full pl-7">
          <p className="font-medium text-grayText2 text-2xl">{name}</p>
          <p className="font-medium text-lg">${price}</p>
        </div>

        <div className="flex flex-col bg-whiteLight1 sm:bg-white py-1 px-3 rounded-full gap-3 items-center">
          <button onClick={increasBtn}>
            <Image width={30} height={0} src={"/add.svg"} alt="add" />
          </button>
          <p className="text-lg font-medium">{count}</p>
          <button onClick={decreaseBtn}>
            <Image width={30} height={0} src={"/remove.svg"} alt="remove" />
          </button>
        </div>

        <span className="absolute top-0 left-0 sm:left-[97%] sm:top-4 w-8">
          <Image
            className="cursor-pointer"
            onClick={handleButtonClick}
            width={30}
            height={0}
            src={"/delete.svg"}
            alt="delete"
          />
        </span>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="flex justify-between items-center">
          <p className="mx-auto text-2xl sm:text-3xl font-medium">
            {t("modalDesc")}
          </p>
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
            onClick={clearBasket}
          />
        </div>
      </Modal>
    </>
  );
};
