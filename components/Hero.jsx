import React from 'react'
import Image from "next/image";
import HeroArrow from "../public/hero_arrow.svg";
import Button from './UI/Button';
import HeroBanner from "../public/ezgif.com-gif-maker.jpg"
import HeroMain from "../public/ezgif.com-gif-maker_1_1.png";

function Hero() {

  function handleScrollDown(){
    document.querySelector('#banner').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  return (

    <div className="w-full relative h-max">

      <div className="absolute inset-0 w-full h-full z-[-1]">        

        <Image
          src={HeroBanner}
          alt="alt"
          layout='fill'
          priority={true}
          className="object-cover object-[68%] lg:object-center"
        />

      </div>

      <div className="absolute inset-0 w-full h-full bg-hero z-0"></div>

      <div className="flex flex-col pt-[110px] pb-[53px] lg:py-0">

        <div className="flex flex-col h-full w-[95%] md:w-[62.5%] lg:max-w-[680px] 3xl:max-w-[900px] mx-auto z-20 lg:pb-10">

          <div className="block lg:mt-10">
            <Image
              src={HeroMain}
              alt="hero_main.webp"
              layout='responsive'
              priority={true}
            />
          </div>

          <div className="flex flex-col mt-10 md:mt-5">

            <h4 className="max-w-[110px] md:max-w-[220px] mb-8 md:mb-3 text-primary mx-auto text-base md:text-sm leading-[19px] md:leading-[22px] text-center font-bold uppercase tracking-[.145em]">
              Join the promotion
            </h4>

            <div onClick={() => handleScrollDown()}  className="flex animate-arrow  cursor-pointer flex-col justify-center items-center h-[70px] w-[70px]  hover:animate-hoverArrow transition delay-100 mx-auto rounded-full border-2 border-primary border-dashed">

              <div className="w-[60%] pointer-events-none">
                <HeroArrow/>
              </div>
              
            </div>  
          </div>

        </div>

      </div>    

    </div>

  )
}

export default Hero