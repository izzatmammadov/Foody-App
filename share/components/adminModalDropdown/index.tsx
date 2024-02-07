import React, { useState } from "react";

interface Props {
  p?: string;
  arr?: string[];
  className?: string;
  className2?: string;
  useRef?: any;
  callBackValue?: any;
}

export const AdminModalDropdown = ({
  p = "Restaurants",

  arr = ["item1", "item2", "item3"],

  className,

  useRef,

  className2,

  callBackValue,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>("");

  // function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void {
  //   const value = e.target.value;
  //   setSelectedValue(value);
  //   // console.log(value);
  //   callBackValue(value);
  // }

  return (
    <div className={className2}>
      <p className=" text-white font-medium  text-base">{p}</p>
      <select value={selectedValue} className={className}>
        <option value="" disabled>
          Choose...
        </option>
        {arr.map((item, index) => (
          <option
            ref={useRef}
            key={index}
            className="cursor-pointer"
            onClick={callBackValue}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
