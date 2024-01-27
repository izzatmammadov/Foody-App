import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { useState } from "react";
import Image from "next/image";

export const UserCheckoutForm = () => {
  const { t } = useTranslation();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const toggleButton1 = () => {
    setIsChecked1((prev) => !prev);
    setIsChecked2(false);
  };

  const toggleButton2 = () => {
    setIsChecked2((prev) => !prev);
    setIsChecked1(false);
  };

  return (
    <form className="flex w-full gap-5 mt-4 flex-col">
      <div className="flex gap-1 flex-col">
        <label className="text-lg font-semibold text-grayText2">
          {t("userCheck")}
        </label>
        <input
          className="p-4 rounded-md shadow-sm"
          type="text"
          placeholder="Your Street Name"
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label className="text-lg font-semibold text-grayText2">
          {t("userCheck2")}
        </label>
        <input
          className="p-4 rounded-md shadow-sm"
          type="number"
          placeholder="+994"
        />
      </div>
      <div className="flex flex-col items-start sm:flex-row sm:items-center gap-x-12 gap-y-2 flex-wrap">
        <label className="w-full text-lg font-semibold text-grayText2">
          {t("userCheck3")}
        </label>
        <div className="flex gap-2 items-center">
          {isChecked1 ? (
            <Image
              width={30}
              height={0}
              src={"userCheck.svg"}
              alt="userCheck"
            />
          ) : (
            <Image
              width={30}
              height={0}
              src={"userNotCheck.svg"}
              alt="userCheck"
            />
          )}
          <label
            onClick={toggleButton1}
            htmlFor="payment1"
            className="text-grayText1"
          >
            {t("userCheck4")}
          </label>
        </div>
        <div className="flex gap-2 items-center">
          {isChecked2 ? (
            <Image
              width={30}
              height={0}
              src={"userCheck.svg"}
              alt="userCheck"
            />
          ) : (
            <Image
              width={30}
              height={0}
              src={"userNotCheck.svg"}
              alt="userCheck"
            />
          )}

          <label
            onClick={toggleButton2}
            htmlFor="payment2"
            className="text-grayText1"
          >
            {t("userCheck5")}
          </label>
        </div>
      </div>
      <Button
        className="w-full p-4 font-semibold text-lg sm:text-2xl bg-[#6fcf97] text-white rounded-md hover:scale-95 transition-all duration-500"
        innerText={t("userDesc4")}
      />
    </form>
  );
};
