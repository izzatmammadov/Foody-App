import React from "react";
import Image from "next/image";
import { Navbar } from "../../share/components/Navbar";
import { Footer } from "../../share/components/Footer";
import { useTranslation } from "react-i18next";

import Head from "next/head";

const HowItWorks = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Foody | How It Works</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mainBurger.svg" />
      </Head>

      <Navbar />
      <main>
        <section className=" ">
          <div data-aos="zoom-in" className="text-center">
            <p className=" text-4xl sm:text-5xl font-semibold leading-8 tracking-widest">
              {t("how_it_works")}
            </p>
            <p className=" hidden sm:block mt-5 text-[#828282] max-w-[1034px] font-medium  leading-8 tracking-widest mx-auto">
              {t("how_it_worksDesc")}
            </p>
            <p className=" block sm:hidden text-[#828282]  font-medium  leading-8 tracking-widest m-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and ver
              text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups.
            </p>
          </div>
        </section>
        <section data-aos="zoom-in" className="hidden sm:block">
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

        <section className=" block sm:hidden">
          <div className=" flex justify-center items-center bg-[#FFB64F]  rounded-3xl m-6 py-10">
            <Image
              className=" z-40"
              width={270}
              height={300}
              src={"how-it-works-deliverman.svg"}
              alt="error"
            />
          </div>
        </section>
      </main>

      <Footer isTop={false} />
    </>
  );
};

export default HowItWorks;
