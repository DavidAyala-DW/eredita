import React from 'react'

function Button({color,text,size,type,className}) {

  const sizeClassName = {
    small : "py-2.5 px-3 leading-4 text-[13px]",
    large : "py-[13.5px] px-4 leading-[21px] text-[17.2px] min-w-[220px] sm:min-w-[363px]"
  };

  const mode= {
    white: "border-white  text-white",
    primary: "text-primary bg-[#FFCB05] border-[#FFCB05]"
  }
  
  return (
    <button type={type} className={`${className} cursor-pointer hover:bg-[#f4c002] border w-max ${sizeClassName[size]} ${mode[color]} uppercase tracking-[.145em] font-bold text-center`}>
      {text}
    </button>
  )

}

export default Button