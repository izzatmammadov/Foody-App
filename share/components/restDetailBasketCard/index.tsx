import Image from "next/image";
import { Button } from "../Button";
import { useState } from "react";
import Modal from "../Modal";
import { useTranslation } from "react-i18next";

interface DetailBasketCardProps {
  name: string;
  desc?: string;
  price: number;
  count: number;
  imageSrc: string;
}

export const RestDetailBasketCard: React.FC<DetailBasketCardProps> = ({
  name,
  desc,
  price,
  count,
  imageSrc,
}) => {
  const { t } = useTranslation();
  const [itemCount, setItemCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const increaseCount = () => {
    setItemCount(itemCount + 1);
  };

  const decreaseCount = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };

  const updatedPrice = (price * itemCount).toFixed(2);

  //^ MODAL
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex justify-between items-center mt-4 gap-2 sm:gap-0 pt-4 border-t-2 border-whiteLight2">
        <div className="flex items-center gap-4">
          <Image
            className="hidden sm:block"
            width={60}
            height={0}
            src={imageSrc}
            alt={imageSrc}
          />
          <div className="flex flex-col gap-1">
            <p className="text-grayText2 font-semibold text-xl">{name}</p>
            <p className="text-grayText1 text-sm sm:text-md font-medium">
              ${updatedPrice}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-1">
          <div className="flex flex-col items-center bg-white px-3 rounded-full">
            <Button
              className=" text-2xl"
              innerText="+"
              onClick={increaseCount}
            />
            <p className="text-lg font-semibold">{itemCount}</p>
            <Button
              className=" text-3xl"
              innerText="-"
              onClick={decreaseCount}
            />
          </div>
          <Image
            className="hover:cursor-pointer"
            width={30}
            height={0}
            src={"/delete.svg"}
            alt="delete"
            onClick={handleButtonClick}
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="flex justify-between items-center">
          <p className="mx-auto text-2xl sm:text-3xl font-medium">{t("modalDesc")}</p>
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
    </>
  );
};
