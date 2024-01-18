import React from "react";
import Image from "next/image";
import { Navbar } from "../../share/components/Navbar";
import { Footer } from "../../share/components/Footer";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar forAdmin={false} forLogin={false} isRegister={true} />

      <main>
        <section className=" hidden sm:block">
          <div className="text-center">
            <p className=" text-5xl font-semibold leading-8 tracking-widest">
              {t("how_it_works")}
            </p>
            <p className=" mt-5 text-[#828282] max-w-[1034px] font-medium  leading-8 tracking-widest mx-auto">
              {t("how_it_worksDesc")}
            </p>
          </div>
        </section>
        <section className=" hidden sm:block">
          <div className="flex justify-center mt-7 relative">
            <Image
              className=" z-40"
              width={500}
              height={560}
              src={"how-it-works-deliverman.svg"}
              alt="error"
            />

            <Image
              className=" absolute"
              width={850}
              height={400}
              src={"how-it-works-background.svg"}
              alt=""
            />
          </div>
        </section>
        <section className="block sm:hidden">
          <div className="text-center">
            <p className=" text-3xl font-semibold leading-8 tracking-widest">
              How it works
            </p>
            <p className=" mt-3 text-[#828282] p-4 font-medium  leading-8 tracking-widest mx-auto">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and ver
              text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups.
            </p>
          </div>
        </section>
        <section className=" block sm:hidden">
          <div className=" bg-[#FFB64F]  rounded-[100px] h-[480px]">
            <Image
              className=" w-full pt-16"
              width={0}
              height={0}
              src={"how-it-works-deliverman.svg"}
              alt="error"
            />
          </div>
        </section>
        <footer>
          <Footer isTop={false} />
        </footer>
      </main>
    </>
  );
};

export default HowItWorks;
