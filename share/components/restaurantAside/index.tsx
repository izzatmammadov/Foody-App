import { Form, getCategories } from "@/share/services/axios"
import Image from "next/image"
import { useEffect, useState } from "react"


export const RestaurantAside = () => {
  const [categories, setCategories] = useState<Form[]>([{name:"",slug:"",img_url:""}])

   async function renderCategories() {
    const res = await getCategories()
console.log(res);
     if (res?.status === 200) {
      setCategories(res?.data?.result?.data)
  
}
    
}
  useEffect(() => {

    renderCategories()
    
  }, [])
  console.log(categories);
  
    return (
      <>
        {categories.map((item: any) => {
          console.log(item);
               return <div className="flex items-center gap-4 cursor-pointer p-1 h-10 hover:bg-mainRedLight transition-all">
                 <Image
                   className="h-10 object-cover"
                  width={40}
                  height={0}
                  src={item?.img_url}
                  alt={item?.name}
                />
                  <p className="font-semibold text-[20px] ">{item.name}</p>
              </div>
        })}
  
{/* 
        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"friesAnimation.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Special</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Vegaterian</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Sushi</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"soupcard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Soups</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"papaCoffee.svg"}
            alt="papaCoffee"
          />
          <p className="font-semibold text-[20px] ">Coffee</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Lemonade</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Alcahol</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Fast Food</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Fast Food</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Fast Food</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Fast Food</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Fast Food</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Fast Food</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Fast Food</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Fast Food</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer p-1 hover:bg-mainRedLight transition-all">
          <Image
            width={40}
            height={0}
            src={"margaritaCard.svg"}
            alt="margarita"
          />
          <p className="font-semibold text-[20px] ">Fast Food</p>
        </div> */}
        </>
    )
}