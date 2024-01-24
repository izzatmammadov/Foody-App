import React from 'react'
interface Props{
    type?: string,
    p?: string,
    className?: string
}
export const AdminModalInput = ({ type = "text", p = "Name ", className = " mb-6" }: Props) => {
    return (
        <div className={ ` flex flex-col gap-2  ${className}`}>
          <p className=' text-grayText font-medium text-base'>{ p}</p>
          <input className='   bg-darkBlue_4 rounded-2xl font-medium text-base  text-whiteLight pl-5 py-3  capitalize ' type={type} />
      </div>
  )
}
