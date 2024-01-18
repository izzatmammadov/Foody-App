import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../../share/components/Footer";
import { Navbar } from "../../share/components/Navbar";

const Restaurants: NextPage = () => {
  return (
    <>
      <Head>
        <title>Foody | Restaurants</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mainBurger.svg" />
      </Head>

      <main>
        <Navbar isRegister={true} forAdmin={null} forLogin={null}/>

        <section className="m-8 flex justify-center gap-10">
          <div className="rounded-md flex flex-col max-h-screen overflow-y-auto gap-8 bg-whiteLight1 w-1/6 p-4">
            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>

            <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
              <Image
                width={40}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className="font-semibold text-[20px] ">Fast Food</p>
            </div>
          </div>

          <div className="w-full flex justify-between flex-wrap gap-x-1 gap-y-8">
            <div className="w-1/5 h-max px-4 py-7 shadow-lg flex flex-col cursor-pointer">
              <Image width={300} height={0} src={"soupCard.svg"} alt="soup" />
              <p className=" font-bold text-grayText2 text-2xl mt-4">
                Coffee Mania
              </p>
              <p className="mb-4 text-grayText1">
                chinese, sea-food, thai, lebanese, caribbean
              </p>
              <div className="flex justify-between items-center">
                <p className="font-bold">$5 Delivery</p>
                <p className="bg-mainRed py-1 px-3 rounded-full text-white shadow-md">
                  12 min.
                </p>
              </div>
            </div>

            <div className=" relative w-1/5 h-max px-4 py-7 shadow-lg flex flex-col cursor-pointer">
              <span className="absolute top-0 left-0 bg-mainRed text-white px-4 py-1 text-sm font-semibold animate-pulse">
                New
              </span>
              <Image
                width={300}
                height={0}
                src={"burgerKing.svg"}
                alt="burgerking"
              />
              <p className=" font-bold text-grayText2 text-2xl mt-4">
                Burger King
              </p>
              <p className="mb-4 text-grayText1">
                chinese, sea-food, thai, lebanese, caribbean
              </p>
              <div className="flex justify-between items-center">
                <p className="font-bold">$17 Delivery</p>
                <p className="bg-mainRed py-1 px-3 rounded-full text-white shadow-md">
                  30 min.
                </p>
              </div>
            </div>

            <div className=" w-1/5 h-max px-4 py-7 shadow-lg flex flex-col cursor-pointer">
              <Image
                width={300}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className=" font-bold text-grayText2 text-2xl mt-4">
                Pizza Hut{" "}
              </p>
              <p className="mb-4 text-grayText1">
                chinese, sea-food, thai, lebanese, caribbean
              </p>
              <div className="flex justify-between items-center">
                <p className="font-bold">$13 Delivery</p>
                <p className="bg-mainRed py-1 px-3 rounded-full text-white shadow-md">
                  9 min.
                </p>
              </div>
            </div>

            <div className=" w-1/5 h-max px-4 py-7 shadow-lg flex flex-col cursor-pointer">
              <Image
                width={300}
                height={0}
                src={"papaJohns.svg"}
                alt="papajohns"
              />
              <p className=" font-bold text-grayText2 text-2xl mt-4">
                Papa John's
              </p>
              <p className="mb-4 text-grayText1">
                chinese, sea-food, thai, lebanese, caribbean
              </p>
              <div className="flex justify-between items-center">
                <p className="font-bold">$5 Delivery</p>
                <p className="bg-mainRed py-1 px-3 rounded-full text-white shadow-md">
                  12 min.
                </p>
              </div>
            </div>

            <div className=" w-1/5 h-max px-4 py-7 shadow-lg flex flex-col cursor-pointer">
              <Image
                width={300}
                height={0}
                src={"burgerKing.svg"}
                alt="burgerking"
              />
              <p className=" font-bold text-grayText2 text-2xl mt-4">
                Burger King
              </p>
              <p className="mb-4 text-grayText1">
                chinese, sea-food, thai, lebanese, caribbean
              </p>
              <div className="flex justify-between items-center">
                <p className="font-bold">$5 Delivery</p>
                <p className="bg-mainRed py-1 px-3 rounded-full text-white shadow-md">
                  12 min.
                </p>
              </div>
            </div>

            <div className=" w-1/5 h-max px-4 py-7 shadow-lg flex flex-col cursor-pointer">
              <Image
                width={300}
                height={0}
                src={"margaritaCard.svg"}
                alt="margarita"
              />
              <p className=" font-bold text-grayText2 text-2xl mt-4">
                Pizza Hut
              </p>
              <p className="mb-4 text-grayText1">
                chinese, sea-food, thai, lebanese, caribbean
              </p>
              <div className="flex justify-between items-center">
                <p className="font-bold">$5 Delivery</p>
                <p className="bg-mainRed py-1 px-3 rounded-full text-white shadow-md">
                  12 min.
                </p>
              </div>
            </div>

            <div className=" w-1/5 h-max px-4 py-7 shadow-lg flex flex-col cursor-pointer">
              <Image
                width={300}
                height={0}
                src={"papaJohns.svg"}
                alt="papajohns"
              />
              <p className=" font-bold text-grayText2 text-2xl mt-4">
                Papa John's
              </p>
              <p className="mb-4 text-grayText1">
                chinese, sea-food, thai, lebanese, caribbean
              </p>
              <div className="flex justify-between items-center">
                <p className="font-bold">$5 Delivery</p>
                <p className="bg-mainRed py-1 px-3 rounded-full text-white shadow-md">
                  12 min.
                </p>
              </div>
            </div>

            <div className=" w-1/5 h-max px-4 py-7 shadow-lg flex flex-col cursor-pointer">
              <Image width={300} height={0} src={"soupCard.svg"} alt="soup" />
              <p className=" font-bold text-grayText2 text-2xl mt-4">
                Coffee Mania
              </p>
              <p className="mb-4 text-grayText1">
                chinese, sea-food, thai, lebanese, caribbean
              </p>
              <div className="flex justify-between items-center">
                <p className="font-bold">$5 Delivery</p>
                <p className="bg-mainRed py-1 px-3 rounded-full text-white shadow-md">
                  12 min.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer isTop={false} />
      </main>
    </>
  );
};

export default Restaurants;
