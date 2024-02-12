import Barchart from "@/share/components/LineChart";
import "react-toastify/dist/ReactToastify.css";
import { AdminAside } from "@/share/components/adminAside";
import { AdminHeader } from "@/share/components/adminHeader";
import { AdminLeftModal } from "@/share/components/adminLeftModal";
import AdminRestouransCard from "@/share/components/adminRestouransCard";
import AdminSecondTitle from "@/share/components/adminSecondTitle";
import OrdersChart from "@/share/components/ordersChart";

import { useGlobalStore } from "@/share/services/provider";

import {
  Form,
  formtype,
  getRestourans,
  postRestourans,
  getCategories,
} from "@/share/services/axios";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Navbar } from "@/share/components/Navbar";
import { log } from "console";

const restourans = () => {
  const { restouranData, setRestouranData } = useGlobalStore();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);

  function changeHidden() {
    setIsHiddenModal((prev) => !prev);
    // console.log(isHiddenModal);
  }
  async function RenderData() {
    const data = await getRestourans();
    setData(data?.data.result.data);
    setData2(data?.data.result.data);

    const categoryArry = data?.data.result.data;

    setRestouranData(categoryArry);
  }

  useEffect(() => {
    RenderData();
  }, []);

  const RestouransNameRef = useRef<HTMLInputElement>(null);

  const cuisineRef = useRef<HTMLInputElement>(null);

  const delivery_priceRef = useRef<HTMLInputElement>(null);

  const delivery_minRef = useRef<HTMLInputElement>(null);

  const addressRef = useRef<HTMLInputElement>(null);

  const category_idRef = useRef<HTMLInputElement>(null);

  const imgRef = useRef<HTMLInputElement>(null);

  const [imgUrl, setImgUrl] = useState<string>("");

  function getImgUrl(url: string): void {
    //  console.log(url);
    setImgUrl(url);
  }

  async function addRestourans() {
    // console.log("addRestourans");

    const ResName: any = RestouransNameRef?.current?.value;
    const cuisine: any = cuisineRef?.current?.value;
    const delivery_price = delivery_priceRef?.current?.value;
    const delivery_min: any = delivery_minRef?.current?.value;
    const address: any = addressRef?.current?.value;
    const category_id: any = category_idRef?.current?.value;
    const img: any = imgUrl;

    if (
      !isInputValid(
        ResName,
        cuisine,
        delivery_price,
        delivery_min,
        address,
        category_id,
        img
      )
    ) {
      toast.warning("Please fill all the inputs!");
      return;
    }

    const form: formtype = {
      name: ResName,
      category_id: category_id,
      img_url: img,
      cuisine: cuisine,
      address: address,
      delivery_min: delivery_min,
      delivery_price: delivery_price,
    };

    try {
      const res = await postRestourans(form);

      if (res?.status === 201) {
        setRestouranData((prev: any) => [...prev, res.data]);
        if (
          RestouransNameRef?.current &&
          cuisineRef?.current &&
          delivery_priceRef?.current &&
          delivery_minRef?.current &&
          addressRef?.current &&
          category_idRef?.current
        ) {
          RestouransNameRef.current.value = "";
          cuisineRef.current.value = "";
          delivery_priceRef.current.value = "";
          delivery_minRef.current.value = "";
          addressRef.current.value = "";
          category_idRef.current.value = "";
        }

        setTimeout(() => {
          changeHidden();
        }, 300);

        toast.success("Category created successfully!");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("An error occurred while adding the category.");
    }
  }
  function isInputValid(
    // category: string | undefined,
    // slug: string | undefined,
    // img: string
    Resname: string,
    category_id: number | undefined,
    img_url: any,
    cuisine: string,
    address: string,
    delivery_min: number,
    delivery_price: number
  ): boolean {
    return (
      !!Resname &&
      !!category_id &&
      !!img_url &&
      !!address &&
      !!cuisine &&
      !!delivery_min &&
      !!delivery_price
    );
  }

  // const Filterf = (value: any) => {
  //   console.log(data);
  //   let newValue = data2.filter((item) => item?.category_id == value);
  //   setData(newValue);
  // };
  // const Filterf = () => {

  // };

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;
    // const value = category_idRef.current?.value;
    // console.log("value", value);
    // e.target.value=value
    let newValue = data2.filter((item: any) => item?.category_id == value);

    console.log("------------------------data", newValue);

    setData(newValue);
  }

  const [resCategoryARR, setResCategoryARR] = useState();

  async function categoriesRender2() {
    try {
      const response = await getCategories();
      const categoryArry = response?.data.result.data;

      let items = categoryArry.map((item: any) => item.name);
      // console.log("categoryArry-------------",categoryArry);

      setResCategoryARR(items);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log("category", resCategoryARR);
  useEffect(() => {
    categoriesRender2();
  }, []);

  useEffect(() => {
    // console.log("resCategoryARR-------------", resCategoryARR);
  }, []);
  return (
    <>
      <Head>
        <title>Admin | Restaurants</title>
        <meta name="Products" content="Generated by create next app" />
        <link rel="icon" href="/admin-icon.png" />
      </Head>

      <div className=" bg-textBlack min-h-screen px-4">
        <ToastContainer />
        <Navbar adminNavbar={true} />

        <AdminLeftModal
          arr={resCategoryARR}
          category_idRef={category_idRef}
          addressRef={addressRef}
          delivery_minRef={delivery_minRef}
          delivery_priceRef={delivery_priceRef}
          cuisineRef={cuisineRef}
          RestouransNameRef={RestouransNameRef}
          getImgUrl={getImgUrl}
          imgRef={imgRef}
          ButtonOnClick={addRestourans}
          onClickClose={changeHidden}
          hidden={isHiddenModal}
          mod="2"
          p="Add Restouran"
          p2="Add your Restuarants information"
          btn="Create  Restuarant"
        />

        <main className="flex">
          <div className=" hidden sm:block">
            <AdminAside />
          </div>

          <div className=" gap-4 hidden">
            <OrdersChart />
            <Barchart />
          </div>

          <section className="w-full">
            <div className="m-5">
              <AdminSecondTitle
                resCategoryARR={resCategoryARR}
                callBackValue={handleSelectChange}
                name="Restaurants"
                p1="Restaurants"
                onClick={changeHidden}
              />
            </div>

            <div className=" w-full sm:w-auto m-5 flex flex-wrap gap-4 justify-center">
              {restouranData.map((data: any) => (
                <AdminRestouransCard data={data} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default restourans;
