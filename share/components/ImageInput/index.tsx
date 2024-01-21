import Image from 'next/image'
import React from 'react'

export const ImageInput = () => {
  return (
      <div className=' bg-darkBlue_5 h-full  flex rounded-2xl items-center justify-center cursor-pointer '>
          <div className=' flex-col  relative'>
              <input type="file" accept="image/*"   className=' absolute  opacity-0 w-full h-full cursor-pointer'/>
              <Image alt='upload-image' width={60} height={60} src="/upload-image.svg" />
              <p className=' text-grayText  font-medium text-lg '>Upload</p>
          </div>
      </div>
  )
}
