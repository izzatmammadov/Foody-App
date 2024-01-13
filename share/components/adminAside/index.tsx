import Image from 'next/image'
import React from 'react'
import { AdminAsideItem } from '../adminAsideItem'

export const AdminAside = () => {
  return (
      <div className=' bg-lightPurple_2 w-[256px] h-[474px]  flex flex-col gap-2 pt-6 pl-6 pr-4 rounded-[14px]'>
          <AdminAsideItem innerText='Dashboard' img='/dashboard-icon.svg' active={ true} />
          <AdminAsideItem innerText='Products' img='/product-icon.svg' active={false} />
          <AdminAsideItem innerText='Restaurants' img='/restaurant-icon.svg' active={false} />
          <AdminAsideItem innerText='Category' img='/category-icon.svg' active={false} />
          <AdminAsideItem innerText='Orders' img='/orders-icon.svg' active={false} />
          <AdminAsideItem innerText='Offer' img='/offer-icon.svg' active={ false} />
          <AdminAsideItem innerText='Logout' img='/logout-icon.svg' active={ false} />
       
    </div>
  )
}
