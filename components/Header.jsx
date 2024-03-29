import React from 'react'
import Bar from "../public/_.svg";
import Eredita from "../public/eredita.svg";
import Cineplex from "../public/cineplex.svg";
import LogoMobile from "../public/logo_header_mobile.svg";
import {AppContext} from "../helpers/Context";
import { useContext, useEffect } from 'react';

function Header(){

  const [contentPage, setContentPage] = useContext(AppContext);

  function handleChangeLanguage(language){
    const newObject = {...contentPage};
    newObject.language = language;
    setContentPage(newObject);
  }

  function handleScroll(){

    if(typeof window !== 'undefined'){

      const buynow_button = document.querySelector("#buynow_button");

      window.scrollTo({
        top: (buynow_button.offsetTop-(window.innerHeight/2)),
        behavior: "smooth"
      });  

    }

  }
  
  return (

    <header className="w-full md:sticky top-0 relative z-[99] flex items-center pt-[30px] md2:pt-[25px] pb-7 justify-between pl-5 md2:pl-[100px] pr-[160px] bg-primary">

      <div className="hidden md2:flex items-center space-x-5">
        <Eredita/>
        <Bar/>
        <Cineplex/>
      </div>

      <div className="flex md2:hidden items-center space-x-5">
        <LogoMobile/>
      </div>

      <div className="hidden items-center md2:flex" onClick={e => { e.preventDefault(); handleScroll() } }>

        <a href="https://ereditaeyewear.com/cart/41841573396640:1" className="bg-secondary block uppercase text-primary py-[13.5px] px-4 text-[17px] tracking-[0.145em] font-bold text-center">
          <p className="min-w-[192px] mx-auto">
          {contentPage?.texts?.[contentPage?.language]?.button_header}
          </p>        
        </a>

      </div>

      <div className="absolute top-[15px] right-[21px]">
        <p className="text-white text-xs leading-[14px] tracking-[0.145em] uppercase font-normal space-x-1.5 md:space-x-1">

          <span onClick={() => handleChangeLanguage("english")} className={`cursor-pointer ${contentPage?.language == "english" ? 'font-black' : 'font-normal'  } `}>
            EN
          </span> 

          <span>/</span>

          <span onClick={() => handleChangeLanguage("french")} className={`cursor-pointer ${contentPage?.language == "french" ? 'font-black' : 'font-normal'  } `}>
            FR
          </span>          

        </p>
      </div>

    </header>

  )
}

export default Header