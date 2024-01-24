import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const UserBasketCard: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [countPizza, setCountPizza] = useState<number>(1);
  const pricePizza: number = 14.4;

  const [countCoffee, setCountCoffee] = useState<number>(1);
  const priceCoffee: number = 5.0;

  const [countBurger, setCountBurger] = useState<number>(1);
  const priceBurger: number = 8.3;

  const handleAddPizza = () => {
    setCountPizza(countPizza + 1);
  };

  const handleRemovePizza = () => {
    if (countPizza > 1) {
      setCountPizza(countPizza - 1);
    }
  };

  const handleAddBurger = () => {
    setCountBurger(countBurger + 1);
  };

  const handleRemoveBurger = () => {
    if (countBurger > 1) {
      setCountBurger(countBurger - 1);
    }
  };

  const handleAddCoffee = () => {
    setCountCoffee(countCoffee + 1);
  };

  const handleRemoveCoffee = () => {
    if (countCoffee > 1) {
      setCountCoffee(countCoffee - 1);
    }
  };

  const totalPricePizza = (pricePizza * countPizza).toFixed(2);
  const totalPriceBurger = (priceBurger * countBurger).toFixed(2);
  const totalPriceCoffee = (priceCoffee * countCoffee).toFixed(2);
  const totalBill = (
    parseFloat(totalPricePizza) + parseFloat(totalPriceCoffee) + parseFloat(totalPriceBurger)
  ).toFixed(2);

  return (
     
<>
      <div className="flex items-center gap-2 border-b-2 border-whiteLight2 pb-4">
        <Image width={20} height={0} src={"basketIcon.svg"} alt="basketIcon" />
        <p className="text-mainRed font-medium">{countPizza + countBurger + countCoffee} {t("items")}</p>
      </div>

      {/* Pizza Section */}
      <div className="flex justify-between items-center border-b-2 border-whiteLight2 py-10">
        <Image width={96} height={0} src={"margaritaCard.svg"} alt="margarita" />

        <div className="flex flex-col w-full pl-7">
          <p className="font-medium text-grayText2 text-2xl">Papa John’s Pizza</p>
          <p className="font-medium text-lg">${totalPricePizza}</p>
        </div>

        <div className="flex flex-col bg-white py-1 px-3 rounded-full gap-3 items-center">
          <button onClick={handleAddPizza}>
            <Image width={30} height={0} src={"add.svg"} alt="add" />
          </button>
          <p className="text-lg font-medium">{countPizza}</p>
          <button onClick={handleRemovePizza}>
            <Image width={30} height={0} src={"remove.svg"} alt="remove" />
          </button>
        </div>
      </div>

      {/* Burger Section */}
      <div className="flex justify-between items-center border-b-2 border-whiteLight2 py-10">
        <Image width={96} height={0} src={"burgerAnimation.svg"} alt="cheeseburger" />

        <div className="flex flex-col w-full pl-7">
          <p className="font-medium text-grayText2 text-2xl">Papa John’s Burger</p>
          <p className="font-medium text-lg">${totalPriceBurger}</p>
        </div>

        <div className="flex flex-col bg-white py-1 px-3 rounded-full gap-3 items-center">
          <button onClick={handleAddBurger}>
            <Image width={30} height={0} src={"add.svg"} alt="add" />
          </button>
          <p className="text-lg font-medium">{countBurger}</p>
          <button onClick={handleRemoveBurger}>
            <Image width={30} height={0} src={"remove.svg"} alt="remove" />
          </button>
        </div>
      </div>

      {/* Coffee Section */}
      <div className="flex justify-between items-center border-b-2 border-whiteLight2 py-10">
        <Image width={96} height={0} src={"papaCoffee.svg"} alt="coffee" />

        <div className="flex flex-col w-full pl-7">
          <p className="font-medium text-grayText2 text-2xl">Papa John’s Special Coffee</p>
          <p className="font-medium text-lg">${totalPriceCoffee}</p>
        </div>

        <div className="flex flex-col bg-white py-1 px-3 rounded-full gap-3 items-center">
          <button onClick={handleAddCoffee}>
            <Image width={30} height={0} src={"add.svg"} alt="add" />
          </button>
          <p className="text-lg font-medium">{countCoffee}</p>
          <button onClick={handleRemoveCoffee}>
            <Image width={30} height={0} src={"remove.svg"} alt="remove" />
          </button>
        </div>
      </div>

      {/* Total Bill Section */}
      <div className="bg-mainRed text-white flex items-center mt-8 justify-between pl-10 pr-2 py-2 rounded-full shadow-md">
        <p className="font-medium text-xl">{t("userDesc4")}</p>
        <button className="bg-white text-mainRed rounded-full py-1 px-14 font-medium text-lg hover:scale-95 transition-all duration-500">
          ${totalBill}
        </button>
      </div>
    </>
  );
};
