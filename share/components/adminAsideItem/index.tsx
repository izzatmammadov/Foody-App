import Image from "next/image";
import React from "react";
interface Props {
  img: string;
  innerText: string;
    active: boolean;
    onClick?:()=>void;
}
export const AdminAsideItem = ({ img, innerText, active,onClick }: Props) => {
  return (
      <div
          onClick={onClick}
      className={`flex gap-6 items-center cursor-pointer p-3  ${
        active ? " bg-white  rounded  bg-opacity-10" : " "
      } `}
    >
      <Image src={img} alt="icon" width={24} height={24} />
      <p className=" text-[#FCDDEC] text-base  font-medium">{innerText}</p>
    </div>
  );
};
