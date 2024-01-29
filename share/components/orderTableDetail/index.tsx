import { useTranslation } from "react-i18next";
import { OrderTableDetailData } from "../orderTableDetailData";

export const OrderTableDetail = () => {
  const { t } = useTranslation();

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
        <OrderTableDetailData
          image="/margaritaCard.svg"
          name="Papa John's Pizza"
          price={17.9}
          count={2}
          amount={35.8}
        />

        <OrderTableDetailData
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
        />
      </tbody>
    </table>
  );
};
