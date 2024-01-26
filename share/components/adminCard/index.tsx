import Image from "next/image";
import React from "react";
interface cartTipe {
  foodname: string;
  restoranname: string;
  foodimage: string;
  foodprice: string | number;
}

const AdminCard = ({
  foodname,
  restoranname,
  foodimage,
  foodprice,
}: cartTipe) => {
  return (
    <>
      <div className=" rounded-lg w-52 h-72 bg-white">
        <div className="flex  flex-col items-center">
          <Image width="170" height="0" src={foodimage} alt="" />
        </div>
        <div className="m-4">
          <p className=" text-lg font-medium">{foodname}</p>
          <p className=" text-[#8E8E93]">{restoranname}</p>
        </div>
        <div className=" mx-3 flex justify-between">
          <p className="text-[#00B2A9;]  font-medium">${foodprice}</p>

          <div className="flex mx-3 gap-3">
            <Image
              width="24"
              height="0"
              src="/adminMarqaritaEditButton.svg"
              alt=""
              className=" cursor-pointer"
            />
            <Image
              width="24"
              height="0"
              src="/adminMarqaritaDeleteButton.svg"
              alt=""
              className=" cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCard;
