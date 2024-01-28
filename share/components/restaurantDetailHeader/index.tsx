import { useRouter } from "next/router";
import { Button } from "../Button";
import styles from "./restaurantDetail.module.css";
import { useTranslation } from "react-i18next";

export const RestDetailHeader = () => {
  const { t } = useTranslation();
  const navigate = useRouter();
  return (  
    <>
      <div className={styles.bg}></div>

      <div className="pb-0 sm:pb-6 border-b-0 sm:border-b-2 items-center border-b-whiteLight1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-grayText2 text-2xl">
              Papa John's Pizza Restaurant
            </p>
            <p className="font-medium text-grayText1">
              19 Nizami street, Sabail, Baku
            </p>
          </div>

          <div className="flex gap-10 border-y-2 sm:border-none py-2 sm:p-0 border-whiteLight1 w-full sm:w-max my-2 sm:my-0 items-center justify-between sm:justify-center">
            <div className="flex flex-col gap-1 text-grayText1">
              <p className="text-lg">{t("detailDesc4")}</p>
              <p>pizza, drink, hotdog, sandwich</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                className="py-3 px-2 border-2 border-mainRed text-mainRed rounded-md shadow-md"
                innerText="$5 Delivery"
              />
              <Button
                className="hidden sm:block py-3 px-5 text-white border-2 border-mainRed bg-mainRed rounded-md shadow-md hover:scale-95 transition-all duration-500"
                innerText={t("detailDesc2")}
                onClick={() => {
                  navigate.push("/restaurants");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
