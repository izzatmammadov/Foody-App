import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';


 const OrdersChart = () => {
  return (
    <div className=' pt-4 pl-6 bg-darkBlue_3 max-h-[472px] rounded-xl max-w-[472px] pb-16 '>
      <p className=' text-grayText font-medium text-xl'>Orders</p>
      <PieChart
        
    series={[
      {
        data: [
          {  value: 20, label: 'KFC' },
          {  value: 15, label: 'McDonalds' },
          { value: 30, label: 'Burger King' },
          {  value: 10, label: "Domino's" },
        ],
        innerRadius: 65,
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
      },
    ]}
    width={400}
    height={200}
  /></div>
  )
}
export default OrdersChart