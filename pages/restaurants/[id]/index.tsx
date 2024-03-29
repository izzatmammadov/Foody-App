import Head from "next/head";
import { Navbar } from "../../../share/components/Navbar";
import { Footer } from "../../../share/components/Footer";
import { RestDetailHeader } from "../../../share/components/restaurantDetailHeader";
import { RestDetailProductReact } from "../../../share/components/restaurantDetailProductCard";
import { RestDetailBasket } from "@/share/components/restaurantDetailBasket";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  getProducts,
  getRestourans,
  postProductForBasket,
} from "@/share/services/axios";
import { useGlobalStore } from "@/share/services/provider";
import restourans from "@/pages/admin/restaurants";
import { ToastContainer, toast } from "react-toastify";

interface RestaurantDetailProps {
  name?: any;
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ name }) => {
  const { t } = useTranslation();
  const { asPath, push } = useRouter();

  const [lokal, setLokal] = useState<any>([]);
  const [product, setProducts] = useState<any[]>([]);
  const { basketData, setBasketData } = useGlobalStore();
  let localPath = asPath.split("/")[2];

  async function fetchRestouran() {
    try {
      const res = await getRestourans();
      const resArrs = res?.data.result.data;

      const focusRes = resArrs.find((item: any) => item.id === localPath);
      setLokal(focusRes);
    } catch (error) {
      console.error("Error fetching restaurant:", error);
    }
  }

  async function fetchProducts() {
    try {
      const res = await getProducts();
      const resArr = res?.data.result.data;

      const focusProduct = resArr.filter(
        (item: any) => item.rest_id === lokal?.name
      );
      setProducts(focusProduct);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchRestouran();
  }, [localPath]);

  useEffect(() => {
    if (lokal) {
      fetchProducts();
    }
  }, [lokal]);

  const date: Date = new Date();

  function reLogin() {
    const loginDate: number | null = parseInt(
      localStorage.getItem("loginDate") || "",
      10
    );
    const currentSecond: number = date.getTime();
    const timeDifference: number = currentSecond - (loginDate || 0);

    if (!localStorage.getItem("userInfo")) {
      toast.error("You need to be logged in !");
      setTimeout(() => {
        push("/login");
      }, 750);
      return;
    }

    if (timeDifference / 1000 >= 3600) {
      toast.error("Your browsing session has expired !");
      setTimeout(() => {
        push("/login");
      }, 750);
      localStorage.removeItem("userInfo");
      localStorage.removeItem("tokenObj");
    } else if (timeDifference / 1000 >= 3540) {
      toast.warning(
        "You will be logged out from the site in the next 1 minutes.!"
      );
    }
  }

  async function handleButtonClick(id: string | number) {
    try {
      const res = await postProductForBasket(id);
      reLogin();
      if (res?.status === 201) {
        setBasketData(res?.data);
      }
    } catch (error) {
      console.error("Error adding product to basket:", error);
    }
  }

  console.log(lokal);

  return (
    <>
      <Head>
        <title>Foody | Restaurant Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mainBurger.svg" />
      </Head>

      <main>
        <Navbar />

        <section className="mx-0 sm:m-8 p-2 sm:p-0 flex flex-col">
          <RestDetailHeader lokal={lokal} />
          <section className="flex flex-col sm:flex-row justify-between gap-5 mt-8">
            {/* PRODUCT */}
            <div className=" bg-whiteLight1 w-full sm:w-3/5">
              <p className="text-center text-3xl text-grayText2 font-semibold my-8">
                {t("detailDesc3")}
              </p>
              <div className="max-h-[432px] overflow-y-auto">
                {product?.map((item: any) => {
                  return (
                    <RestDetailProductReact
                      key={item.id}
                      lokal={lokal}
                      name={item.name}
                      desc={item.description}
                      price={item.price}
                      imageSrc={item.img_url}
                      onClick={() => handleButtonClick(item?.id)}
                    />
                  );
                })}
              </div>
              <ToastContainer />
            </div>
            {/* BASKET */}
            <div className="flex flex-col bg-whiteLight1 p-4 w-full sm:w-2/5">
              <RestDetailBasket />
            </div>
          </section>
        </section>

        <Footer isTop={false} />
      </main>
    </>
  );
};

export default RestaurantDetail;
