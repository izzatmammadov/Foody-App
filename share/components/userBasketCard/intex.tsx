import Image from "next/image";
import { useState } from "react";

export const UserBasketCard: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const price: number = 7.4;

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const totalPrice = (price * count).toFixed(2);

  return (
    <div className="flex justify-between items-center border-y-2 border-whiteLight2 py-10">
      <Image width={96} height={0} src={"margaritaCard.svg"} alt="margarita" />

      <div className="flex flex-col w-full pl-7">
        <p className="font-medium text-grayText2 text-2xl">Papa John’s Pizza</p>
        <p className="font-medium text-lg">${totalPrice}</p>
      </div>

      <div className="flex flex-col bg-white py-1 px-3 rounded-full gap-3 items-center">
        <button onClick={handleAdd}>
          <Image width={30} height={0} src={"add.svg"} alt="add" />
        </button>
        <p className="text-lg font-medium">{count}</p>
        <button onClick={handleRemove}>
          <Image width={30} height={0} src={"remove.svg"} alt="remove" />
        </button>
      </div>
    </div>
  );
};

