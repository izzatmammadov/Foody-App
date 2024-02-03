import Image from "next/image";
import { Navbar } from "../Navbar";
import styles from "./header.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { useRouter } from "next/router";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useRouter()

  return (
    <header className="m-0 sm:m-8 flex-col rounded-md bg-whiteLight1">
      <Navbar isRegister={false} forAdmin={null}  />

      {/* MAIN SECTION */}
      <section className="flex flex-col-reverse sm:flex-row justify-center items-center h-screen px-1 sm:px-11 -mt-24">
        <div className="w-full sm:w-1/2 flex flex-col gap-10">
        <h2 className="text-4xl text-center sm:text-5xl font-black leading-tight sm:text-start">{t("homeDesc")}</h2>
          <p className="sm:block hidden sm:text-xl text-grayText1 w-3/4 ">{t("homeDesc2")}</p>
          <div className="mx-auto sm:mx-0 flex gap-10 w-max">
            <Button
              className="px-8 py-3 rounded-3xl bg-mainRed text-white text-2xl font-medium shadow-md hover:bg-red-700 hover:scale-95 transition-all duration-500"
              innerText={t("homeDesc3")}
              onClick={()=> navigate.push("/login")}
            />

            <Button
              className="px-6 py-3 rounded-3xl border-2 border-grayText1 text-grayText1 text-2xl font-medium shadow-md hover:scale-95 transition-all duration-500"
              innerText={t("homeDesc4")}
              onClick={()=>navigate.push("/restaurants")}
            />
          </div>
        </div>

        <div className=" sm:w-3/5">
          <div className={styles.burger_bg}></div>
          <div className={`${styles.little_animation_div1}`}>
            <Image
              width={70}
              height={0}
              src={"friesAnimation.svg"}
              alt="fries"
            />
            <p className=" w-1/2 text-center">French Fries Yummy...</p>
          </div>
          <div className={`${styles.little_animation_div2}`}>
            <Image
              width={70}
              height={0}
              src={"pizzaAnimation.svg"}
              alt="pizza"
            />
            <p className=" w-1/2 text-center">Pizza Hut Yummy...</p>
          </div>
          <div className={`${styles.little_animation_div3}`}>
            <Image
              width={70}
              height={0}
              src={"burgerAnimation.svg"}
              alt="burger"
            />
            <p className=" w-1/2 text-center">Cheesburger Yummy...</p>
          </div>
          <Image
            className="w-full relative"
            width={0}
            height={0}
            src={"mainBurger.svg"}
            alt="burger"
          />
        </div>
      </section>
      {/* MAIN SECTION END */}
    </header>
  );
};
