import Image from "next/image";
import { Navbar } from "../Navbar";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className="m-8 flex-col rounded-md bg-whiteLight1">
      <Navbar isRegister={false}/>

      {/* MAIN SECTION */}
      <section className="flex justify-center items-center h-screen px-11 -mt-24">
        <div className="w-1/2 flex flex-col gap-10 ">
          <h2 className="text-5xl font-black leading-tight">
            Our Food site makes it easy to find local food
          </h2>
          <p className="text-xl text-grayText1 w-3/4 ">
            Welcome to our vibrant food site, a digital haven for culinary
            enthusiasts seeking a delightful gastronomic experience. Within
            these virtual pages.
          </p>
          <div className="flex gap-10 w-max">
            <button className="px-8 py-3 rounded-3xl bg-mainRed text-white text-2xl font-medium shadow-md hover:bg-red-700 hover:scale-95 transition-all duration-500">
              Register
            </button>
            <button className="px-6 py-3 rounded-3xl border-2 border-grayText1 text-grayText1 text-2xl font-medium shadow-md hover:scale-95 transition-all duration-500">
              Order Now
            </button>
          </div>
        </div>

        <div className=" w-3/5  ">
          <div className={styles.burger_bg}></div>
          <div className={styles.little_animation_div1}>
            <Image
              width={70}
              height={0}
              src={"friesAnimation.svg"}
              alt="fries"
            />
            <p className=" w-1/2 text-center">French Fries Yummy...</p>
          </div>
          <div className={styles.little_animation_div2}>
            <Image
              width={70}
              height={0}
              src={"pizzaAnimation.svg"}
              alt="pizza"
            />
            <p className=" w-1/2 text-center">Pizza Hut Yummy...</p>
          </div>
          <div className={styles.little_animation_div3}>
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
