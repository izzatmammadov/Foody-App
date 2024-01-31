import Image from "next/image";

interface Props {
  image: string;
  name: string;
  desc: string;
}

export const RestaurantSearchModalCard = ({ image, name, desc }: Props) => {
  return (
    <div className="flex items-center gap-5 border-b-2 border-b-whiteLight1 p-4 mb-5 cursor-pointer hover:bg-whiteLight1">
      <Image width={60} height={0} src={image} alt={image} />
      <div className="flex flex-col w-full">
        <p className=" font-semibold">{name}</p>
        <p className=" text-grayText2">{desc}</p>
      </div>
    </div>
  );
};
