import { useTranslation } from "react-i18next";
import { TableData } from "../orderTableData";
import { getOrder } from "@/share/services/axios";
import { useState } from "react";

export const Table = () => {
  const { t, i18n } = useTranslation();
  const [orderState, setOrderState] = useState([]);

  // async function RenderOrder() {
  //   try {
  //     const res = await getOrder();
  //     const result = res?.data.result.data || [];
  //     setOrderState(result);
  //   } catch (error) {
  //     console.error("Error fetching order:", error);
  //   }
  // }
  // console.log(orderState);

  // useEffect(() => {
  //   RenderOrder();
  // }, []);

  const fetchOrder = async () => {
    try {
      const res = await getOrder();
      const result = res?.data.result.data || [];
      setOrderState(result);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  // Fetch order data when the component mounts
  fetchOrder();

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
          {orderState?.map((item: any, index: number) => (
            <TableData
              key={`tableData_${index}`}
              id={`${index + 1}`}
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
