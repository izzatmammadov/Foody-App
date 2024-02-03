import { Button } from "../Button";
import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { log } from "console";
import { completeLogin, completeRegister } from "@/share/services/axios";

export const ClientLogInForm = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { t } = useTranslation();
  const navigate = useRouter();

  const fullnameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  //^Register

  const handleRegister = async () => {
    event?.preventDefault()
    const fullname = fullnameRef.current?.value;
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const form = {
      fullname,
      username,
      email,
      password,
    };

    const res = await completeRegister(form);
    console.log(res);

    if (fullnameRef.current) fullnameRef.current.value = "";
    if (usernameRef.current) usernameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";

    setShowLoginForm(true)
  };

  //^ Login
  const handleLogin = async () => {
    event?.preventDefault();
    const fullname = fullnameRef.current?.value;
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const form = {
      fullname,
      username,
      email,
      password,
    };

    const res = await completeLogin(form);
    navigate.push("/")
    console.log(res);
  };

  const switchForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
    <section className="flex flex-col mt-5 sm:mt-0 sm:flex-row justify-center bg-white sm:bg-lightRed mx-8 mb-8 ">
      <div className="bg-lightRed m-auto w-full sm:w-1/2">
        <Image
          className="w-4/5 m-auto"
          width={0}
          height={0}
          src={showLoginForm ? "loginClient.svg" : "registerClient.svg"}
          alt={showLoginForm ? "loginClient.svg" : "registerClient.svg"}
        />
      </div>
      {/* FORM DIV */}
      <div className="w-full sm:w-1/2 flex flex-col gap-20 bg-white py-12 mx-auto">
        <div className="flex gap-16 mx-auto w-max">
          <button
            className={`text-3xl ${
              showLoginForm ? "text-lightRed border-b-4" : "text-grayText1"
            } font-medium`}
            onClick={() => switchForm()}
          >
            {t("login")}
          </button>
          <button
            className={`text-3xl ${
              showLoginForm ? "text-grayText1" : "text-lightRed border-b-4"
            } font-medium`}
            onClick={() => switchForm()}
          >
            {t("register")}
          </button>
        </div>

        {showLoginForm ? (
          <form className="flex flex-col w-full sm:w-4/5 mx-auto gap-8 items-center">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xl font-medium text-grayText2">
                Email
              </label>
              <input
                className="p-4 rounded-md outline-none bg-[#ffe6e6]"
                type="email"
                ref={emailRef}
              />
            </div>

            <div className="flex flex-col gap-2 w-full mb-8">
              <label className="text-xl font-medium text-grayText2">
                {t("password")}
              </label>
              <input
                className=" p-4 rounded-md outline-none bg-[#ffe6e6]"
                type="password"
                ref={passwordRef}
              />
            </div>

            <Button
              onClick={handleLogin}
              className="w-full bg-lightRed text-xl font-medium p-4 rounded-md text-white hover:scale-95 hover:bg-mainRed transition-all duration-500"
              innerText={t("login")}
            />
          </form>
        ) : (
          <form className="flex flex-col w-full sm:w-4/5 mx-auto gap-8 items-center">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xl font-medium text-grayText2">
                {t("fullname")}
              </label>
              <input
                ref={fullnameRef}
                className="p-4 rounded-md outline-none bg-[#ffe6e6]"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-xl font-medium text-grayText2">
                {t("username")}
              </label>
              <input
                ref={usernameRef}
                className=" p-4 rounded-md outline-none bg-[#ffe6e6]"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-xl font-medium text-grayText2">
                Email
              </label>
              <input
                ref={emailRef}
                className=" p-4 rounded-md outline-none bg-[#ffe6e6]"
                type="e-mail"
              />
            </div>

            <div className="flex flex-col gap-2 w-full mb-8">
              <label className="text-xl font-medium text-grayText2">
                {t("password")}
              </label>
              <input
                ref={passwordRef}
                className=" p-4 rounded-md outline-none bg-[#ffe6e6]"
                type="password"
              />
            </div>

            <Button
              onClick={handleRegister}
              className="w-full bg-lightRed text-xl font-medium p-4 rounded-md text-white hover:scale-95 hover:bg-mainRed transition-all duration-500"
              innerText={t("register")}
            />
          </form>
        )}
      </div>
    </section>
  );
};
