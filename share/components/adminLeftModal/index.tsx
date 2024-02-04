import React, { useEffect, useState } from "react";
import { ImageInput } from "../ImageInput";
import { AdminModalInput } from "../adminModalInput";
import { AdminModalTexArea } from "../adminModalTextArea";
import { AdminModalDropdown } from "../adminModalDropdown";
import { Button } from "../Button";
import Image from "next/image";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fileStorage } from "../../../server/configs/firebase";

interface Props {
  p?: string;
  p1?: string;
  p2?: string;
  mod?: string;
  btn?: string;
  hidden?: boolean;
  categoryRef?: any;
  ButtonOnClick?: () => void;
  onClickClose?: () => void;
  getImgUrl?: any;
  slugRef?: any;
  imgRef?: any;
  RestouransNameRef?: any;
  imgResRef?: any;
  cuisineRef?: any;
  delivery_priceRef?: any;
  delivery_minRef?: any;
  addressRef?: any;
  category_idRef?: any;
}

export const AdminLeftModal = ({
  p = "Add Product",
  p1 = "Upload your product image",
  p2 = "Add your Product description and necessary information",
  mod = "1",
  btn = "Create Product",
  hidden = true,
  ButtonOnClick,
  onClickClose,
  categoryRef,
  getImgUrl,
  slugRef,
  imgRef,
  RestouransNameRef,
  cuisineRef,
  delivery_priceRef,
  delivery_minRef,
  addressRef,
  category_idRef,
}: Props) => {
  const [imgUrl, setImgUrl] = useState<any>("");
  //  const [imgUpload, setImageUpload]=useState()

  // const imgRef=useRef(null)
  // console.log(imgUrl);

  const [imgOnload, setImgOnload] = useState(false);

  // console.log(imgOnload);

  function getİmage(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e?.target?.files?.[0]?.name;
    if (!name) {
      return;
    }
    const imageRef = ref(fileStorage, `files/images/${name}`);

    // setCurrentImgRef(imageRef)

    const file = e?.target?.files?.[0];
    if (!file) {
      return;
    }
    uploadBytes(imageRef, file).then((snapshot) => {
      setImgOnload(true);
      getDownloadURL(snapshot.ref).then((url) => {
        setImgOnload(false);
        setImgUrl(url);
        getImgUrl(url);
      });
    });
  }
  return (
    <div
      className={` fixed  z-10  w-full sm:w-3/4    sm:pl-12 ${
        hidden ? "  -right-full" : "right-0"
      }  transition-all duration-500 top-0 h-screen`}
    >
      <button
        onClick={onClickClose}
        className=" bg-lightPurple_3 rounded-full    absolute  right-5 sm:left-0  top-7 w-7 h-7 cursor-pointer"
      >
        <Image alt="close-icon" height={28} width={28} src="/close.svg" />
      </button>
      <div className=" bg-darkBlue_2   flex-col pl-7 pt-7 pb-5 pr-7 lg:pr-14  max-h-screen   overflow-y-auto h-screen">
        <div>
          <p className=" text-grayText font-medium text-2xl  mb-2">{p}</p>
        </div>
        <div className=" flex flex-col   lg:flex-row       w-full   mb-20">
          <div className=" w-full lg:w-1/3 h-38 ">
            <p className=" text-grayText font-medium  text-lg  tracking-wide">
              {p1}
            </p>
            <Image
              ref={imgRef}
              src={`${
                imgOnload ? "/loadingImg.jpg" : imgUrl ? imgUrl : "/noimg.png"
              }`}
              width={124}
              height={124}
              alt="img"
            />
          </div>
          <div className=" w-full lg:w-2/3  h-38 pt-6 ">
            <ImageInput onChange={getİmage} />
          </div>
        </div>

        <div className="flex   flex-col   lg:flex-row  w-full mb-36">
          <div className="w-full lg:w-1/3">
            <p className=" text-grayText font-medium  text-lg  tracking-wide">
              {p2}
            </p>
          </div>
          <div className=" w-full lg:w-2/3  pt-5 pl-5  pr-7 pb-7  rounded-2xl bg-darkBlue_5 max-h-[600px] overflow-y-auto ">
            {mod === "1" && (
              <div>
                <AdminModalInput p="Name" />
                <AdminModalTexArea />
                <AdminModalInput p="Price" />
                <AdminModalDropdown
                  p="Restaurants"
                  className="w-full bg-darkBlue_4 rounded-2xl font-medium text-base text-whiteLight pl-3 py-4"
                />
              </div>
            )}

            {mod === "2" && (
              <div>
                <AdminModalInput useRef={RestouransNameRef} p="Name" />
                <AdminModalTexArea useRef={cuisineRef} p="Cuisine" />
                <AdminModalInput
                  useRef={delivery_priceRef}
                  p="Delivery Price $"
                />
                <AdminModalInput useRef={delivery_minRef} p="Delivery Min" />
                <AdminModalInput useRef={addressRef} p="Address" />
                <AdminModalDropdown
                  useRef={category_idRef}
                  p="Category"
                  className="w-full bg-darkBlue_4 rounded-2xl font-medium text-base text-whiteLight pl-3 py-4"
                />
              </div>
            )}
            {mod === "3" && (
              <div>
                <AdminModalInput useRef={categoryRef} p="Name" />
                <AdminModalInput useRef={slugRef} p="Slug" />
              </div>
            )}
            {mod === "4" && (
              <div>
                <AdminModalInput p="Title" />
                <AdminModalTexArea p="Description" />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-around  border-t-darkBlue_5 border-t-4 pt-6  gap-10">
          <Button
            onClick={onClickClose}
            className=" bg-darkBlue_5 text-white py-3 w-1/2 rounded-2xl"
            innerText="Cancel"
          />
          <Button
            onClick={ButtonOnClick}
            className=" text-white bg-lightPurple_3 w-1/2 rounded-2xl"
            innerText={btn}
          />
        </div>
      </div>
    </div>
  );
};
