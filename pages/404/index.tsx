import React from "react";

import { Navbar } from "../../share/components/Navbar";
import { Footer } from "../../share/components/Footer";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <>
      <Navbar isRegister={false} forLogin={false} forAdmin={false} />
      <main className=" flex justify-center items-center p-4 mb-8">
        <Image
          className="w-full"
          width={0}
          height={0}
          src={"errorImage.svg"}
          alt="error"
        />
      </main>
      <Footer isTop={false} />
    </>
  );
};

export default ErrorPage;
