import Image from 'next/image';
import React from 'react';
import {Navigation} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Button from "../components/UI/Button";

import Number1 from "../public/1.png";
import Number2 from "../public/2.png";
import Number3 from "../public/3.png";
import Number4 from "../public/4.png";
import Number5 from "../public/5.png";

import RightArrow from "../public/right.svg";
import LeftArrow from "../public/left.svg";
import Couple from "../public/cinema-day-young-couple-with-popcorn-watching-interesting-movie-their-date-cinema1.webp";


function HowItWorks() {
  return (

    <section className="px-5 md:px-0 md:max-w-[85%] mx-auto w-full flex flex-col mb-[82px]">

      <h2 className="text-center text-primary text-2xl leading-7 md:text-[32px] md:leading-9 tracking-[.145em] uppercase font-black mb-10 md:mb-16">How It Works</h2>

      <div className="flex flex-col lg:grid lg:grid-cols-[46.4%_53.6%] relative">
        
        <div className="w-full  rounded-[12px]"> 

          <Image
            src={Couple}
            alt={"cinema-day-young-couple-with-popcorn-watching-interesting-movie-their-date-cinema1.webp"}
            width={568}
            height={538}
            layout="responsive" 
            quality={100}
            className="rounded-[10px] object-cover"
          />

        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".swiper-prev-hiw",
            nextEl: ".swiper-next-hiw"
          }}
          className="!-mt-[55px] md:!-mt-20 bg-white backdrop-blur-[8px] bg-opacity-80 lg:backdrop-blur-[24px] !w-[calc(100%-20px)] lg:mx-0 lg:!w-[calc(100%+64px)] lg:-mt-0 mx-auto lg:!ml-[-64px] !z-20 rounded-[12px] max-h-max lg:!my-auto shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)]"
        >

          <SwiperSlide className="!max-w-[100%] flex flex-col rounded-[12px]">

            <div className="z-20 lg:max-w-[709px] max-h-max lg:!my-auto flex flex-col  pl-[21px] pr-[13px] lg:pl-[30px] lg:pr-[25px] pt-12 md:pt-10 pb-7 ">

              <div className="space-y-[44px] flex flex-col mb-[117px] lg:mb-[69px]">

                <div className="flex flex-start space-x-[18px]">

                  <div className="w-[23px] md:w-[46px]">

                    <Image
                      src={Number1}
                      alt="number1.png"
                      layout="responsive"
                    />
                    
                  </div>

                  <p className="w-full font-semibold md:font-normal text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                    A captive audience of theatregoers will be presented with a 30 second ad immediately prior to the start of the movie and post movie credits.
                  </p>
                  
                </div>

                <div className="flex flex-start space-x-[18px]">

                  <div className="w-[23px] md:w-[46px]">

                    <Image
                      src={Number2}
                      alt="number2.png"
                      layout="responsive"
                    />

                  </div>

                  <p className="w-full font-semibold md:font-normal text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                    Our 30 second dynamic Ad features the specific frame used in the movie, along with details on the Bullet Train collection.  The Ad is accompanied by a QR code that, when scanned, directs audience members to our dedicated Bullet Train + Police Eyewear landing page. 
                  </p>
                  
                </div>

                <div className="flex flex-start space-x-[18px]">

                  <div className="w-[23px] md:w-[46px]">

                    <Image
                      src={Number3}
                      alt="number3.png"
                      layout="responsive"
                    />

                  </div>

                  <p className="w-full font-semibold md:font-normal text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                    Landing page includes details on the frame, styles and Police eyewear background, and a call to action to purchase the frames in-store.
                  </p>
                  
                </div>

              </div>

            </div>
          </SwiperSlide>

            <SwiperSlide className="!max-w-[100%] flex flex-col rounded-[12px]">

            <div className="z-20 lg:max-w-[709px] max-h-max lg:!my-auto flex flex-col  pl-[21px] pr-[13px] lg:pl-[30px] lg:pr-[25px] pt-10 pb-7 ">

              <div className="space-y-[44px] flex flex-col mb-[117px] lg:mb-[69px]">

                <div className="flex flex-start space-x-[18px]">

                  <div className="w-[23px] md:w-[46px]">

                    <Image
                      src={Number4}
                      alt="number4.png"
                      layout="responsive"
                    />
                    
                  </div>

                  <p className="w-full font-semibold md:font-normal text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                    Authorized retailers will be prominently featuredon geo-location map based on theatre location, directing prospective customers to your doorstep in all local markets.
                  </p>
                  
                </div>

                <div className="flex flex-start space-x-[18px]">

                  <div className="w-[23px] md:w-[46px]">

                    <Image
                      src={Number5}
                      alt="number5.png"
                      layout="responsive"
                    />

                  </div>

                  <p className="w-full font-semibold md:font-normal text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                    Additionally, Cineplex will lead a direct mail campaign post-show to its Scene membership subscribers and all movie ticket holders.
                  </p>
                  
                </div>

                <a href="https://ereditaeyewear.com/products/police-x-bullet-train" className="block max-w-full">
                  <Button
                    text="Apply To Participate"
                    color={"primary"}
                    size="large"
                    type="button"
                    className="!text-sm 2xs:!text-[19px] md:!text-[17.2px] !w-full"
                  />
                </a>

              </div>

            </div>
          </SwiperSlide>


        </Swiper>

        <div className="flex absolute px-8 lg:px-0 bottom-[40px] lg:bottom-[26px] 1.7xl:bottom-[55px] lg:right-[32px] z-40 w-full items-center justify-between lg:justify-end space-x-[30px]">

          <div className="bg-white swiper-prev-hiw cursor-pointer pl-[12.5px] pr-[6.5px] py-[12px] lg:py-2 lg:pl-[9px] lg:pr-[4.5px] shadow-[0px_0px_35px_-1.42857px_rgba(0,_0,_0,_0.19)]">
            <LeftArrow/>
          </div>

          <div className="bg-white swiper-next-hiw cursor-pointer pl-[8.5px] pr-[10.5px] py-[12px] lg:py-2 lg:pl-[9px] lg:pr-[4.5px] shadow-[0px_0px_35px_-1.42857px_rgba(0,_0,_0,_0.19)]">
            <RightArrow/>
          </div>

        </div>

      </div>




    </section>

  )
}

export default HowItWorks