import React from "react";
import { Button } from "../Button";

export const AdminHeader = () => {
  return (
    <div className=" bg-darkBlue_3  py-5 pl-5 pr-4 flex justify-between  rounded-b-xl">
      <h1
        style={{ letterSpacing: "0.84px" }}
        className=" text-[#F5F5F5] font-extrabold text-[28px]  "
      >
        Foody{" "}
        <span style={{ letterSpacing: "0.84px" }} className=" text-[#EAAB00]">
          .
        </span>{" "}
          </h1>
   
       <Button className=" bg-lightPurple_3  h-7   pr-2 pl-3  text-white font-bold  text-xs rounded-[14px]" innerText="+ ADD PRODUCT"/>
    </div>
  );
};
