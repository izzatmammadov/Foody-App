import React from "react";
interface Props{
  p?: string;
}
export const AdminModalDropdown = ({p="Restaurants"}:Props) => {
  return (
      <div>
      <p className=' text-grayText font-medium  mb-4   text-base'>{ p}</p>
      <select className=" w-full bg-darkBlue_4 rounded-2xl font-medium text-base text-whiteLight pl-3  py-4">
        <option value="" disabled selected>
          Choose...
        </option>
        <option className=" cursor-pointer" value="option1">Seçenek 1</option>
        <option value="option2">Seçenek 2</option>
              <option value="option3">Seçenek 3</option>
        <option value="option3">Seçenek 3</option>
        <option value="option3">Seçenek 3</option>
        <option value="option3">Seçenek 3</option>
        <option value="option3">Seçenek 3</option>
        <option value="option3">Seçenek 3</option>
        <option value="option3">Seçenek 3</option>
        <option value="option3">Seçenek 3</option>
        <option value="option3">Seçenek 3</option>
        <option value="option3">Seçenek 3</option>
              
      </select>
    </div>
  );
};
