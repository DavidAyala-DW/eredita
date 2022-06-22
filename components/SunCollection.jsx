import React, {useState} from 'react'
import Image from "next/image"
import {Navigation} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Sun1 from "../public/spl995-0301_t.jpg";
import Sun1Main from "../public/spl995-0301.jpg";

import Sun2 from "../public/SPL872V_20560700_01_1000x_t.jpg";
import Sun2Main from "../public/SPL872V_20560700_02_1000x.jpg";

import Sun3 from "../public/splb28-0568.jpg";
import Sun3Main from "../public/SPLB28_2056320F_03_1000x.jpg";

import Sun4 from "../public/141101134100_pp_1_MERCEDES_copy.jpg";
import Sun4Main from "../public/141101134100_pp_2_MERCEDEScopy.jpg";

import Sun5 from "../public/SPLB40N_20560722_01_1000x.jpg";
import Sun5Main from "../public/SPLB40N_20560722_03_1000x.jpg";

import Sun6 from "../public/SPLE06_2056700F_01_1000x.jpg";
import Sun6Main from "../public/SPLE06_2056700F_03_1000x.jpg";

import Sun7 from "../public/SPLE37_2056700P_01_1000x.jpg";
import Sun7Main from "../public/SPLE37_2056700P_03_1000x.jpg";

import Sun8 from "../public/VPL958_20560531_01_1000x.jpg";
import Sun8Main from "../public/Cineplex-Product_Full_Size_0009s_0000_VPL958_20560531_03_1000x.jpg";

import Sun9 from "../public/sun9_front.png";
import Sun9Main from "../public/sun9_main.png";

import Sun10 from "../public/sun10_front.png";
import Sun10Main from "../public/sun10_main.png";

import RightArrow from "../public/right.svg";
import LeftArrow from "../public/left.svg";

const products = [ 

  {
    url: Sun5,
    title:"SPLB40N",
    price: 740.00,
    desktop_image: Sun5Main,
    mobile_image: Sun5Main,
    type: "people"
  },
  {
    url: Sun6,
    title:"SPLE06",
    price: 750.00,
    desktop_image: Sun6Main,
    mobile_image: Sun6Main,
    type: "people"
  },
  {
    url: Sun7,
    title:"SPLE37",
    price: 750.00,
    desktop_image: Sun7Main,
    mobile_image: Sun7Main,
    type: "people"
  },
  {
    url: Sun8,
    title:"VPL598",
    price: 740.00,
    desktop_image: Sun8Main,
    mobile_image: Sun8Main,
    type: "people"
  },
  {
    url: Sun3,
    title:"SPLB28",
    price: 720.00,
    desktop_image: Sun3Main,
    mobile_image: Sun3Main,
    type: "people"
  },
  {
    url: Sun1,
    title:"spl995",
    price: 700.00,
    desktop_image: Sun1Main,
    mobile_image: Sun1Main,
    type: "glass"
  },
  {
    url: Sun2,
    title:"SPLA72",
    price: 710.00,
    desktop_image: Sun2Main,
    mobile_image: Sun2Main,
    type: "glass"
  },
  {
    url: Sun4,
    title:"SPLB32",
    price: 730.00,
    desktop_image: Sun4Main,
    mobile_image: Sun4Main,
    type: "glass"
  },

]


function SunCollection() {
  

  const [activeProduct, setActiveProduct] = useState(products[0]);

  function handleClickProduct(index){
    setActiveProduct(products[index]);
  }


  return (

    <section className="px-5 select-none md:px-0 md:max-w-[85%] mx-auto lg:pr-8 w-full flex flex-col mb-[70px] mt-[54px]">

      <h2 className="uppercase text-left text-2xl font-starduster italic leading-[23px] tracking-[.145em] text-primary mb-[35px]">
        sun
      </h2>

      <div className="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-[60px] relative">

        <div className="w-full h-[calc(100vw)] md:h-auto block relative border border-black">

          <div className="block lg:hidden max-h-full">
            <Image
              src={activeProduct.mobile_image}
              quality={100}
              layout="fill"
              className="object-center object-contain"
              alt="portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion.webp"
            />
          </div>

          <div className="hidden lg:block max-w-[calc(100%)] h-full relative">
            <Image
              src={activeProduct.desktop_image}
              quality={100}
              layout="fill"
              className="object-center object-cover"
              alt="portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion.webp"
            />
          </div>

          <div className="
          bg-white lg:px-5  md:py-0 space-x-10  justify-center lg:rounded-[10px] bottom-0 inset-x-0
            md:justify-center md:bottom-0 absolute md:max-w-full lg:max-w-[35.4%]
            md:max-h-[129px] lg:h-full lg:max-h-[230px] overflow-y-hidden h-max w-full flex md:space-x-2.5 overflow-hidden
            lg:flex-col lg:items-center lg:py-0 lg:shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)]
            lg:top-[20%] lg:right-6 lg:left-auto md:!hidden
            "
          >

            <div className="block relative w-full max-w-[20%] transform lg:mt-[-20px] md:max-w-[25%] lg:max-w-[151px] md:h-full">

              <Image
                src={activeProduct.url}
                alt={activeProduct.title}
                layout="responsive"
                quality={100}
              />

            </div>    

            <div className="flex flex-col justify-center items-center lg:-translate-y-11 lg:space-y-5">
              <p className="leading-12 text-center uppercase">{activeProduct.title}</p>        
            </div>


          </div>

        </div>

        <div className="w-full h-full">
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next"
            }}
            allowTouchMove={false}
            className="block lg:grid w-full h-full"
          >

            <SwiperSlide className="w-full flex flex-col h-full">

              <div className="grid grid-cols-3 gap-x-[26px] select-none gap-y-10 w-full h-full">

                { products.map( (product,index) => {
                  if(index > 5) return;
                  return (
                    
                    <div key={index} onClick={() => handleClickProduct(index) } className="h-full cursor-pointer w-full  relative flex flex-col space-y-5">

                      <div className="block px-2 bg-white border rounded-[10px] shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)] w-full">

                        <Image
                          src={product.url}
                          alt={product.url}
                          layout="responsive"
                          className="object-center object-cover"
                        />

                      </div>

                      <p className={`text-center uppercase text-sm xl:text-lg font-semibold leading-[1]  text-[rgba(0,_0,_0,_0.87)]`}>
                          {product.title}
                      </p>

                    </div>

                  )

                } )}

              </div>

            </SwiperSlide>

            <SwiperSlide className="w-full flex flex-col h-full">

              <div className="grid grid-cols-3 gap-x-5 select-none gap-y-10 w-full h-full">

                { products.map( (product,index) => {
                  
                  if(index <= 5) return;
                  return (
                    
                    <div key={index} onClick={() => handleClickProduct(index) } className="h-full cursor-pointer w-full relative flex flex-col space-y-5">

                      <div className="block px-2 bg-white border rounded-[10px] shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)] w-full">

                        <Image
                          src={product.url}
                          alt={product.url}
                          layout="responsive"
                          className="object-center object-cover"
                        />

                      </div>

                      <p className={`text-center text-sm ppercase xl:text-lg font-semibold leading-[1] text-[rgba(0,_0,_0,_0.87)]`}>
                          {product.title}
                      </p>

                    </div>

                  )

                } )}

              </div>

            </SwiperSlide>

          </Swiper>
        </div>

        <div className="flex max-w-max w-full items-center absolute -bottom-12 md:bottom-auto md:-top-12 right-0 space-x-[30px]">

          <div className="bg-white swiper-prev cursor-pointer py-2 pl-[9px] pr-[4.5px] shadow-[0px_0px_35px_-1.42857px_rgba(0,_0,_0,_0.19)]">
            <LeftArrow/>
          </div>

          <div className="bg-white swiper-next cursor-pointer py-2 pl-[6px] pr-[7.6px] shadow-[0px_0px_35px_-1.42857px_rgba(0,_0,_0,_0.19)]">
            <RightArrow/>
          </div>

        </div>

      </div>

    </section>
    
  )
}

export default SunCollection
