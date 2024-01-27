import React, { FC } from "react";
import Image from "next/image"

interface RestaurantFilterModalProps {
    onClose: () => void;
  }

 export const RestaurantFilterModal: FC<RestaurantFilterModalProps> = ({ onClose }) => {
    const handleFilterButtonClick = () => {
      onClose();
    };
    return (
        <div className="fixed bottom-0 left-0 w-full min-h-screen z-50 bg-black bg-opacity-50 flex items-end justify-center">
              <div className="bg-white p-6 rounded-t-3xl max-h-[55vh] w-full flex flex-col">
                <button className="mx-auto mb-3" onClick={handleFilterButtonClick}><Image width={50} height={0} src={"closeFilter.svg"} alt="closeFilter"/></button>
                <ul className=" overflow-y-auto flex flex-col gap-8">
                  <li className=" border-b-2 border-b-whiteLight2 text-2xl font-semibold pb-2 pl-4">Fast Food</li>
                  <li className=" border-b-2 border-b-whiteLight2 text-2xl font-semibold pb-2 pl-4">Pizza</li>
                  <li className=" border-b-2 border-b-whiteLight2 text-2xl font-semibold pb-2 pl-4">Chinese</li>
                  <li className=" border-b-2 border-b-whiteLight2 text-2xl font-semibold pb-2 pl-4">Soups</li>
                  <li className=" border-b-2 border-b-whiteLight2 text-2xl font-semibold pb-2 pl-4">Burger</li>
                  <li className=" border-b-2 border-b-whiteLight2 text-2xl font-semibold pb-2 pl-4">Sushi</li>
                  <li className=" border-b-2 border-b-whiteLight2 text-2xl font-semibold pb-2 pl-4">Special</li>
                  <li className=" border-b-2 border-b-whiteLight2 text-2xl font-semibold pb-2 pl-4">Vegaterian</li>
                </ul>
              </div>
            </div>
    )
}