import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../../share/components/Footer";
import { Navbar } from "../../share/components/Navbar";
import { UserAside } from "../../share/components/userAside"
import { useTranslation } from "react-i18next";
import { UserBasketCard } from "../../share/components/userBasketCard/intex";

const UserBasket: NextPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Foody | User Basket</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mainBurger.svg" />
      </Head>

      <main>
        <Navbar isRegister={true} forAdmin={null} forLogin={null} />

        <section className="m-8 flex justify-center gap-10">
         <UserAside/>
         <div className="w-full flex  flex-col px-8 py-10 flex-wrap gap-x-1 gap-y-8 bg-whiteLight1">
         <h2 className="font-semibold text-3xl text-grayText2">
              {/* {t("userBasket")} */}
              Your Basket
            </h2>
            <div className="flex items-center gap-2">
                <Image width={20} height={0} src={"basketIcon.svg"} alt="basketIcon"/>
                <p className=" text-mainRed font-medium">
                    {/* {t("userBasketDesc2")} */}
                     3 items</p>
            </div>

            <UserBasketCard/>
            
         </div>
        </section>

        <Footer isTop={false} />
      </main>
    </>
  );
};

export default UserBasket;
