import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { UserCheckoutAside } from "../userCheckoutAside";
import { useRouter } from "next/router";
import { getProductForBasket, postOrder } from "@/share/services/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export interface dataType {
  basket_id: string;
  delivery_address: string | undefined;
  contact: string | undefined | number;
  payment_method: string;
}
export const UserCheckoutForm = () => {
  const { t } = useTranslation();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [radioBtn, setRadioBtn] = useState("");
  const addressRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  const [formCompleted, setFormCompleted] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const navigate = useRouter();

  const toggleButton1 = () => {
    setIsChecked1((prev) => !prev);
    setIsChecked2(false);
  };

  const toggleButton2 = () => {
    setIsChecked2((prev) => !prev);
    setIsChecked1(false);
  };
  function radioValue() {
    if (isChecked1 === true) {
      setRadioBtn("0");
      return;
    }
    setRadioBtn("1");
    return;
  }
  useEffect(() => {
    radioValue();
  }, [isChecked1]);
  console.log(radioBtn);
  const [basket, setBasket] = useState<any>({});

  async function renderBasket() {
    const res = await getProductForBasket();
    console.log(res);
    if (res?.status === 200) {
      setBasket(res.data.result.data);
    }
  }
  useEffect(() => {
    renderBasket();
  }, []);

  function isValidAzerbaijanPhoneNumber(phoneNumber: string) {
    const azPhoneNumberRegex = /^994(50|51|55|70|77|10)\d{7}$/;

    return azPhoneNumberRegex.test(phoneNumber);
  }
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    return emailRegex.test(email);
  };

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const addresValue = addressRef?.current?.value;
    const numberValue: any = numberRef?.current?.value;

    if (!addresValue || !numberValue || !radioBtn) {
      toast.warning("Please fill the all inputs!");
      return;
    }
    if (!isValidAzerbaijanPhoneNumber(numberValue)) {
      toast.warning("Invalid phone number!");
      return;
    }

    const data: dataType = {
      contact: numberValue,
      basket_id: basket.id,
      delivery_address: addresValue,
      payment_method: radioBtn,
    };

    const res = await postOrder(data);

    if (res?.status === 201) {
      setFormCompleted(true);
      setTimeout(() => {
        navigate.push("/restaurants");
      }, 1500);
    }
  };

  return (
    <>
      <ToastContainer />
      {formCompleted ? (
        <div className="w-full flex justify-center items-center bg-white sm:bg-whiteLight1">
          <div className="flex my-28 flex-col items-center justify-center gap-9">
            <Image width={200} height={0} src={"bigCheck.svg"} alt="bigCheck" />
            <p className=" text-grayText2 font-semibold text-4xl text-center">
              {t("userCheck7")}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <div className=" w-full sm:w-[58%] flex flex-col px-3 sm:px-8 py-10 flex-wrap gap-0 sm:bg-whiteLight1">
            <h2 className="font-semibold text-3xl text-grayText2">
              {t("userDesc4")}
            </h2>
            <form className="flex w-full gap-5 mt-4 flex-col">
              <div className="flex gap-1 flex-col">
                <label className="text-lg font-semibold text-grayText2">
                  {t("userCheck")}
                </label>
                <input
                  ref={addressRef}
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
                  ref={numberRef}
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
                onClick={handleCheckout}
              />
            </form>
          </div>
          <UserCheckoutAside />
        </div>
      )}
    </>
  );
};
