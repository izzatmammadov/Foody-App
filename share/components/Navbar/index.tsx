import Image from "next/image";
import { Button } from "../Button";
import { useState } from "react";
import { Langugages } from "../Languages";
interface NavbarParamTypes {
  isRegister: boolean;
}

export const Navbar = ({ isRegister }: NavbarParamTypes) => {
  
  return (
    <nav className="flex justify-between m-8 items-center rounded-md bg-whiteLight1 p-11">
      <h1 className="text-4xl font-extrabold">
        Foody<span className=" text-mainRed">.</span>
      </h1>

      <ul className="flex justify-around text-lg w-1/2 font-medium text-grayText1 ">
        <li className="cursor-pointer hover:text-mainRed transition-all">
          Home
        </li>
        <li className="cursor-pointer hover:text-mainRed transition-all">
          Restaurants
        </li>
        <li className="cursor-pointer hover:text-mainRed transition-all">
          About Us
        </li>
        <li className="cursor-pointer hover:text-mainRed transition-all">
          How It Works
        </li>
        <li className="cursor-pointer hover:text-mainRed transition-all">
          FAQs
        </li>
      </ul>

      <input
        className="px-6 py-3 relative rounded-xl w-1/5 shadow-sm"
        type="text"
        placeholder="Search"
      />

      {isRegister ? (
        <>
          <div className="flex items-center justify-center gap-7 ">
            <Langugages />
            <Image
              className="cursor-pointer hover:scale-95 transition-all duration-500"
              width={40}
              height={0}
              src={"basket.svg"}
              alt="basket"
            />
            <Button
              className="rounded-full w-10 h-10 text-lg text-white shadow-md bg-mainRed font-semibold hover:scale-95 transition-all duration-500"
              innerText="ZZ"
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center gap-7 ">
            <Langugages />
            <Button
              className="px-6 py-2 rounded-3xl bg-mainRed text-white font-medium shadow-md hover:scale-95 transition-all duration-500"
              innerText="Sign Up"
            />
          </div>
        </>
      )}
    </nav>
  );
};
