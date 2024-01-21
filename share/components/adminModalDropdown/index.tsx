import React from "react";

export const AdminModalDropdown = () => {
  return (
      <div>
          <p className=' text-grayText font-medium  mb-2   text-base'>Restaurants</p>
      <select className=" w-full bg-darkBlue_4 rounded-2xl font-medium text-base text-whiteLight pl-3  py-3">
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
