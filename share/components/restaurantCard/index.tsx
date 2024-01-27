import Image from "next/image";

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  deliveryCost: number;
  deliveryTime: string;
  imageSrc: string;
  isNew?: boolean;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  cuisine,
  deliveryCost,
  deliveryTime,
  imageSrc,
  isNew = false,
}) => {
  return (
    <div className="w-[46%] relative text-center sm:text-start sm:w-1/5 h-max px-1 sm:px-4 py-7 shadow-lg flex flex-col cursor-pointer hover:scale-105 transition-all duration-500">
      {isNew && (
        <span className="absolute top-0 left-0 bg-mainRed text-white px-4 py-1 text-sm font-semibold animate-pulse">
          NEW
        </span>
      )}
      <Image width={300} height={0} src={imageSrc} alt="soup" />
      <p className="font-bold text-grayText2 text-2xl mt-4">{name}</p>
      <p className="mb-4 text-grayText1">{cuisine}</p>
      <div className="flex flex-col gap-1 sm:gap-0 sm:flex-row justify-between items-center">
        <p className="font-bold">${deliveryCost} Delivery</p>
        <p className="bg-mainRed py-1 w-4/5 text-center sm:px-3 sm:w-max rounded-full text-white shadow-md">
          {deliveryTime}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;