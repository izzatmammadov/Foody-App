import React from "react";
import Image from "next/image";

const AdminCategory = () => {
  return (
    <>
      <div className=" flex  justify-between text-sm   h-16 items-center px-8 border-t-2 border-neutral-700">
        <div className=" border px-2 rounded-lg grid-rows-1 ">1997</div>
        <p>
          <Image width="50" height="40" src="/adminMarqarita.svg" alt="" />
        </p>
        <p>Pizza</p>
        <p>yummy-pizza</p>
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
    </>
  );
};

export default AdminCategory;
