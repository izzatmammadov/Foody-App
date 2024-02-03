import React, { useState } from "react";
import { Button } from "../Button";
import { AdminLeftModal } from "../adminLeftModal";
import { AdminModalDropdown } from "../adminModalDropdown";

interface AdminSecondTitleProps {
  p1?: string;
  name: string;
  onClick?: () => void;
}

const AdminSecondTitle: React.FC<AdminSecondTitleProps> = ({
  p1,
  name,
  onClick,
}) => {
  // const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);

  // const onClickButton = (): void => {
  //   setIsHiddenModal((prev: boolean) => !prev);
  //   console.log(isHiddenModal);
  // };

  return (
    <>
      <div className="h-20 bg-darkBlue_3 rounded-2xl flex justify-between items-center p-8">
        <div className="text-white text-xl not-italic font-medium leading-5">
          {name}
        </div>
        <div className=" flex gap-5 ">
          <AdminModalDropdown
            p={p1}
            className="w-full bg-darkBlue_4 rounded-2xl font-medium text-base text-whiteLight "
            className2="flex  bg-darkBlue_4  gap-3  rounded-2xl  p-1 px-3 "
          />
          <Button
            onClick={onClick}
            className="bg-lightPurple_3 h-7 pr-2 pl-3 text-white font-bold text-xs rounded-[14px]"
            innerText="+ ADD category"
          />
        </div>

        {/* <AdminLeftModal onClickClose={onClick} mod={mod} hidden={hidden} /> */}
      </div>
    </>
  );
};

export default AdminSecondTitle;
