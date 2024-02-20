import { log } from "console";
import { Button } from "../Button";
import { RestaurantSearchModalCard } from "../restaurantSearchModalCard";
import { useRouter } from "next/router";

export const RestaurantSearchModal = ({ onClose, filterRestouran }: any) => {
  function onclick(id: any) {
    push(`/restaurants/${id}`);
  }

  const { query, push } = useRouter();
  return (
    <div className=" absolute top-[135px] right-[20.75%] flex flex-col justify-between rounded-lg py-5 bg-white z-50 w-[32%]">
      <Button
        onClick={onClose}
        className="text-mainRed hover:text-mainRedLight mb-5"
        innerText="&#10006;"
      />
      <div className="max-h-[180px] overflow-y-auto overflow-x-hidden">
        {/* <RestaurantSearchModalCard
          image="/mcdonalds.svg"
          name="Mc Donald's"
          desc="Delicious and fresh"
        /> */}
        {filterRestouran?.map((item: any) => (
          <RestaurantSearchModalCard
            image={item.img_url}
            name={item.name}
            desc={item.cuisine}
            onclick={onclick}
            id={item.id}
          />
        ))}

        <Button
          className="text-lg font-light text-grayText2 w-full"
          innerText="More &#10141;"
        />
      </div>
    </div>
  );
};
