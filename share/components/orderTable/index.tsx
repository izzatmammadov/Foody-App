import { useTranslation } from "react-i18next";
import { TableData } from "../orderTableData";

export const Table = () => {
  const { t, i18n } = useTranslation();

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
          <TableData
            id="0001"
            time="12:50"
            adress="29 Eve Street, 543 Evenue Road, Ny 87876"
            amount={50.25}
            payment="Credit Card"
            contact={994509998877}
          />

          <TableData
            id="0001"
            time="12:50"
            adress="29 Eve Street, 543 Evenue Road, Ny 87876"
            amount={50.25}
            payment="Credit Card"
            contact={994509998877}
          />

          <TableData
            id="0001"
            time="12:50"
            adress="29 Eve Street, 543 Evenue Road, Ny 87876"
            amount={50.25}
            payment="Credit Card"
            contact={994509998877}
          />
        </tbody>
      </table>
    </section>
  );
};
