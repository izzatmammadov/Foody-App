import { Navbar } from "@/share/components/Navbar";
import { AdminAside } from "@/share/components/adminAside";
import { AdminLeftModal } from "@/share/components/adminLeftModal";
import AdminOrdersTable from "@/share/components/adminOrdersTable";
import AdminSecondTitle from "@/share/components/adminSecondTitle";
import { getOrder } from "@/share/services/axios";
import { useGlobalStore } from "@/share/services/provider";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const adminOrders = () => {
  const { t } = useTranslation();
  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);
  const { orders, setOrders } = useGlobalStore();

  function changeHidden() {
    setIsHiddenModal((prev) => !prev);
  }

  //* GET ORDERS
  const fetchOrders = async () => {
    try {
      const response = await getOrder();
      setOrders(response?.data.result.data);
    } catch (error) {
      console.error("Error can't fetching products:", error);
    }
  };

  console.log("ORDERS ", orders);

  useEffect(() => {
    fetchOrders();
  }, []);

 

  return (
    <>
      <Head>
        <title>Admin | Orders</title>
        <meta name="Products" content="Generated by create next app" />
        <link rel="icon" href="/admin-icon.png" />
      </Head>
      <div className=" bg-textBlack min-h-screen px-4">
        <Navbar adminNavbar={true} />

        <AdminLeftModal onClickClose={changeHidden} hidden={isHiddenModal} />
        <main className="flex">
          <div className=" hidden sm:block">
            <AdminAside />
          </div>

          <section className=" w-full">
            <div className="m-0 sm:m-5">
              <AdminSecondTitle
                name="Orders"
                p1="Orders"
                resCategoryARR={""}
                visibleButton={false}
                visibleDropwdown={false}
                buttonInnerText=""
              />
            </div>

            <div className="p-5 max-w-full overflow-x-auto  max-h-[500px] overflow-y-auto">
              <table className=" min-w-full bg-white ">
                <thead className="h-16  text-center text-sm not-italic font-semibold leading-6">
                  <tr>
                    <td>ID</td>
                    <td>{t("adminOrder1")}</td>
                    <td>{t("userDesc6")}</td>
                    <td>{t("userDesc7")}</td>
                    <td>{t("userDesc9")}</td>
                    <td>{t("userDesc8")}</td>
                    <td>{t("userDesc10")}</td>
                  </tr>
                </thead>
                <tbody className="">
                  {orders?.map((data: any) => (
                    <AdminOrdersTable data={data}  />
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
