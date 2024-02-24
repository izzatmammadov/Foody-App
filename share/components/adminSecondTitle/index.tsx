import React from "react";
import { Button } from "../Button";
import { AdminModalDropdown } from "../adminModalDropdown";

interface AdminSecondTitleProps {
  p1?: string;
  name?: string;
  onClick?: () => void;
  callBackValue?: any;
  resCategoryARR: any;
  buttonInnerText: string;
  visibleDropwdown: boolean;
  visibleButton: boolean;
}

const AdminSecondTitle: React.FC<AdminSecondTitleProps> = ({
  p1,
  name,
  onClick,
  callBackValue,
  resCategoryARR,
  buttonInnerText,
  visibleDropwdown,
  visibleButton,
}) => {
  return (
    <>
      <div className=" bg-darkBlue_3 rounded-2xl flex flex-col sm:flex-row justify-between items-center p-8">
        <div className="text-white text-xl not-italic font-medium leading-5">
          {name}
        </div>
        <div className="mt-3 sm:mt-0 flex flex-col items-center    sm:flex-row gap-5 ">
          {visibleDropwdown ? (
            <AdminModalDropdown
              arr={resCategoryARR}
              callBackValue={callBackValue}
              p={p1}
              className=" bg-darkBlue_4 rounded-2xl font-medium text-base  text-whiteLight w-[150px] overflow-x-auto"
              className2="flex  bg-darkBlue_4  gap-3   rounded-2xl  p-1 px-3 "
            />
          ) : (
            ""
          )}
          {visibleButton ? (
            <Button
              onClick={onClick}
              className="bg-lightPurple_3 py-2 px-8 text-white font-bold text-sm rounded-[14px]"
              innerText={buttonInnerText}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminSecondTitle;
