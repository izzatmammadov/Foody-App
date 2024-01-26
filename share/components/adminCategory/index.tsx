import React, { FC } from "react";
import Image from "next/image";

interface AdminCategoryProps {
  item: {
    id: number;
    image: string;
    name: string;
    slug: string;
  };
}

const AdminCategory: FC<AdminCategoryProps> = ({ item }) => {
  return (
    <>
      <tr className="text-center h-16  border-y border-gray-800 text-sm not-italic font-normal leading-6">
        <td className="text-center">
          <div className="flex  justify-center ">
            <p className="  border px-2 rounded-lg ">{item.id}</p>
          </div>
        </td>
        <td className="flex justify-center items-center">
          <Image width="50" height="40" src={item.image} alt="" />
        </td>
        <td>{item.name}</td>
        <td>{item.slug}</td>
        <td>
          <div className="flex justify-center items-right mx-3 gap-3">
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
        </td>
      </tr>
      {/* </div> */}
    </>
  );
};

export default AdminCategory;
