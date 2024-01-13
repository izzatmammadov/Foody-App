import React from "react";

import { Navbar } from "../../share/components/Navbar";
import { Footer } from "../../share/components/Footer";


const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main className=" flex justify-center items-center p-4" >
       <img src="/errorImage.svg" alt="error 404" />
      </main>
      <Footer isTop={false} />
    </>
  );
};

export default ErrorPage;
