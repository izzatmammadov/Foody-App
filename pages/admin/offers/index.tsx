import Barchart from "@/share/components/LineChart";
import { AdminAside } from "@/share/components/adminAside";
import { AdminHeader } from "@/share/components/adminHeader";
import { AdminLeftModal } from "@/share/components/adminLeftModal";
import AdminOffersTableT from "@/share/components/adminOffersTable";
import AdminSecondTitle from "@/share/components/adminSecondTitle";
import OrdersChart from "@/share/components/ordersChart";
import Head from "next/head";
import React, { useState } from "react";

const item = [
  {
    id: 9177,
    image: "/adminMarqarita.svg",
    Title: "Do you like Pizza at Pap...",
    Descriptions: "Yummy this pizza but...",
  },
  {
    id: 9178,
    image: "/adminMarqarita.svg",
    Title: "Do you like Pizza at Pap...",
    Descriptions: "Yummy this pizza but...",
  },
  {
    id: 9179,
    image: "/adminMarqarita.svg",
    Title: "Do you like Pizza at Pap...",
    Descriptions: "Yummy this pizza but...",
  },
  {
    id: 9200,
    image: "/adminMarqarita.svg",
    Title: "Do you like Pizza at Pap...",
    Descriptions: "Yummy this pizza but...",
  },
  {
    id: 9200,
    image: "/adminMarqarita.svg",
    Title: "Do you like Pizza at Pap...",
    Descriptions: "Yummy this pizza but...",
  },
  {
    id: 9200,
    image: "/adminMarqarita.svg",
    Title: "Do you like Pizza at Pap...",
    Descriptions: "Yummy this pizza but...",
  },
  {
    id: 9200,
    image: "/adminMarqarita.svg",
    Title: "Do you like Pizza at Pap...",
    Descriptions: "Yummy this pizza but...",
  },
];

const adminOrders = () => {
  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);
  function changeHidden() {
    setIsHiddenModal((prev) => !prev);
    // console.log(isHiddenModal);
  }

  return (
    <>
      <Head>
        <title>admin</title>
        <meta name="Products" content="Generated by create next app" />
        <link rel="icon" href="/admin-icon.png" />
      </Head>
      <div className=" bg-textBlack min-h-screen px-4">
        <AdminHeader onClickButton={changeHidden} />

        <AdminLeftModal onClickClose={changeHidden} hidden={isHiddenModal} />
        <main className="flex">
          <div className=" hidden sm:block">
            <AdminAside />
          </div>

          <div className=" gap-4 hidden">
            <OrdersChart />
            <Barchart />
          </div>

          <section className=" w-full">
            <div className="m-5">
              <AdminSecondTitle name="Offers" />
            </div>

            {/* <div className=" w-full sm:w-auto m-5 flex flex-wrap gap-4 justify-center">
              {item.map((data) => (
                <AdminRestouransCard data={data} />
              ))}
            </div> */}
            <div className="p-5">
              <table className=" w-full bg-white ">
                <thead className="h-16  text-center text-sm not-italic font-semibold leading-6">
                  <tr>
                    <td>ID</td>
                    <td>image</td>
                    <td>Title</td>
                    <td>Descriptions</td>

                    <td></td>
                  </tr>
                </thead>
                <tbody className="">
                  {item.map((data) => (
                    // <AdminOrdersTable data={data} />
                    <AdminOffersTableT data={data} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default adminOrders;