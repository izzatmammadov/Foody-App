import Image from "next/image";
import { Button } from "../Button";
import  {Langugages}  from "../Languages/index";

interface NavbarParamTypes {
  isRegister: boolean;
  forLogin: boolean;
  forAdmin: boolean;
}

export const Navbar = ({
  isRegister,
  forLogin,
  forAdmin,
}: NavbarParamTypes) => {
  return (
    <nav
      className={`flex justify-between m-8 items-center ${
        forLogin ? "bg-lightRed" : "bg-whiteLight1"
      } rounded-md  p-11`}
    >
      <h1 className={`text-4xl font-extrabold ${forLogin ? "text-white" : ""}`}>
        Foody
        <span className={`${forLogin ? "text-white" : "text-mainRed"} `}>
          .
        </span>
      </h1>

      {forLogin ? (
        <></>
      ) : (
        <>
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
        </>
      )}

      {/* {forAdmin ? (
        <>
          <Button className=" py-2 px-5 rounded-full text-white text-base font-bold bg-lightPurple_2 hover:shadow-md hover:shadow-textGreenLight transition-all duration-500" innerText="+ ADD PRODUCT" />
          <Button
            className="rounded-full w-10 h-10 text-lg text-white shadow-md bg-mainRed font-semibold hover:scale-95 transition-all duration-500"
            innerText="ZZ"
          />
        </>
      ) : (
        <></>
      )} */}

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
              className={`px-6 py-2 rounded-3xl bg-mainRed text-white font-medium shadow-md hover:scale-95 transition-all duration-500 ${
                forLogin ? "hidden" : "block"
              }`}
              innerText="Sign Up"
            />
          </div>
        </>
      )}
    </nav>
  );
};
