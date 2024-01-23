import React from "react";
import { ImageInput } from "../ImageInput";
import { AdminModalInput } from "../adminModalInput";
import { AdminModalTexArea } from "../adminModalTextArea";
import { AdminModalDropdown } from "../adminModalDropdown";
import { Button } from "../Button";
import Image from "next/image";

interface Props {
  p?: string;
  p1?: string;
  p2?: string;
  mod?: string;
  btn?: string;
}

export const AdminLeftModal = ({
  p = "Add Product",
  p1 = "Upload your product image",
  p2 = "Add your Product description and necessary information",
  mod = "4",
  btn = "Create Product",
}: Props) => {
  return (
    <div className="  fixed  z-10  w-3/4   pl-12  right-0 top-0 h-screen">
      <div className=" bg-lightPurple_3 rounded-full   absolute  left-0  top-7 w-7 h-7 cursor-pointer">
        <Image alt="close-icon" height={28} width={28} src="/close.svg" />
      </div>
      <div className=" bg-darkBlue_2   flex-col pl-7 pt-7 pb-5 pr-14  max-h-screen overflow-y-auto h-screen">
        <div>
          <p className=" text-grayText font-medium text-2xl  mb-2">{p}</p>
        </div>
        <div className=" flex w-full h-36  mb-20">
          <div className="w-1/3">
            <p className=" text-grayText font-medium  text-lg  tracking-wide">
              {p1}
            </p>
            <Image src="/noimg.png" width={124} height={124} alt="img" />
          </div>
          <div className="w-2/3  pt-6 ">
            <ImageInput />
          </div>
        </div>
        <div className="flex w-full  mb-36">
          <div className="w-1/3">
            <p className=" text-grayText font-medium  text-lg  tracking-wide">
              {p2}
            </p>
          </div>
          <div className="w-2/3  pt-5 pl-5  pr-7 pb-7  rounded-2xl bg-darkBlue_5 max-h-[600px] overflow-y-auto ">
            {mod === "1" && (
              <div>
                <AdminModalInput p="Name" />
                <AdminModalTexArea />
                <AdminModalInput p="Price" />
                <AdminModalDropdown />
              </div>
            )}

            {mod === "2" && (
              <div>
                <AdminModalInput p="Name" />
                <AdminModalTexArea p="Cuisine" />
                <AdminModalInput p="Delivery Price $" />
                <AdminModalInput p="Delivery Min" />
                <AdminModalInput p="Address" />
                <AdminModalDropdown p="Category" />
              </div>
            )}
            {mod === "3" && (
              <div>
                <AdminModalInput p="Name" />
                <AdminModalInput p="Slug" />
              </div>
            )}
            {mod === "4" && (
              <div>
                <AdminModalInput p="Title" />
                <AdminModalTexArea p="Description" />
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-around  border-t-darkBlue_5 border-t-4 pt-6  gap-10">
          <Button
            className=" bg-darkBlue_5 text-white py-3 w-1/2 rounded-2xl"
            innerText="Cancel"
          />
          <Button
            className=" text-white bg-lightPurple_3 w-1/2 rounded-2xl"
            innerText={btn}
          />
          </div>
         
      </div>
    </div>
  );
};