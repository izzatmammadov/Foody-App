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
{/*  */}
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
        
      </main>

      <Footer isTop={false} />
    </>
  );
};

export default HowItWorks;
