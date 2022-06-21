import React, {useState} from 'react'
import Image from "next/image"
import {Navigation} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import Opt1 from "../public/opt1_front.png";
import Opt1Main from "../public/opt1_main.png";

import Opt2 from "../public/opt2_front.png";
import Opt2Main from "../public/opt2_main.png";

import Opt3 from "../public/opt3_front.png";
import Opt3Main from "../public/opt3_main.png";

import Opt4 from "../public/opt4_front.png";
import Opt4Main from "../public/opt4_main.png";

import Opt5 from "../public/opt5_front.png";
import Opt5Main from "../public/opt5_main.png";

import Opt6 from "../public/opt6_front.png";
import Opt6Main from "../public/opt6_main.png";

import Opt7 from "../public/opt7_front.png";
import Opt7Main from "../public/opt7_main.png";

import Opt8 from "../public/opt8_front.png";
import Opt8Main from "../public/opt8_main.png";

import Opt9 from "../public/opt9_front.png";
import Opt9Main from "../public/opt9_main.png";

import Opt10 from "../public/opt10_front.png";
import Opt10Main from "../public/opt10_main.png";

import Opt11 from "../public/opt11_front.png";
import Opt11Main from "../public/opt11_main.png";


import RightArrow from "../public/right.svg";
import LeftArrow from "../public/left.svg";

const products = [ 

  {
    url: Opt1,
    title:"VPLB31",
    price: 700.00,
    desktop_image: Opt1Main ,
    mobile_image: Opt1Main 
  },

  {
    url: Opt2,
    title:"VPLA49",
    price: 700.00,
    desktop_image: Opt2Main ,
    mobile_image: Opt2Main 
  },

  {
    url: Opt3,
    title:"VPLA36-1",
    price: 700.00,
    desktop_image: Opt3Main ,
    mobile_image: Opt3Main 
  },

  {
    url: Opt4,
    title:"VPLA-42",
    price: 700.00,
    desktop_image: Opt4Main ,
    mobile_image: Opt4Main 
  },

  {
    url: Opt5,
    title:"VPLA49",
    price: 700.00,
    desktop_image: Opt5Main ,
    mobile_image: Opt5Main 
  },

  {
    url: Opt6,
    title:"VPLB31",
    price: 700.00,
    desktop_image: Opt6Main ,
    mobile_image: Opt6Main 
  },

  {
    url: Opt7,
    title:"VPLB56",
    price: 700.00,
    desktop_image: Opt7Main ,
    mobile_image: Opt7Main 
  },

  {
    url: Opt8,
    title:"VPLC52",
    price: 700.00,
    desktop_image: Opt8Main ,
    mobile_image: Opt8Main 
  },

  {
    url: Opt9,
    title:"VPLD06",
    price: 700.00,
    desktop_image: Opt9Main ,
    mobile_image: Opt9Main 
  },

  {
    url: Opt10,
    title:"VPLD07",
    price: 700.00,
    desktop_image: Opt10Main ,
    mobile_image: Opt10Main 
  },

  {
    url: Opt11,
    title:"VPLE36",
    price: 700.00,
    desktop_image: Opt11Main ,
    mobile_image: Opt11Main 
  },
  

]


function Opthalmic() {
  

  const [activeProduct, setActiveProduct] = useState(products[0]);

  function handleClickProduct(index){
    setActiveProduct(products[index]);
  }


  return (

    <section className="px-5 select-none md:px-0 md:max-w-[85%] mx-auto lg:pr-8 w-full flex flex-col mb-[70px] mt-[54px]">

      <h2 className="uppercase text-left text-2xl font-starduster italic leading-[23px] tracking-[.145em] text-primary mb-[35px]">
        ophthalmic
      </h2>

      <div className="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-[60px] relative">

        <div className="w-full h-[calc(100vw)] md:h-auto block relative border border-black">

          <div className="block lg:hidden">
            <Image
              src={activeProduct.mobile_image}
              layout="fill"
              className="object-center oject-cover"
              alt="portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion.webp"
            />
          </div>

          <div className="hidden lg:block max-w-[calc(77%)] h-full relative">
            <Image
              src={activeProduct.desktop_image}
              layout="fill"
              className="object-center oject-cover"
              alt="portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion.webp"
            />
          </div>

          <div className="
          bg-white lg:px-5  md:py-0 space-x-10  justify-center lg:rounded-[10px] bottom-0 inset-x-0
            md:justify-center md:bottom-0 absolute md:max-w-full lg:max-w-[35.4%]
            md:max-h-[129px] lg:h-full lg:max-h-[230px] overflow-y-hidden h-max w-full flex md:space-x-2.5 overflow-hidden
            lg:flex-col lg:items-center lg:py-0 lg:shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)]
            lg:top-[20%] lg:right-6 lg:left-auto
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
              <p className="leading-12 text-center capitalize">{activeProduct.title}</p>        
              <p className="font-bold">{`$${Number(activeProduct.price).toFixed(2)}`}</p>        
            </div>


          </div>

        </div>

        <div className="w-full h-full">
          
          <Swiper
            modules={[Navigation]}
            allowTouchMove={false}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".swiper-prev-2",
              nextEl: ".swiper-next-2"
            }}
            // onSwiper={(swiper) => {
            //   console.log(swiper);
            // }}
            className="block lg:grid w-full h-full"
          >

            <SwiperSlide className="w-full flex flex-col h-full">

              <div className="grid grid-cols-3 gap-x-[26px] select-none gap-y-10 w-full h-full">

                { products.map( (product,index) => {
                  if(index > 5) return;
                  return (
                    
                    <div key={index} onClick={() => handleClickProduct(index) } className="h-full cursor-pointer w-full bg-white border rounded-[10px] shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)] relative">

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

            <SwiperSlide className="w-full flex flex-col h-full">

              <div className="grid grid-cols-3 gap-x-5 select-none gap-y-10 w-full h-full">

                { products.map( (product,index) => {
                  
                  if(index <= 5) return;
                  return (
                    
                    <div key={index} onClick={() => handleClickProduct(index) } className="h-full cursor-pointer w-full bg-white border rounded-[10px] shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)] relative">

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

          <div className="bg-white swiper-prev-2 cursor-pointer py-2 pl-[9px] pr-[4.5px] shadow-[0px_0px_35px_-1.42857px_rgba(0,_0,_0,_0.19)]">
            <LeftArrow/>
          </div>

          <div className="bg-white swiper-next-2 cursor-pointer py-2 pl-[6px] pr-[7.6px] shadow-[0px_0px_35px_-1.42857px_rgba(0,_0,_0,_0.19)]">
            <RightArrow/>
          </div>

        </div>

      </div>

    </section>
    
  )
}

export default Opthalmic