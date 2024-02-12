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
  visibleDropwdown: boolean
}

const AdminSecondTitle: React.FC<AdminSecondTitleProps> = ({
  p1,
  name,
  onClick,
  callBackValue,
  resCategoryARR,
  buttonInnerText,
  visibleDropwdown
}) => {
  // const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);

  // const onClickButton = (): void => {
  //   setIsHiddenModal((prev: boolean) => !prev);
  //   console.log(isHiddenModal);
  // };
  // const callBackValuef = (value) => {
  //   callBackValue(value);
  // };

  return (
    <>
      <div className="h-20 bg-darkBlue_3 rounded-2xl flex justify-between items-center p-8">
        <div className="text-white text-xl not-italic font-medium leading-5">
          {name}
        </div>
        <div className=" flex gap-5 ">
          {visibleDropwdown ? (<AdminModalDropdown
          arr={resCategoryARR}
            callBackValue={callBackValue}
            p={p1}
            className="w-full bg-darkBlue_4 rounded-2xl font-medium text-base text-whiteLight "
            className2="flex  bg-darkBlue_4  gap-3  rounded-2xl  p-1 px-3 "
          />) : ("")}
          <Button
            onClick={onClick}
            className="bg-lightPurple_3 py-2 px-8 text-white font-bold text-sm rounded-[14px]"
            innerText={buttonInnerText}
          />
        </div>

        {/* <AdminLeftModal onClickClose={onClick} mod={mod} hidden={hidden} /> */}
      </div>
    </>
  );
};

export default AdminSecondTitle;
