import React from "react";
import styls from "./style.module.css";
import { Navbar } from "../../share/components/Navbar";
import { Footer } from "../../share/components/Footer";

const Faq = () => {
  return (
    <>
      <Navbar />
      <main className=" flex flex-col items-center gap-5 mt-[91px]">
        <p className=" text-[45px] font-[500] pb-[21px]">F.A.Q</p>
        <div className=" p-6 max-w-[1041px]  bg-white shadow-md  ">
          <div className="flex justify-between mb-3">
            <p className={styls.FaqDivHeader}>
              How to contact with Customer Service?
            </p>{" "}
            <button>
              <img src="/plus.svg" alt="" />
            </button>
          </div>
          <div className={styls.FaqDivMain}>
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact.Email and Chat . We try to reply quickly,
            so you need not to wait too long for a response!.
          </div>
        </div>
        <div className=" p-6 max-w-[1041px]  bg-white shadow-md  ">
          <div className="flex justify-between mb-3">
            <p className={styls.FaqDivHeader}>
              App installation failed, how to update system information?{" "}
            </p>{" "}
            <button>
              <img src="/plus.svg" alt="" />
            </button>
          </div>
          <div className={styls.FaqDivMain}>
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact.Email and Chat . We try to reply quickly,
            so you need not to wait too long for a response!.
          </div>
        </div>
        <div className=" p-6 max-w-[1041px]  bg-white shadow-md  ">
          <div className="flex justify-between mb-3">
            <p className={styls.FaqDivHeader}>
              Website reponse taking time, how to improve?
            </p>{" "}
            <button>
              <img src="/plus.svg" alt="" />
            </button>
          </div>
          <div className={styls.FaqDivMain}>
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact.Email and Chat . We try to reply quickly,
            so you need not to wait too long for a response!.
          </div>
        </div>
        <div className=" p-6 max-w-[1041px]  bg-white shadow-md  ">
          <div className="flex justify-between mb-3">
            <p className={styls.FaqDivHeader}>How do I create a account? </p>{" "}
            <button>
              <img src="/plus.svg" alt="" />
            </button>
          </div>
          <div className={styls.FaqDivMain}>
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact.Email and Chat . We try to reply quickly,
            so you need not to wait too long for a response!.
          </div>
        </div>

        <div className=" p-6 max-w-[1041px]  bg-white shadow-md  ">
          <div className="flex justify-between mb-3">
            <p className={styls.FaqDivHeader}>
              Website reponse taking time, how to improve?
            </p>{" "}
            <button>
              <img src="/plus.svg" alt="" />
            </button>
          </div>
          <div className={styls.FaqDivMain}>
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact.Email and Chat . We try to reply quickly,
            so you need not to wait too long for a response!.
          </div>
        </div>
      </main>
      <Footer isTop={false} />
    </>
  );
};

export default Faq;
