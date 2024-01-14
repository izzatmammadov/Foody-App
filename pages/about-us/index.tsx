import React from "react";
import { Navbar } from "../../share/components/Navbar";
import { Footer } from "../../share/components/Footer";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="max-w-[1440px] p-8 mx-auto ">
        <Navbar />
      </div>

      <main className="max-w-[1440px] flex flex-wrap p-8 mx-auto gap-[60px] justify-between" >
        <div className="max-w-[565px] flex flex-col gap-8 ml-8" >
          <p className="font-mukta text-[45px] font-semibold leading-8 tracking-tight ">
            About Us
          </p>
          <p className=" text-[#828282] font-roboto text-[20px] font-medium leading-7 tracking-tight">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
        <div className=" relative w-[634px] h-[789px] mr-[50px] ">
          <Image
            width={680}
            className=""
            height={407}
            src={"about-us-yellow.svg"}
            alt="yellow-bg"
          />

          <Image
            width={274}
            className=" mx-auto absolute top-[-10px] left-[330px] "
            height={174}
            src={"about-us-hamburger.svg"}
            alt="yellow-bg"
          />
          <Image
            width={274}
            className=" mx-auto absolute top-[195px] left-[50px] "
            height={174}
            src={"about-us-piszza.svg"}
            alt="yellow-b"
          />
          <Image
            width={274}
            className=" mx-auto absolute top-[375px]  right-0"
            height={174}
            src={"about-us-soup.svg"}
            alt="yellow-bg"
          />
          <Image
            width={274}
            className=" mx-auto absolute  bottom-[0px] left-0"
            height={174}
            src={"about-us-coffe.svg"}
            alt="yellow-bg"
          />
        </div>
      </main>

      <Footer isTop={false} />
    </>
  );
};

export default AboutUs;
