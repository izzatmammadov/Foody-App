import { useTranslation } from "react-i18next";
import { OrderTableDetailData } from "../orderTableDetailData";
import { useGlobalStore } from "@/share/services/provider";
import { log } from "console";

export const OrderTableDetail = (id: any) => {
  const { t } = useTranslation();
  const { orderForShow, setOrderForShow } = useGlobalStore();
  console.log(id.id, "+++++");
  let FilteredData = orderForShow.data.result.data.filter(
    (item: any) => item.id == id.id
  );

  console.log(FilteredData);

  return (
    <table className="min-w-full bg-white text-center">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-whiteLight3">
            {t("userOrder")}
          </th>
          <th className="py-2 px-4 border-b border-whiteLight3">
            {t("userOrder2")}
          </th>
          <th className="py-2 px-4 border-b border-whiteLight3">
            {t("userOrder3")}
          </th>
          <th className="py-2 px-4 border-b border-whiteLight3">
            {t("userOrder4")}
          </th>
          <th className="py-2 px-4 border-b border-whiteLight3">
            {t("userOrder5")}
          </th>
        </tr>
      </thead>
      <tbody>
        {FilteredData[0]?.products?.map((item: any) => (
          <OrderTableDetailData
            image={item.img_url}
            name={item.name}
            price={item.price}
            count={item.count}
            amount={item.amount}
          />
        ))}
        {/* <OrderTableDetailData
          image="/margaritaCard.svg"
          name="peyser John's Pizza"
          price={17.9}
          count={2}
          amount={35.8}
        /> */}

        {/* <OrderTableDetailData
          image="/cocaCola.svg"
          name="Coca Cola"
          price={7.9}
          count={4}
          amount={31.6}
        />

        <OrderTableDetailData
          image="/friesAnimation.svg"
          name="Papa John's Fries"
          price={9.9}
          count={2}
          amount={19.8}
        /> */}
      </tbody>
    </table>
  );
};
