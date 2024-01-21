import React from 'react'
interface Props{
 
    p?: string,
    className?: string
}
export const AdminModalTexArea = ({p="Description",className=" mb-3"}:Props) => {
    return (
        <div className={className}>
            <p className=' text-grayText font-medium  mb-2   text-base'>Description</p>
            <textarea className=' w-full  rounded-2xl h-24 bg-darkBlue_4 capitalize'></textarea>   
      </div>
  )
}
