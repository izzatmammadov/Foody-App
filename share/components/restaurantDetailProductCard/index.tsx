// RestDetailProductReact.tsx
import { useState } from "react";
import Image from "next/image";
import { Button } from "../Button";
import { getProducts } from "@/share/services/axios";

interface DetailProductCardProps {
  name: string;
  desc?: string;
  price: any;
  imageSrc: string;
  lokal: any;
  onClick?: any;
}

export const RestDetailProductReact: React.FC<DetailProductCardProps> = ({
  name,
  desc,
  price,
  imageSrc,
  lokal,
  onClick,
}) => {
  return (
    <div className="flex justify-between items-center gap-2 sm:gap-0 p-4 border-t-2 border-whiteLight2">
      <div className="flex items-center gap-8">
        <Image
          className="hidden sm:block"
          width={80}
          height={0}
          src={imageSrc}
          alt={imageSrc}
        />
        <div className="flex flex-col gap-1">
          <p className="text-grayText2 font-semibold text-xl">{name}</p>
          <p className="text-grayText1 text-sm sm:text-md font-medium">
            {desc}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-grayText1 hidden sm:block font-medium text-sm">
          From
        </p>
        <div className="flex items-center gap-2 sm:gap-8">
          <p className="font-semibold text-grayText2 text-lg">
            {/* ${updatedPrice.toFixed(2)} */}${price}
          </p>
          <Button
            onClick={onClick}
            className="py-2 px-4 rounded-full border-2 border-whiteLight3 text-whiteLight3 text-2xl hover:border-green hover:bg-green hover:text-white transition-all duration-200"
            innerText="+"
          />
        </div>
      </div>
    </div>
  );
};
