import React, { useState } from "react";
import { Button } from "../Button";
import { AdminLeftModal } from "../adminLeftModal";
interface Props{
  onClickButton?: ()=>void,
}
export const AdminHeader = () => {
  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);
  function changeHidden(): void {
    setIsHiddenModal((prev: boolean) => !prev);
    console.log(isHiddenModal);
  }


  return (
    <div className=" bg-darkBlue_3  py-5 pl-5 pr-4 flex justify-between  mb-4 rounded-b-xl">
         <AdminLeftModal onClickClose={changeHidden} mod="1"  hidden={isHiddenModal} />
      <h1
        style={{ letterSpacing: "0.84px" }}
        className=" text-[#F5F5F5] font-extrabold text-[28px]  "
      >
        Foody{" "}
        <span style={{ letterSpacing: "0.84px" }} className=" text-[#EAAB00]">
          .
        </span>{" "}
          </h1>
   
       <Button onClick={changeHidden}  className=" bg-lightPurple_3  h-7   pr-2 pl-3  text-white font-bold  text-xs rounded-[14px]" innerText="+ ADD PRODUCT"/>
    </div>
  );
};
