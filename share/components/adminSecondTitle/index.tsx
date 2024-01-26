import React from "react";
import { Button } from "../Button";
import { AdminLeftModal } from "../adminLeftModal";
import { useState } from "react";

const AdminSecondTitle = () => {
  //   const onClickButton = () => {};

  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);
  function onClickButton(): void {
    setIsHiddenModal((prev: boolean) => !prev);
    console.log(isHiddenModal);
  }

  return (
    <>
      <div className=" h-20  bg-darkBlue_3 rounded-2xl flex justify-between  items-center p-8">
        <div className="  text-white text-xl not-italic font-medium leading-5">
          Category
        </div>

        <Button
          onClick={onClickButton}
          className=" bg-lightPurple_3  h-7   pr-2 pl-3  text-white font-bold  text-xs rounded-[14px]"
          innerText="+ ADD catecory"
        />

        <AdminLeftModal onClickClose={onClickButton} hidden={isHiddenModal} />
      </div>{" "}
      <Button className="" onClick={onClickButton} innerText="" />
    </>
  );
};

export default AdminSecondTitle;
