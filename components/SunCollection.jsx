import React, {useState} from 'react'
import Image from "next/image"
import {Navigation} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import Men from "../public/Sun-full.webp";
import MenDesktop from "../public/SUN.webp";

import Women from "../public/Optical-full.webp";
import WomenDesktop from "../public/Optical.webp"

import Sun1 from "../public/sun_1f.jpg";
import Sun1Main from "../public/sun_1m.jpg";

import Sun2 from "../public/sun_2f.jpg";
import Sun2Main from "../public/sun_2m.jpg";

import Sun3 from "../public/sun_3f.jpg";
import Sun3Main from "../public/sun_3m.jpg";

import Sun4 from "../public/sun_4f.jpg";
import Sun4Main from "../public/sun_4m.jpg";

import Sun5 from "../public/sun_5f.jpg";
import Sun5Main from "../public/sun_5m.jpg";

import Sun6 from "../public/sun_6f.jpg";
import Sun6Main from "../public/sun_6m.jpg";

import Sun7 from "../public/sun_7f.jpg";
import Sun7Main from "../public/sun_7m.jpg";

import Sun8 from "../public/sun_8f.jpg";
import Sun8Main from "../public/sun_8m.jpg";

import Sun9 from "../public/sun_9f.jpg";
import Sun9Main from "../public/sun_9m.jpg";

import Sun10 from "../public/sun_10f.jpg";
import Sun10Main from "../public/sun_10m.jpg";

import RightArrow from "../public/right.svg";
import LeftArrow from "../public/left.svg";

const products = [ 

  {
    url: Sun1,
    title:"SPL872V",
    price: 700.00,
    desktop_image: Sun1Main,
    mobile_image: Sun1Main
  },
  {
    url: Sun2,
    title:"SPL995",
    price: 710.00,
    desktop_image: Sun2Main,
    mobile_image: Sun2Main
  },
  {
    url: Sun3,
    title:"SPLE37-1",
    price: 720.00,
    desktop_image: Sun3Main,
    mobile_image: Sun3Main
  },
  {
    url: Sun4,
    title:"SPLE37-2",
    price: 730.00,
    desktop_image: Sun4Main,
    mobile_image: Sun4Main
  },
  {
    url: Sun5,
    title:"SPLE37-3",
    price: 740.00,
    desktop_image: Sun5Main,
    mobile_image: Sun5Main
  },
  {
    url: Sun6,
    title:"SPLE37-4",
    price: 750.00,
    desktop_image: Sun6Main,
    mobile_image: Sun6Main
  },
  {
    url: Sun7,
    title:"SPLB28",
    price: 750.00,
    desktop_image: Sun7Main,
    mobile_image: Sun7Main
  },
  {
    url: Sun8,
    title:"SPLB32",
    price: 740.00,
    desktop_image: Sun8Main,
    mobile_image: Sun8Main
  },
  {
    url: Sun9,
    title:"SPLB40N",
    price: 730.00,
    desktop_image: Sun9Main,
    mobile_image: Sun9Main
  },
  {
    url: Sun10,
    title:"SPLE06",
    price: 720.00,
    desktop_image: Sun10Main,
    mobile_image: Sun10Main
  }

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

        <div className="w-full h-[calc(117vw)] md:h-auto block relative border border-black">

          <div className="block md:hidden">
            <Image
              src={activeProduct.mobile_image}
              layout="responsive"
              className="object-center oject-cover"
              alt=""
            />
          </div>

          <div className="hidden md:block max-w-[calc(77%)] h-full relative">
            <Image
              src={activeProduct.desktop_image}
              layout="responsive"
              className="object-top oject-cover h-[50%]"
              alt=""
            />
          </div>

          <div className="
          bg-white lg:px-5 space-x-10  justify-center md:rounded-[10px] bottom-0 inset-x-0
            md:justify-center md:bottom-0 absolute md:max-w-[35.4%]
            md:h-full md:max-h-[195px] overflow-y-hidden h-max w-full flex md:space-x-2.5 overflow-hidden
            md:flex-col md:items-center md:py-0 md:shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)]
            md:top-[calc(5vw*0.5)] lg:top-[20%] xl:top-[27%] lg:max-h-[231px]  md:right-6 md:left-auto
            "
          >

            <div className="block relative w-full transform lg:mt-[-20px] max-w-[100px] md:max-w-[151px] md:h-full">

              <Image
                src={activeProduct.url}
                alt={activeProduct.title}
                layout="responsive"
                quality={100}
              />

            </div>    

            <div className="flex flex-col justify-center items-center lg:-translate-y-11 lg:space-y-5">
              <p className="leading-12 text-center capitalize">{activeProduct.title}</p>        
              <p className="font-bold">{`$${Number(activeProduct.price).toFixed(2)}`}</p>        
            </div>


          </div>

        </div>

        <div className="w-full h-full">
          
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={5}
            loop={true}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next"
            }}
            className="block lg:grid w-full h-full"
          >

            <SwiperSlide className="w-full flex flex-col h-full p-1">

              <div className="grid grid-cols-3 gap-x-[26px] select-none gap-y-10 w-full h-full">

                { products.map( (product,index) => {
                  if(index > 5) return;
                  return (
                    
                    <div key={index} onClick={() => handleClickProduct(index) } className="h-full cursor-pointer w-full bg-white border rounded-[10px] shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)] relative flex flex-col justify-center">

                      <div className="block px-2">
                        <Image
                          src={product.url}
                          alt={product.url}
                          layout="responsive"
                          quality={100}
                          className="object-center object-cover"
                        />
                      </div>

                    </div>

                  )

                } )}

              </div>

            </SwiperSlide>

            <SwiperSlide className="w-full flex flex-col h-full p-1">

              <div className="grid grid-cols-3 gap-x-5 select-none gap-y-10 w-full h-full">

                { products.map( (product,index) => {
                  
                  if(index <= 5) return;
                  return (
                    
                    <div key={index} onClick={() => handleClickProduct(index) } className="h-full cursor-pointer w-full bg-white border rounded-[10px] shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)] relative  flex flex-col justify-center">

                      <div className="block px-2">
                        <Image
                          src={product.url}
                          alt={product.url}
                          layout="responsive"
                          quality={100}
                          className="object-center object-cover"
                        />
                      </div>

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
