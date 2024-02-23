import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Button } from "../../../share/components/Button";
import { Langugages } from "../../../share/components/Languages";
import { useTranslation } from "react-i18next";
import { FormRegister, completeLogin } from "@/share/services/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { push }: { push: Function } = useRouter();

  const { t, i18n } = useTranslation();

  const emailRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

type token = {
  "access_token": string,
  "refresh_token": string
  }
let tokenObj: token = JSON.parse(
    typeof localStorage !== 'undefined' ? localStorage.getItem("tokenObj") ?? "{}" : "{}"
  );

// console.log(tokenObj);



  async function login() {

    setIsLoading(true);

    const email = emailRef?.current?.value;

    const password = passwordRef?.current?.value;

    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

    if (!email || !password) {

      toast.warning("Please fill in all inputs!");

      setIsLoading(false);

      return;
    } else if (!emailRegex.test(email)) {
      
      toast.warning("Please enter a valid email address!");

      setIsLoading(false);

      return;
    }

    const form: FormRegister = {
      email,
      password,
    };

    const res = await completeLogin(form);

    console.log(res);

    if (res?.status === 200) {
      setIsLoading(false);

      toast.success("Logged in successfully!");
      tokenObj = {
        "access_token": res.data.user.access_token ,
        "refresh_token": res.data.user.refresh_token
      }
      localStorage.setItem("tokenObj", JSON.stringify(tokenObj))
      localStorage.setItem("userInfo", JSON.stringify(res?.data.user));
      // console.log(tokenObj);
      
      if (emailRef.current && passwordRef.current) {
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }

      setTimeout(() => {
        push("/admin/dashboard");
      }, 700);
      return;
    }

    setIsLoading(false);

    return;
  }

  return (
    <div className=" min-h-screen bg-darkBlue_1">
      <Head>
        <title>Foody | Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/admin-icon.png" />
      </Head>
      <div>
        <ToastContainer />
        <header className="  mb-20  md:mb-44 pt-14  pl-8 ">
          <h1
            style={{ letterSpacing: "0.84px" }}
            className=" text-[#F5F5F5] font-extrabold text-[28px]  "
          >
            Foody{" "}
            <span
              style={{ letterSpacing: "0.84px" }}
              className=" text-[#EAAB00]"
            >
              .
            </span>{" "}
          </h1>
        </header>

        <main>
          <div className=" flex  justify-center pb-7 ">
            <div className=" flex flex-col-reverse   sm:flex-col-reverse  md:flex-row  ">
              <div className=" w-full sm:w-full md:w-1/2  md:bg-darkBlue_2 py-14  px-6 sm:px-7 md:px-12 ">
                <p className=" text-grayText font-bold text-4xl text-center  mb-10">
                  {t("adminDesc")}
                </p>
                <div className=" flex flex-col  gap-6 mb-9">
                  <input
                    ref={emailRef}
                    className=" rounded bg-lightGray text-grayText py-4 pl-10 font-medium text-lg "
                    placeholder={t("e-mail")}
                    type="text"
                  />
                  <input
                    ref={passwordRef}
                    className=" rounded   bg-lightGray text-grayText py-4 pl-10 font-medium text-lg "
                    placeholder={t("password")}
                    type="password"
                  />
                </div>
                <Button
                  innerText={isLoading ? "..." : t("signIn")}
                  onClick={login}
                  className=" text-white font-medium text-2xl  w-full bg-lightPurple_3 py-3 rounded"
                />
              </div>
              <div className=" w-full sm:w-full relative md:w-1/2  py-14 px-7 md:bg-adminLogin">
                <div className=" absolute  top-2  right-3">
                  <Langugages bgDark />
                </div>
                <div className="">
                  <Image
                    className=" w-full"
                    src="/admin-login.svg"
                    width={0}
                    height={0}
                    alt=" admin-login"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
