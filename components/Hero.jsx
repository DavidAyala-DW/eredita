import React from 'react'
import Image from "next/image";
import HeroArrow from "../public/hero_arrow.svg";
import Button from './UI/Button';
import HeroBanner from "../public/hero_banner.webp"
import HeroMain from "../public/Eredità-Cineplex_Hero-Header.webp";

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
          quality={80}
          className="object-cover object-[68%] lg:object-center"
        />

      </div>

      <div className="absolute inset-0 w-full h-full bg-hero z-0"></div>

      <div className="flex flex-col pt-[210px] pb-[53px] lg:py-0">

        <div className="flex flex-col h-full w-[95%] md:w-[62.5%] lg:max-w-[600px] 3xl:max-w-[900px] mx-auto z-20 lg:pb-10">

          <div className="block lg:mt-20">
            <Image
              src={HeroMain}
              alt="hero_main.webp"
              layout='responsive'
              priority={true}
              quality={100}
            />
          </div>

          <div className="flex flex-col">

            {/* <a
              className="w-max mb-4 md:mb-[25px] mx-auto "
              href=""
            >
              <Button
                color={"primary"}
                text={"Apply To Participate"}
                size={"small"}
                type={"button"}
              />
            </a> */}

            <h4 className="max-w-[220px] mb-2 md:mb-3 text-primary mx-auto text-lg leading-[22px] text-center font-bold uppercase tracking-[.145em]">
              Join the promotion
            </h4>

            <div onClick={() => handleScrollDown()}  className="flex cursor-pointer flex-col justify-center items-center h-[90px] w-[90px] mx-auto rounded-full border-2 border-primary border-dashed">
              <HeroArrow/>
            </div>  
          </div>

        </div>

      </div>    

    </div>

  )
}

export default Hero