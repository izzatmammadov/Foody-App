import React, { useState } from "react";
import { Navbar } from "../../share/components/Navbar";
import { Footer } from "../../share/components/Footer";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t, i18n } = useTranslation();

  const [isContentVisible, setContentVisibility] = useState(false);

  const toggleContent = () => {
    setContentVisibility(!isContentVisible);
  };
  return (
    <>
      <Navbar forAdmin={false} forLogin={false} isRegister={true} />
      <main className=" flex flex-col items-center gap-5 mb-8">
        <p className=" text-5xl font-medium pb-5">F.A.Q</p>

        <div className=" p-6 w-3/4 mx-auto  bg-white shadow-md">
          <div className="flex justify-between mb-3">
            <p className=" text-2xl font-medium">
<<<<<<< HEAD:pages/Faq/index.tsx
              {t("faqDesc")}
=======
              {t("faqsDesc")}
>>>>>>> f7cbc0207dc439d49ce37c98bf686b77e5b341d7:pages/faqs/index.tsx
            </p>
            <button onClick={toggleContent}>
              <Image
                width={25}
                height={0}
                src={isContentVisible ? "plus.svg" : "minus.svg"}
                alt={isContentVisible ? "plus" : "minus"}
              />
            </button>
          </div>

          {isContentVisible && (
            <div className="text-grayText1 text-lg leading-7 font-medium">
<<<<<<< HEAD:pages/Faq/index.tsx
              {t("faqDesc6")}
=======
              {t("faqsDesc6")}
              
>>>>>>> f7cbc0207dc439d49ce37c98bf686b77e5b341d7:pages/faqs/index.tsx
            </div>
          )}
        </div>

        <div className=" p-6 w-3/4 mx-auto  bg-white shadow-md">
          <div className="flex justify-between mb-3">
            <p className=" text-2xl font-medium">
<<<<<<< HEAD:pages/Faq/index.tsx
            {t("faqDesc2")}

=======
            {t("faqsDesc2")}
>>>>>>> f7cbc0207dc439d49ce37c98bf686b77e5b341d7:pages/faqs/index.tsx
            </p>
            <button onClick={toggleContent}>
              <Image
                width={25}
                height={0}
                src={isContentVisible ? "plus.svg" : "minus.svg"}
                alt={isContentVisible ? "plus" : "minus"}
              />
            </button>
          </div>

          {isContentVisible && (
            <div className="text-grayText1 text-lg leading-7 font-medium">
<<<<<<< HEAD:pages/Faq/index.tsx
              {t("faqDesc6")}
=======
              {t("faqsDesc6")}
              
>>>>>>> f7cbc0207dc439d49ce37c98bf686b77e5b341d7:pages/faqs/index.tsx
            </div>
          )}
        </div>

        <div className=" p-6 w-3/4 mx-auto  bg-white shadow-md">
          <div className="flex justify-between mb-3">
            <p className=" text-2xl font-medium">
<<<<<<< HEAD:pages/Faq/index.tsx
            {t("faqDesc3")}

=======
            {t("faqsDesc3")}
>>>>>>> f7cbc0207dc439d49ce37c98bf686b77e5b341d7:pages/faqs/index.tsx
            </p>
            <button onClick={toggleContent}>
              <Image
                width={25}
                height={0}
                src={isContentVisible ? "plus.svg" : "minus.svg"}
                alt={isContentVisible ? "plus" : "minus"}
              />
            </button>
          </div>

          {isContentVisible && (
            <div className="text-grayText1 text-lg leading-7 font-medium">
<<<<<<< HEAD:pages/Faq/index.tsx
              {t("faqDesc6")}
            </div>
          )}
        </div>

        <div className=" p-6 w-3/4 mx-auto  bg-white shadow-md">
          <div className="flex justify-between mb-3">
            <p className=" text-2xl font-medium"> {t("faqDesc4")}</p>
            <button onClick={toggleContent}>
              <Image
                width={25}
                height={0}
                src={isContentVisible ? "plus.svg" : "minus.svg"}
                alt={isContentVisible ? "plus" : "minus"}
              />
            </button>
          </div>

          {isContentVisible && (
            <div className="text-grayText1 text-lg leading-7 font-medium">
              {t("faqDesc6")}
=======
              {t("faqsDesc6")}
              
>>>>>>> f7cbc0207dc439d49ce37c98bf686b77e5b341d7:pages/faqs/index.tsx
            </div>
          )}
        </div>

        <div className=" p-6 w-3/4 mx-auto  bg-white shadow-md">
          <div className="flex justify-between mb-3">
            <p className=" text-2xl font-medium">
<<<<<<< HEAD:pages/Faq/index.tsx
            {t("faqDesc5")}
              
=======
            {t("faqsDesc4")}
>>>>>>> f7cbc0207dc439d49ce37c98bf686b77e5b341d7:pages/faqs/index.tsx
            </p>
            <button onClick={toggleContent}>
              <Image
                width={25}
                height={0}
                src={isContentVisible ? "plus.svg" : "minus.svg"}
                alt={isContentVisible ? "plus" : "minus"}
              />
            </button>
          </div>

          {isContentVisible && (
            <div className="text-grayText1 text-lg leading-7 font-medium">
<<<<<<< HEAD:pages/Faq/index.tsx
              {t("faqDesc6")}
=======
              {t("faqsDesc6")}
              
            </div>
          )}
        </div>

        <div className=" p-6 w-3/4 mx-auto  bg-white shadow-md">
          <div className="flex justify-between mb-3">
            <p className=" text-2xl font-medium">
            {t("faqsDesc5")}
            </p>
            <button onClick={toggleContent}>
              <Image
                width={25}
                height={0}
                src={isContentVisible ? "plus.svg" : "minus.svg"}
                alt={isContentVisible ? "plus" : "minus"}
              />
            </button>
          </div>

          {isContentVisible && (
            <div className="text-grayText1 text-lg leading-7 font-medium">
              {t("faqsDesc6")}
              
>>>>>>> f7cbc0207dc439d49ce37c98bf686b77e5b341d7:pages/faqs/index.tsx
            </div>
          )}
        </div>
      </main>
      <Footer isTop={false} />
    </>
  );
};

export default Faq;
