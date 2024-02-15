import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modal";
import { Button } from "../Button";
import { AdminLeftModal } from "../adminLeftModal";
import {
  OfferValues,
  deleteOffer,
  getEditOffer,
  putOffer,
} from "@/share/services/axios";
import { toast } from "react-toastify";
import { useGlobalStore } from "@/share/services/provider";

interface AdminOffersTableType {
  data: {
    id: number | string;
    image: string;
    Title: string;
    Descriptions: string;
  };
}

const AdminOffersTableT: React.FC<AdminOffersTableType> = ({
  data,
}: any): any => {
  const { t, i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [isHiddenModal, setIsHiddenModal] = useState<boolean>(true);
  const {offers, setOffers} = useGlobalStore();

  const form_titleRef = useRef<HTMLInputElement>(null);
  const form_descRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  function getImgUrl(url: string) {
    setImgUrl(url);
  }

  //^ MODAL
  const handleButtonClick = (id:string) => {
    setIsModalOpen(true);
    setActiveId(data.id);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  async function handleEditClick(id: string) {
    setActiveId(data.id);
    changeHidden();

    const res = await getEditOffer(id);
    if (res?.status === 200) {
      const currentData = res?.data.result.data;
      console.log("currentData ", currentData);
      
      if (form_descRef && form_titleRef && imgRef) {
      (form_descRef.current as { value: string }).value = currentData?.description || "";

      (form_titleRef.current as { value: string }).value = currentData?.name || "";

      (imgRef.current as { src: string }).src = currentData?.img_url || "";
    }}
    
  }

  //* EDIT OFFER
  async function editOffer() {
    const title = form_titleRef?.current?.value;
    const description = form_descRef?.current?.value;
    const img = imgRef.current?.src;

    const offerValues: OfferValues = {
      name: title,
      description,
      img_url: img,
    };

    if (!isInputValid(title, description, img)) {
      toast.warning("Please fill all the inputs!");
      return;
    }

    const res = await putOffer(activeId, offerValues);
    console.log(offerValues);
    
    console.log(res);
    if (res?.status === 200) {
      toast.success("Edit was successfully!");
      const updatedData = offers.map((item:any) => {
        if (item.id === activeId) {
          return res.data.data;
        }
        return item;
      });
      setOffers(updatedData)

      setTimeout(() => {
        changeHidden();
      }, 500);
    }
  }

  function isInputValid(
    title: string | undefined,
    description: string | undefined,
    img: string | undefined
  ): boolean {
    console.log(title, description, img);
    return !!title && !!description && !!img;
  }

  //! DELETE OFFER
  async function removeOffer() {
    const res = await deleteOffer(activeId);
    console.log(offers);
    if (res?.status === 204) {
    let newData = offers?.filter((item:any)=> item.id !== activeId)
      setOffers(newData)
      toast.success("Deleted successfully!");

      setIsModalOpen((prev) => !prev);
    }
    return;
  }

  //^ POP UP
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  function changeHidden():void {
    setIsHiddenModal((prev:boolean) => !prev);
  }
  return (
    <>
      <AdminLeftModal
        p="Edit Offer  "
        p1="Upload Image"
        p2="Edit your Offer information"
        btn="Update Offer"
        mod="4"
        getImgUrl={getImgUrl}
        onClickClose={changeHidden}
        hidden={isHiddenModal}
        ButtonOnClick={editOffer}
        imgRef={imgRef}
        form_descRef={form_descRef}
        form_titleRef={form_titleRef}
      />
      <tr className="h-14 text-center  border-slate-700  border-y text-gray-900 text-sm not-italic font-normal leading-5 ">
        <td>
          {/* <div>
            <p className=" border-slate-700  border rounded-lg ml-2"> */}
          {data.id}
          {/* </p>
          </div> */}
        </td>
        <td className=" flex justify-center items-center">
          {/* <div className="flex justify-center">
          /adminMarqarita.svg
            <p className=" border-slate-700  border rounded-lg px-2 "> */}

          <img
            width="60"
            height="0"
            src={data.img_url}
            alt=""
            className=" cursor-pointer"
            onClick={()=>handleButtonClick(data.id)}
          />
          {/* </p>
          </div> */}
        </td>
        <td>{data.name}</td>
        <td>{data.description} </td>

        <td className=" h-14 flex  align-middle justify-evenly">
          <img
            width="24"
            height="0"
            src="/adminOffersEditimg.svg"
            alt=""
            className=" cursor-pointer"
            onClick={()=>handleEditClick(data.id)}
          />
          <img
            width="24"
            height="0"
            src="/adminMarqaritaDeleteButton.svg"
            alt=""
            className=" cursor-pointer"
            onClick={()=>handleButtonClick(data.id)}
          />
        </td>
      </tr>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="flex justify-between items-center">
          <p className="mx-auto text-3xl font-medium">{t("modalDesc")}</p>
          <Button
            className="text-mainRed text-lg"
            innerText="&#10006;"
            onClick={handleModalClose}
          />
        </div>

        <p className=" text-grayText1 w-2/3 mx-auto text-center my-5">
          {t("modalDesc2")}
        </p>

        <div className="mx-auto flex items-center justify-center gap-9">
          <Button
            className=" border-grayText1 text-grayText1 py-1 px-8 rounded-md border-2 shadow-md hover:scale-95 transition-all duration-500"
            innerText={t("modalDesc3")}
            onClick={handleModalClose}
          />
          <Button
            className="bg-mainRed border-2 text-white py-1 px-8 rounded-md border-mainRed shadow-md hover:scale-95 transition-all duration-500"
            innerText={t("modalDesc4")}
            onClick={removeOffer}
          />
        </div>
      </Modal>
      {/* MODAL CONTENT FOR SHOW */}
    </>
  );
};

export default AdminOffersTableT;

