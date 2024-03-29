import React from "react";
import { AdminAsideItem } from "../adminAsideItem";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

export const AdminAside = () => {
  const { t, i18n } = useTranslation();
  // React.ChangeEvent<HTMLSelectElement>

  const { push } = useRouter();
  function changePage(value: string): void {
    push(`/admin/${value}`);
  }
  function logout() {
    localStorage.removeItem("tokenObj");
    localStorage.removeItem("userInfo");
    toast.success("Logged out successfully!")
    setTimeout(() => {
    push("/admin/login");
    },750)

  }

  return (
    <div className=" bg-lightPurple_2 w-full sm:w-[256px] h-[474px] flex flex-col gap-2 pt-6 pl-2 sm:pl-6 pr-4 rounded-[14px]">
      <ToastContainer/>
      <AdminAsideItem
        value={"dashboard"}
        innerText={t("adminLeftBarComponent")}
        img="/dashboard-icon.svg"
        onClick={changePage}
      />
      <AdminAsideItem
        value={"products"}
        innerText={t("adminLeftBarComponent2")}
        img="/product-icon.svg"
        onClick={changePage}
      />
      <AdminAsideItem
        value={"restaurants"}
        innerText={t("adminLeftBarComponent3")}
        img="/restaurant-icon.svg"
        onClick={changePage}
      />
      <AdminAsideItem
        value={"category"}
        innerText={t("adminLeftBarComponent4")}
        img="/category-icon.svg"
        onClick={changePage}
      />
      <AdminAsideItem
        value={"orders"}
        innerText={t("adminLeftBarComponent5")}
        img="/orders-icon.svg"
        onClick={changePage}
      />
      <AdminAsideItem
        value={"history"}
        innerText={t("adminLeftBarComponent8")}
        img="/offer-icon.svg"
        onClick={changePage}
      />
      <AdminAsideItem
        value={"offers"}
        innerText={t("adminLeftBarComponent6")}
        img="/offer-icon.svg"
        onClick={changePage}
      />
      <AdminAsideItem
        value={"logout"}
        innerText={t("adminLeftBarComponent7")}
        img="/logout-icon.svg"
onClick={logout}
      />
    </div>
  );
};
