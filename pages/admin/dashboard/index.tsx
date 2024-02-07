import { AdminAside } from '@/share/components/adminAside'
import OrdersChart from '@/share/components/ordersChart'
import LineChart  from '../../../share/components/LineChart'
import React from 'react'
import { Navbar } from '@/share/components/Navbar'

const DashboardPage = () => {
  return (
      <div className=' bg-textBlack min-h-screen px-4'>
          <Navbar adminNavbar={true}/>
          <div className='flex'>
              <div className=' hidden xl:block'>
          <AdminAside /></div>
          <main className=' w-full flex flex-col  mmd:flex-row xl:ml-4  justify-between lg:justify-around'>
              <OrdersChart />
              <LineChart/>
          </main>
          </div>
   
    </div>
  )
}

export default DashboardPage