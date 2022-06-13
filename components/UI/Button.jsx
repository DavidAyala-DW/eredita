import React from 'react'

function Button({color,text,size,type,className}) {

  const sizeClassName = {
    small : "py-2.5 px-3 leading-4 text-[13px]",
    large : "py-[13.5px] px-4 leading-[21px] text-[17.2px]"
  };

  const mode= {
    white: "border-white  text-white",
    primary: "border-primary  text-primary"
  }
  
  return (
    <button type={type} className={` ${className} border w-max ${sizeClassName[size]} ${mode[color]} uppercase tracking-[.145em] font-bold text-center`}>
      {text}
    </button>
  )

}

export default Button