import Image from "next/image";
import { RestDetailBasketCard } from "../restDetailBasketCard";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { clearProductForBasket, deleteProductForBasket, getProductForBasket, postProductForBasket } from "@/share/services/axios";
import { useGlobalStore } from "@/share/services/provider";



export const RestDetailBasket = () => {
  const [showBasket, setShowBasket] = useState(true);


  const {basketData, setBasketData } = useGlobalStore();
  const toggleShowBasket = () => {
    setShowBasket(!showBasket);
  };

  async function renderBasketProducts() {
    const res = await getProductForBasket()
    console.log(res);
setBasketData(res?.data.result.data)
    
  }
  useEffect(() => {
    renderBasketProducts()
  },[])
console.log(basketData);
async function handleIncreasButtonClick  (id: string | number) {
  // console.log(id);
 const res = await postProductForBasket(id)
 if (res?.status === 201) {
   setBasketData(res?.data)
 }
 console.log(res);

 
  
  };
  async function handleDecreaseButtonClick(id: string | number) { 
    const res = await deleteProductForBasket(id)
    console.log(res);
    if (res?.status === 200) {
      setBasketData(res?.data)
    }
  }
  async function handleClearButtonClick(id: string | number) { 
    const res = await clearProductForBasket(id)
    console.log(res);
    if (res?.status === 200) {
      setBasketData(res?.data)
    }
  }
  

  return (
    <>
      { basketData?.total_item === 0 ? (
        <>
          {/* FOR WEB EMPTY BASKET */}
          <div className="hidden sm:flex flex-col justify-between h-full">
            <div className="flex items-center gap-1">
              <Image
                width={30}
                height={0}
                src={"/basketIconGray.svg"}
                alt="basket"
              />
              <p className="font-medium text-whiteLight3 text-lg">
              {basketData?.total_item} items
              </p>
            </div>
            <div className="flex flex-col my-5 items-center mx-auto">
              <Image
                className="w-full "
                width={0}
                height={0}
                src={"/emptyGray.svg"}
                alt="empty"
              />
              <p className="text-4xl  text-whiteLight3 font-semibold text-center">
                Opps! <br /> Basket is empty
              </p>
            </div>
            <div className="flex rounded-full mt-auto items-center justify-between p-2 bg-whiteLight3">
              <p className="text-white text-lg font-medium ml-4">Checkout</p>
              <Button
                className="bg-white text-whiteLight3 font-medium py-1 px-10 rounded-full shadow-md hover:scale-95 transition-all duration-500"
                innerText="0$"
              />
            </div>
          </div>

          {/* FOR MOBILE EMPTY BASKET */}
          <div className="block sm:hidden">
            {showBasket && (
              <>
                <div>
                  <Image
                    className="mx-auto"
                    width={50}
                    height={0}
                    src={"/closeFilter.svg"}
                    alt="closeFilter"
                    onClick={toggleShowBasket}
                  />
                </div>
                <div className="flex flex-col my-5 items-center mx-auto">
                  <Image
                    className="w-full "
                    width={0}
                    height={0}
                    src={"/emptyRed.svg"}
                    alt="empty"
                  />
                  <p className="text-4xl  text-mainRed font-semibold text-center">
                    Opps! <br /> Basket is empty
                  </p>
                </div>
              </>
            )}
            <div className="flex rounded-full mt-auto items-center justify-between p-2 bg-whiteLight3">
              <p
                onClick={toggleShowBasket}
                className="text-white text-lg font-medium ml-4"
              >
                {showBasket ? (
                  "Checkout"
                ) : (
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      height={0}
                      src={"/basketIcon.svg"}
                      alt="basket"
                    />
                    <p className="font-medium text-mainRed text-lg">
                    {basketData?.total_item} items
                    </p>
                  </div>
                )}
              </p>
              <Button
                className="bg-white text-whiteLight3 font-medium py-1 px-10 rounded-full shadow-md hover:scale-95 transition-all duration-500"
                innerText="0$"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-1">
            <Image width={30} height={0} src={"/basketIcon.svg"} alt="basket" />
            <p className="font-medium text-mainRed text-lg">
            {basketData?.total_item} items
            </p>
          </div>
            <div className="mb-5">
              {basketData?.items?.map((item: any) => {
                return <RestDetailBasketCard
                  increaseCount={() => handleIncreasButtonClick(item.id)}
                  decreaseCount={() => handleDecreaseButtonClick(item.id)}
                  clearBasket={()=>handleClearButtonClick(basketData.id)}
                name={item?.name}
                price={item.amount}
                count={item.count}
                imageSrc={item.img_url}
              />
              })}
{/*           
            <RestDetailBasketCard
              name="Papa John's Pizza"
              price={17.9}
              count={1}
              imageSrc="/margaritaCard.svg"
            />
            <RestDetailBasketCard
              name="Papa John's Pizza"
              price={17.9}
              count={1}
              imageSrc="/margaritaCard.svg"
            /> */}
          </div>
          <div className="flex rounded-full mt-auto items-center justify-between p-2 bg-mainRed">
            <p className="text-white text-lg font-medium ml-4">Checkout</p>
            <Button
              className="bg-white text-mainRed font-medium py-1 px-10 rounded-full shadow-md hover:scale-95 transition-all duration-500"
              innerText={basketData?.total_amount+" $"}
            />
          </div>
        </>
      )}
    </>
  );
};
