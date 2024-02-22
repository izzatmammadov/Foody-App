import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const OrdersChart = () => {
  return (
    <div className=" mb-20 mmd:mb-0 pt-4 pl-6    bg-darkBlue_3  h-80  rounded-xl   llg:w-5/12 xl:w-4/12  pb-8 ">
      <div>
        <p className=" text-grayText font-medium text-xl">Orders</p>
        <div className=" flex justify-center items-center">
          <PieChart
            series={[
              {
                data: [
                  { value: 20, label: "KFC", color: "red" },
                  { value: 15, label: "Dominoe's" },
                  { value: 30, label: "Mc Donalds" },
                  { value: 10, label: "Burger King" },
                ],
                innerRadius: 65,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            width={370}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};
export default OrdersChart;
