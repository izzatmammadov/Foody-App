import Image from "next/image";
interface FooterParamTypes {
  isTop: boolean;
}

export const Footer = ({ isTop }: FooterParamTypes) => {
  return (
    <footer className="flex flex-col justify-center items-center relative pt-44 pb-6 bg-black w-full">
      {/* UPPER FOOTER */}

      {isTop ? (
        <section className=" w-3/4 flex justify-around bg-blackLight absolute -top-52 items-center rounded-3xl py-12 px-9 text-white">
          <Image width={200} height={0} src={"footerPizza.svg"} alt="footer" />

          <div className="flex flex-col items-center gap-5">
            <p className=" font-medium text-4xl w-9/12 text-center leading-tight">
              Discover Restaurants Near From you
            </p>
            <button className=" bg-orange px-12 py-4 font-medium text-md rounded-full hover:scale-95 transition-all duration-500">
              Explore Now
            </button>
          </div>

          <Image width={250} height={0} src={"mainBurger.svg"} alt="burger" />
        </section>
      ) : (
        <></>
      )}
      {/* UPPER FOOTER END */}

      {/* LOWER FOOTER */}
      <section className=" flex items-center justify-around w-4/5">
        <div className="flex flex-col gap-2">
          <p className="text-white font-extrabold text-3xl">
            Foody<span className="text-orange">.</span>
          </p>
          <p className="text-lg text-grayText1 w-2/3">
            Lorem ipsum is placeholder text commonly used in the graphic
          </p>
          <div className="flex gap-2">
            <Image
              className=" border-white border-2 p-1 rounded-3xl cursor-pointer hover:scale-95 transition-all duration-500"
              width={40}
              height={0}
              src={"facebook.svg"}
              alt="facebook"
            />
            <Image
              className=" p-2 rounded-3xl bg-orange cursor-pointer hover:scale-95 transition-all duration-500"
              width={40}
              height={0}
              src={"instagram.svg"}
              alt="instagram"
            />
            <Image
              className=" border-white border-2 p-2 rounded-3xl cursor-pointer hover:scale-95 transition-all duration-500"
              width={40}
              height={0}
              src={"twitter.svg"}
              alt="twitter"
            />
          </div>
        </div>

        <div className="flex justify-center gap-28 h-full text-grayText1">
          <ul className="flex flex-col gap-1 ">
            <li className="text-white font-extrabold text-2xl">Popular</li>
            <li>Programming</li>
            <li>Foods for children</li>
            <li>Price list</li>
            <li>Business</li>
          </ul>

          <ul className="flex flex-col gap-1">
            <li className="text-white font-extrabold text-2xl">Cash</li>
            <li>Delivery</li>
            <li>Payment</li>
            <li>About the store</li>
          </ul>

          <ul className="flex flex-col gap-1">
            <li className="text-white font-extrabold text-2xl">Help</li>
            <li>Contacts</li>
            <li>Purchase returns</li>
            <li>Buyer help</li>
          </ul>
        </div>
      </section>

      <div className="text-white mt-20">
        All rights reserved © 2003-2023 Foody TERMS OF USE | Privacy Policy
      </div>
      {/* LOWER FOOTER END */}
    </footer>
  );
};
