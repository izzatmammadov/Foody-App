
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Orders',
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
 
    seoul: 21,
    month: 'Jan',
  },
  {
  
    seoul: 28,
    month: 'Fev',
  },
  {
 
    seoul: 41,
    month: 'Mar',
  },
  {
 
    seoul: 73,
    month: 'Apr',
  },
  {
 
    seoul: 99,
    month: 'May',
  },
  {

    seoul: 144,
    month: 'June',
  },
  {

    seoul: 319,
    month: 'July',
  },
  {

    seoul: 249,
    month: 'Aug',
  },
  {
 
    seoul: 131,
    month: 'Sept',
  },
  {

    seoul: 55,
    month: 'Oct',
  },
  {
 
    seoul: 48,
    month: 'Nov',
  },
  {

    seoul: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value: number) => `${value}mm`;

export default function Barchart() {
    return (
        <div className='pt-4 pl-6 bg-darkBlue_3  max-h-[472px] rounded-xl max-w-[572px] pb-16 '>
             <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Orders', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
      </div>
   
  );
}
