import { Form, getCategories } from "@/share/services/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const RestaurantAside = ({ onClick }: { onClick: (id: string) => void }) => {
  const [categories, setCategories] = useState<Form[]>([
    { name: "", slug: "", img_url: "" },
  ]);

  async function renderCategories() {
    const res = await getCategories();

    if (res?.status === 200) {
      setCategories(res?.data?.result?.data);
    }
  }
  useEffect(() => {
    renderCategories();
  }, []);

  return (
    <>
      <div
        onClick={() => onClick("")}
        className="flex items-center  gap-4 cursor-pointer p-1 h-10  hover:bg-mainRedLight transition-all"
      >
        <Image
          className="h-10 object-cover rounded-full"
          width={40}
          height={0}
          src={"/all.png"}
          alt="all"
        />
        <p className="font-semibold text-[20px] ">All</p>
      </div>
      {categories?.map((item: any) => {
        return (
          <div
            key={item.slug}
            onClick={() => onClick(item.name)}
            className="flex items-center gap-4 cursor-pointer whitespace-nowrap w-full overflow-x-auto overflow-y-hidden p-1 h-10 hover:bg-mainRedLight transition-all"
          >
            <Image
              className="h-10 object-cover"
              width={40}
              height={0}
              src={item?.img_url}
              alt={item?.slug}
            />
            <p className="font-semibold text-[20px] ">{item.name}</p>
          </div>
        );
      })}
    </>
  );
};
export default RestaurantAside;
