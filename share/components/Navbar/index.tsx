import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center rounded-md bg-whiteLight1 p-11">
      <h1 className="text-4xl font-extrabold">
        Foody<span className=" text-mainRed">.</span>
      </h1>

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
        className="px-6 py-3 rounded-xl w-1/5 shadow-sm"
        type="text"
        placeholder="Search"
      />

      <div className="flex items-center justify-center gap-7 ">
        <Image
          className="cursor-pointer relative"
          width={40}
          height={0}
          src={"en.svg"}
          alt="EnFlag"
        />
        <button className="px-6 py-2 rounded-3xl bg-mainRed text-white font-medium shadow-md hover:scale-95 transition-all duration-500">
          Sign up
        </button>
      </div>
    </nav>
  );
};
