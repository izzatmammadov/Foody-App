import { useRouter } from "next/router";
import { Button } from "../Button";
import styles from "./restaurantDetail.module.css";

export const RestDetailHeader = () => {
  const navigate = useRouter();
  return (
    <>
      <div className={styles.bg}></div>

      <div className="pb-6 border-b-2 items-center border-b-whiteLight1">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-grayText2 text-2xl">
              Papa John's Pizza Restaurant
            </p>
            <p className="font-medium text-grayText1">
              19 Nizami street, Sabail, Baku
            </p>
          </div>

          <div className="flex gap-10 items-center justify-center">
            <div className="flex flex-col gap-1 text-grayText1">
              <p className="text-lg">Cuisine</p>
              <p>pizza, drink, hotdog, sandwich</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                className="py-3 px-2 border-2 border-mainRed text-mainRed rounded-md shadow-md"
                innerText="$5 Delivery"
              />
              <Button
                className="py-3 px-5 text-white border-2 border-mainRed bg-mainRed rounded-md shadow-md hover:scale-95 transition-all duration-500"
                innerText="Go Back"
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
