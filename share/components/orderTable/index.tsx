import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modal";
import { Button } from "../Button";

export const Table = () => {
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
      <table className="min-w-full bg-white text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-whiteLight3">ID</th>
            <th className="py-2 px-4 border-b border-whiteLight3">
              {t("userDesc6")}
            </th>
            <th className="py-2 px-4 border-b border-whiteLight3">
              {t("userDesc7")}
            </th>
            <th className="py-2 px-4 border-b border-whiteLight3">
              {t("userDesc8")}
            </th>
            <th className="py-2 px-4 border-b border-whiteLight3">
              {t("userDesc9")}
            </th>
            <th className="py-2 px-4 border-b border-whiteLight3">
              {t("userDesc10")}
            </th>
            <th className="py-2 px-4 border-b border-whiteLight3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-whiteLight3">0001</td>
            <td className="py-2 px-4 border-b border-whiteLight3">12:30 PM</td>
            <td className="py-2 px-4 border-b border-whiteLight3 text-start w-60">
              29 Eve Street, 543 Evenue Road, Ny 87876
            </td>
            <td className="py-2 px-4 border-b border-whiteLight3">$50.00</td>
            <td className="py-2 px-4 border-b border-whiteLight3">
              Credit Card
            </td>
            <td className="py-2 px-4 border-b border-whiteLight3">
              994-50-111-11-11
            </td>
            <td className="py-2 px-4 border-b border-whiteLight3">
              <div className="relative inline-block">
                <Image
                  className="cursor-pointer"
                  width={5}
                  height={0}
                  src={"3dots.svg"}
                  alt="3dots"
                  onClick={togglePopup}
                />

                {/* Popup */}
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
          <tr>
            <td className="py-2 px-4 border-b border-whiteLight3">0002</td>
            <td className="py-2 px-4 border-b border-whiteLight3">2:45 PM</td>
            <td className="py-2 px-4 border-b border-whiteLight3 text-start w-60">
              29 Eve Street, 543 Evenue Road, Ny 87876
            </td>
            <td className="py-2 px-4 border-b border-whiteLight3">$75.00</td>
            <td className="py-2 px-4 border-b border-whiteLight3">PayPal</td>
            <td className="py-2 px-4 border-b border-whiteLight3">
              994-50-111-11-11
            </td>
            <td className="py-2 px-4 border-b border-whiteLight3">
              <div className="relative inline-block">
                <Image
                  className="cursor-pointer"
                  width={5}
                  height={0}
                  src={"3dots.svg"}
                  alt="3dots"
                  onClick={togglePopup}
                />

                {/* Popup */}
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

          <tr>
            <td className="py-2 px-4 border-b border-whiteLight3">0003</td>
            <td className="py-2 px-4 border-b border-whiteLight3">5:00 PM</td>
            <td className="py-2 px-4 border-b border-whiteLight3 text-start w-60">
              29 Eve Street, 543 Evenue Road, Ny 87876
            </td>
            <td className="py-2 px-4 border-b border-whiteLight3">$100.00</td>
            <td className="py-2 px-4 border-b border-whiteLight3">Cash</td>
            <td className="py-2 px-4 border-b border-whiteLight3">
              994-50-111-11-11
            </td>
            <td className="py-2 px-4 border-b border-whiteLight3">
              <div className="relative inline-block">
                <Image
                  className="cursor-pointer"
                  width={5}
                  height={0}
                  src={"3dots.svg"}
                  alt="3dots"
                  onClick={togglePopup}
                />

                {/* Popup */}
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
        </tbody>
      </table>
      {/* MODAL CONTENT */}
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
    </>
  );
};
