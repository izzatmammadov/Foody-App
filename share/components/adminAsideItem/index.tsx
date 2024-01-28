import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

interface Props {
  img: string;
  innerText: string;
  onClick?:any;
  value?: string;
}

export const AdminAsideItem = ({ img, innerText, onClick, value }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const query = useRouter();

  useEffect(() => {

    activeItem();
  }, []);

  function activeItem() {
 

    let currentPath = query.asPath.split("/")[2];

   
   
    setActive(currentPath === value);
  }

  return (
    <div
      onClick={()=>onClick(value)}
      className={`flex gap-6 items-center cursor-pointer p-3  hover:bg-white  hover:rounded  hover:bg-opacity-10 ${
        active ? "bg-white rounded bg-opacity-10" : ""
      } `}
    >
      <Image src={img} alt="icon" width={24} height={24} />
      <p className="text-[#FCDDEC] text-base font-medium">{innerText}</p>
    </div>
  );
};
