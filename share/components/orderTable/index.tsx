import { useTranslation } from "react-i18next";
import { TableData } from "../orderTableData";
import { getOrder } from "@/share/services/axios";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/share/services/provider";

export const Table = () => {
  const { t, i18n } = useTranslation();
  const { orderData, setOrderData } = useGlobalStore();
  const { orderForShow, setOrderForShow } = useGlobalStore();

  // async function RenderOrder() {
  //   try {
  //     const res = await getOrder();
  //     const result = res?.data.result.data || [];
  //     setOrderData(result);
  //   } catch (error) {
  //     console.error("Error fetching order:", error);
  //   }
  // }
  // console.log(orderState);

  const fetchOrder = async () => {
    try {
      const res = await getOrder();
      const result = res?.data.result.data || [];
      console.log(res, "res--------------");
      setOrderForShow(res)
      setOrderData(result);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  // Fetch order data when the component mounts
  // fetchOrder();

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <section className="max-w-full overflow-x-auto">
      <table className=" min-w-full bg-white text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-whiteLight3">ID</th>
            <th className="py-2 px-4 border-b border-whiteLight3">
              {t("userDesc6")}
            </th>
            <th className="py-2 px-4 border-b border-whiteLight3">
              {t("userDesc7")}
            </th>
            <th className="py-2 px-4 border-b border-whiteLight3">
              {t("userDesc8")}
            </th>
            <th className="py-2 px-4 border-b border-whiteLight3">
              {t("userDesc9")}
            </th>
            <th className="py-2 px-4 border-b border-whiteLight3">
              {t("userDesc10")}
            </th>
            <th className="py-2 px-4 border-b border-whiteLight3"></th>
          </tr>
        </thead>
        <tbody>
          {orderData?.map((item: any, index: number) => (
            <TableData
              key={`tableData_${index}`}
              id={item.id}
              time="12:50"
              adress={item.delivery_address}
              amount={item.amount}
              payment={item.payment_method == 0 ? "Credit Card" : "Pay Cash"}
              // payment="Credit Card"
              contact={item.contact}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
