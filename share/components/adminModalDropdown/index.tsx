import React, { useState } from "react";

interface Props {
  p?: string;
  arr?: string[];
  className?: string;
  className2?: string;
  callBackValue?: any;
  useRef?: any,
  activeValue?:string
}

export const AdminModalDropdown = ({
  p = "Restaurants",
  arr = ["item1", "item2", "item3"],
  className,
  className2,
  callBackValue,
  useRef,
  activeValue
}: Props) => {
  // const [selectedValue, setSelectedValue] = useState<string | undefined>("");


  return (
    <div className={className2}>
      <p className="text-white font-medium text-base">{p}</p>
      <select
         ref={useRef}
        value={activeValue}
        className={className}
        onChange={callBackValue}
      >
        <option value="" disabled>
          Choose...
        </option>
        {arr.map((item, index) => (
          <option  key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
