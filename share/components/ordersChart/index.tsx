import React from 'react'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


 const OrdersChart = () => {
  return (
    <div className=' pt-4 pl-6   bg-darkBlue_3  h-80  rounded-xl max-w-[472px]  pb-8 '>
      <div >
      <p className=' text-grayText font-medium text-xl'>Orders</p>
      <PieChart
    
    series={[
      {
        
        data: [
          {  value: 20,  color:"red" },
          {  value: 15,  },
          { value: 30, },
          {  value: 10,  },
        ],
        innerRadius: 65,
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
      },
    ]}
    width={400}
    height={200}
      />
    
      <div className=' flex text-grayText gap-2 mt-2'>
        <div className=' flex  gap-1 items-center '>
          <div className=' h-3 w-3 rounded-full bg-mainRed '> </div> <p> KFC</p>
        </div>
        <div className=' flex  gap-1 items-center '>
          <div className=' h-3 w-3 rounded-full  bg-[#2E96FF] '> </div>  <p>Dominoe's</p>
        </div>
        <div className=' flex  gap-1 items-center '>
          <div className=' h-3 w-3 rounded-full bg-[#B800D8]'> </div> <p>Mc Donalds</p>
        </div>
        <div className=' flex  gap-1 items-center '>
          <div className=' h-3 w-3 rounded-full bg-[#60009B] '> </div>  <p>Burger King</p>
          </div>
      
       
       
        </div>
        </div>
    </div>
  )
}
export default OrdersChart