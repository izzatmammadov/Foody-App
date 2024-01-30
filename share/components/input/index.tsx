import React from 'react'
interface Props {
    Type?: string
    Placeholder?: string 
    OnClick?: any
    onChange?: any
    ClassName?: string
    disabled?: boolean
    Capitalize?:boolean
}
export const Input = ({Type="text",Placeholder,onChange,OnClick,ClassName,disabled=false , Capitalize=true}:Props) => {
  return (
    <><input className={`${Capitalize?"capitalize":" "}  ${ClassName}`} disabled={disabled} onClick={OnClick} onChange={onChange} type={Type} placeholder={Placeholder} /></>
  )
}
