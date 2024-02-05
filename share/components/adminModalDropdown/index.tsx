import React, { useState } from "react";

interface Props {
  p?: string;
  arr?: string[];
  className?: string;
  className2?: string;
  useRef?: any;
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

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;
    setSelectedValue(value);
    // console.log(value);
    callBackValue(value);
  }

  return (
    <div className={className2}>
      <p className=" text-white font-medium  text-base">{p}</p>
      <select
        ref={useRef}
        value={selectedValue}
        onChange={handleSelectChange}
        className={className}
      >
        <option value="" disabled>
          Choose...
        </option>
        {arr.map((item, index) => (
          <option key={index} className="cursor-pointer" value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
