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
      <div>
        <div>name</div>

        <Button
          onClick={onClickButton}
          className=" bg-lightPurple_3  h-7   pr-2 pl-3  text-white font-bold  text-xs rounded-[14px]"
          innerText="+ ADD catecory"
        />

        <Button className="" onClick={onClickButton} innerText="" />

        <AdminLeftModal onClickClose={onClickButton} hidden={isHiddenModal} />
      </div>
    </>
  );
};

export default AdminSecondTitle;
