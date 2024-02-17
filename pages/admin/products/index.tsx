import type { NextPage } from "next";
import Head from "next/head";
import { AdminAside } from "../../../share/components/adminAside";
import AdminCard from "../../../share/components/adminCard";
import AdminSecondTitle from "../../../share/components/adminSecondTitle";
import { Navbar } from "@/share/components/Navbar";
import { useGlobalStore } from "@/share/services/provider";
import { useEffect, useState } from "react";
import { getProducts, getRestourans } from "@/share/services/axios";

interface Product {
  id: string;
  description: string;
  price: number;
  rest_id: number;
  img_url: string;
  name: string;
}

const AdminProducts: NextPage = () => {
  const { products, setProducts } = useGlobalStore();
  const [restaurants, setRestaurants] = useState();

  //* GET PRODUCTS
  const fetchProducts = async () => {
    try {
      const response = await getProducts();

      setProducts(response?.data.result.data);
    } catch (error) {
      console.error("Error can't fetching products:", error);
    }
  };

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderRestaurants = async () => {
    const res = await getRestourans();
    let item = res?.data.result.data.map((i: any) => i.name);
    setRestaurants(item);
  };

  useEffect(() => {
    renderRestaurants();
  }, []);

  //* FILTER PRODUCTS

  const filterProduct = async (title: Product): Promise<void> => {
    try {
      const response = await getProducts();
      const restaurant = response?.data.result.data.filter(
        (item: any) => item?.rest_id === title
      );

      setProducts(restaurant);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Admin | Products</title>
        <meta name="Products" content="Generated by create next app" />
        <link rel="icon" href="/admin-icon.png" />
      </Head>

      <div className="bg-textBlack min-h-screen px-4">
        <Navbar adminNavbar={true} />

        <main className="flex">
          <div className="hidden sm:block">
            <AdminAside />
          </div>

          <section className="w-full">
            <div className="m-0 sm:m-5">
              <AdminSecondTitle
                name="Products"
                p1="Products"
                buttonInnerText="product"
                visibleDropwdown={true}
                visibleButton={false}
                resCategoryARR={restaurants}
                callBackValue={filterProduct}
              />
            </div>

            <div className="w-full sm:w-auto m-5 flex flex-wrap gap-10 justify-center">
              {products.map((product: Product) => (
                <AdminCard
                  key={product?.id}
                  food_id={product?.id}
                  foodname={product?.name}
                  restoranname={product?.rest_id}
                  foodimage={product?.img_url}
                  foodprice={product?.price}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AdminProducts;
