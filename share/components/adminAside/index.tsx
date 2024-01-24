import Image from 'next/image'
import React from 'react'
import { AdminAsideItem } from '../adminAsideItem'
import { useTranslation } from 'react-i18next';

export const AdminAside = () => {
  const { t, i18n } = useTranslation();
  return (
      <div className=' bg-lightPurple_2 w-[256px] h-[474px]  flex flex-col gap-2 pt-6 pl-6 pr-4 rounded-[14px]'>
          <AdminAsideItem innerText={t("adminLeftBarComponent")} img='/dashboard-icon.svg' active={ true} />
          <AdminAsideItem innerText={t("adminLeftBarComponent2")} img='/product-icon.svg' active={false} />
          <AdminAsideItem innerText={t("adminLeftBarComponent3")} img='/restaurant-icon.svg' active={false} />
          <AdminAsideItem innerText={t("adminLeftBarComponent4")} img='/category-icon.svg' active={false} />
          <AdminAsideItem innerText={t("adminLeftBarComponent5")} img='/orders-icon.svg' active={false} />
          <AdminAsideItem innerText={t("adminLeftBarComponent6")} img='/offer-icon.svg' active={ false} />
          <AdminAsideItem innerText={t("adminLeftBarComponent7")} img='/logout-icon.svg' active={ false} />
       
    </div>
  )
}
