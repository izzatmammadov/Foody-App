import { Button } from "../Button";
import { RestaurantSearchModalCard } from "../restaurantSearchModalCard";

export const RestaurantSearchModal = ({ onClose }: any) => {
  return (
    <div className=" absolute top-[135px] right-[20.75%] flex flex-col justify-between rounded-lg py-5 bg-white z-50 w-[32%]">
      <Button
        onClick={onClose}
        className="text-mainRed hover:text-mainRedLight mb-5"
        innerText="&#10006;"
      />
      <div className="max-h-[180px] overflow-y-auto overflow-x-hidden">
        <RestaurantSearchModalCard
          image="/mcdonalds.svg"
          name="Mc Donald's"
          desc="Delicious and fresh"
        />
        <RestaurantSearchModalCard
          image="/mcdonalds.svg"
          name="Mc Donald's"
          desc="Delicious and fresh"
        />
        <RestaurantSearchModalCard
          image="/mcdonalds.svg"
          name="Mc Donald's"
          desc="Delicious and fresh"
        />
        <Button
          className="text-lg font-light text-grayText2 w-full"
          innerText="More &#10141;"
        />
      </div>
    </div>
  );
};
