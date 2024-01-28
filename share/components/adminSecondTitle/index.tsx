import React, { useState } from "react";
import { Button } from "../Button";
import { AdminLeftModal } from "../adminLeftModal";

interface AdminSecondTitleProps {
  name: string;
}

const AdminSecondTitle: React.FC<AdminSecondTitleProps> = ({ name }) => {
  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);

  const onClickButton = (): void => {
    setIsHiddenModal((prev: boolean) => !prev);
    console.log(isHiddenModal);
  };

  return (
    <>
      <div className="h-20 bg-darkBlue_3 rounded-2xl flex justify-between items-center p-8">
        <div className="text-white text-xl not-italic font-medium leading-5">
          {name}
        </div>

        <Button
          onClick={onClickButton}
          className="bg-lightPurple_3 h-7 pr-2 pl-3 text-white font-bold text-xs rounded-[14px]"
          innerText="+ ADD category"
        />

        <AdminLeftModal onClickClose={onClickButton} hidden={isHiddenModal} />
      </div>
    </>
  );
};

export default AdminSecondTitle;
