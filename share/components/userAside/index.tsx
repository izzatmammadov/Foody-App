import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const UserAside = () => {
  const { t, i18n } = useTranslation();
  const navigate = useRouter()
  const isCurrentRoute = (path:string|number) => navigate.pathname === path;
  
  return (
    <div className="rounded-md flex flex-col max-h-screen overflow-y-auto gap-8 bg-whiteLight1 w-1/6 p-4">
      <div className={`flex items-center gap-4 cursor-pointer group transition-all p-2 ${isCurrentRoute("/userProfile") ? "bg-mainRedLight" : ""}`}>
        <Image width={25} height={0} src={"profile.svg"} alt="profileIcon" />
        <p onClick={()=>navigate.push("/userProfile")} className="font-semibold text-grayText2 text-lg group-hover:text-mainRed">{t("userDesc")}</p>
      </div>

      <div className={`flex items-center gap-4 cursor-pointer group transition-all p-2 ${isCurrentRoute("/userBasket") ? "bg-mainRedLight" : ""}`}>
        <Image width={25} height={0} src={"basketIcon.svg"} alt="basketIcon" />
        <p onClick={()=>navigate.push("/userBasket")} className="font-semibold text-grayText2 text-lg group-hover:text-mainRed ">
          {t("userDesc2")}
        </p>
      </div>

      <div className={`flex items-center gap-4 cursor-pointer group transition-all p-2 ${isCurrentRoute("/userOrder") ? "bg-mainRedLight" : ""}`}>
        <Image width={25} height={0} src={"orders-icon.svg"} alt="orderIcon" />
        <p onClick={()=>navigate.push("/userOrder")} className="font-semibold text-grayText2 text-lg group-hover:text-mainRed ">
          {t("userDesc3")}
        </p>
      </div>

      <div className={`flex items-center gap-4 cursor-pointer group transition-all p-2 ${isCurrentRoute("/userCheckout") ? "bg-mainRedLight" : ""}`}>
        <Image width={22} height={0} src={"checkoutIcon.svg"} alt="checkoutIcon" />
        <p className="font-semibold text-grayText2 text-lg group-hover:text-mainRed">
          {t("userDesc4")}
        </p>
      </div>

      <div className="flex items-center gap-4 cursor-pointer group hover:bg-mainRedLight transition-all p-2" onClick={()=>navigate.push("/login")}>
        <Image width={25} height={0} src={"logout.svg"} alt="logoutIcon" />
        <p  className="font-semibold text-grayText2 text-lg group-hover:text-mainRed">
          {t("userDesc5")}
        </p>
      </div>
    </div>
  );
};
