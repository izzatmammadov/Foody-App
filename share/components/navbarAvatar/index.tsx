import Image from "next/image";
import { Button } from "../Button";
import { useRouter } from "next/router";
import { NavbarAvatarList } from "../navbarAvatarList";
import { useState } from "react";
import { Langugages } from "../Languages";

export const NavbarAvatar = ({ isName }: any) => {
  const navigate = useRouter();
  const [isNvbarList, setNavbarList] = useState(false);

  const toggleNavbarList = () => {
    setNavbarList(!isNvbarList);
  };
  return (
    <div className="flex items-center gap-7 relative">
      <Langugages />
      <Image
        className="cursor-pointer hover:scale-95 transition-all duration-500"
        width={40}
        height={0}
        src={"/basket.svg"}
        alt="basket"
        onClick={() => {
          navigate.push("/userBasket");
        }}
      />
      <Button
        className="rounded-full w-10 h-10 text-lg text-white shadow-md bg-mainRed font-semibold hover:scale-95 transition-all duration-500"
        innerText={isName}
        onClick={toggleNavbarList}
      />
      {isNvbarList && <NavbarAvatarList />}
    </div>
  );
};
