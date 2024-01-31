import React from "react";
interface Props {
  Type?: string;
  Placeholder?: string;
  OnClick?: any;
  OnChange?: any;
  ClassName?: string;
  disabled?: boolean;
  Capitalize?: boolean;
}
export const Input = ({
  Type = "text",
  Placeholder,
  OnChange,
  OnClick,
  ClassName,
  disabled = false,
  Capitalize = true,
}: Props) => {
  return (
    <>
      <input
        className={`${Capitalize ? "capitalize" : " "}  ${ClassName}`}
        disabled={disabled}
        onClick={OnClick}
        onChange={OnChange}
        type={Type}
        placeholder={Placeholder}
      />
    </>
  );
};
