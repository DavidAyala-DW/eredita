import Image from "next/image";
import {AppContext} from "../helpers/Context";
import { useEffect, useState,useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { Navigation, FreeMode, Autoplay } from "swiper";

import YaleaBanner from "../public/yalea_banner.png";
import YaleaLogo from "../public/yalea_logo.svg";

import PoliceBanner from "../public/police_banner.png";
import PoliceLogo from "../public/police_logo.svg";

import JohnBanner from "../public/john_banner.png";
import JohnLogo from "../public/john_logo.svg";

import LuckyBanner from "../public/lucky_banner.png";
import LuckyLogo from "../public/lucky_logo.svg";

import PhilippBanner from "../public/philipp_banner.png";
import PhilippLogo from "../public/philipp_logo.svg";

import ChopardBanner from "../public/chopard_banner.png";
import ChopardLogo from "../public/chopard_logo.svg";

import LeftArrow from "../public/left_arrow.svg";
import RightArrow from "../public/right_arrow.svg";

const slidesArray = [

  {
    handle: "handle1",
    banner: YaleaBanner,
    Logo: YaleaLogo,
    href: "https://ereditaeyewear.com/collections/yalea",
    maxW: 174
  },
  {
    handle: "handle2",
    banner: PoliceBanner,
    Logo: PoliceLogo,
    href: "https://ereditaeyewear.com/collections/police",
    maxW: 170
  },
  {
    handle: "handle3",
    banner: JohnBanner,
    Logo: JohnLogo,
    href: "https://ereditaeyewear.com/collections/john-varvatos",
    maxW: 236
  },
  {
    handle: "handle4",
    banner: LuckyBanner,
    Logo: LuckyLogo,
    href: "https://ereditaeyewear.com/collections/lucky-brand",
    maxW: 202
  },
  {
    handle: "handle5",
    banner: PhilippBanner,
    Logo: PhilippLogo,
    href: "https://ereditaeyewear.com/collections/philipp-plein",
    maxW: 150
  },
  {
    handle: "handle6",
    banner: ChopardBanner,
    Logo: ChopardLogo,
    href: "https://ereditaeyewear.com/collections/chopard",
    maxW: 180
  }

]

function Brands() {
  
  const [slides,setSlides] = useState([]);
  const [contentPage, setContentPage] = useContext(AppContext);
  
  useEffect(() => {
    setSlides(slidesArray);
  }, []);

  return (

    <section className="w-full flex flex-col py-20">

      <h2 className="text-primary text-[32px] max-w-[341px] mx-auto md2:max-w-full font-bold leading-[38.4px] tracking-[0.145em] uppercase text-center mb-10">
        {contentPage?.texts?.[contentPage?.language]?.collections_gallery_heading}
      </h2>

      <div>
        <Swiper 
          loop={true}
          centeredSlides={false}
          speed={300}
          autoPlay={false}
          initialSlide={1}
          onSwiper={ (swiper) => {

            if(typeof window !== 'undefined'){
              swiper.slideTo(4,500)
            }
            
          }}
          freeMode={false}
          spaceBetween={20}
          className = "w-full flex swiperBrands relative"
          navigation={{
            prevEl: '.left-arrow',
            nextEl: '.right-arrow ',
          }}
          modules={[Navigation, FreeMode, Autoplay]}
          breakpoints = {{

            320: {
              slidesPerView: 2.5,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
              centeredSlides: false,
            }

          }}
        >

          {
            slides.map((slide,i) => {

              const {banner,Logo, maxW, handle, href} = slide;

              return(

                <SwiperSlide className="relative" key={i}>

                  <a href={href} className="w-full block">
                    <Image
                      src={banner}
                      alt="Banner"
                      layout="responsive"
                      quality={100}
                    />
                  </a>

                  <a href={href} className="absolute bottom-0 h-[150px] flex-col justify-center  w-full min-h-[25px] flex">

                    <style jsx>{`

                      .logo-${handle} {
                        max-width: 80%;
                      }
                      @media(min-width: 768px){
                        .logo-${handle} {
                          max-width: 65%;
                        } 
                      }

                      @media(min-width: 1080px){
                        .logo-${handle} {
                          max-width: ${maxW}px;
                        } 
                      }

                    `}</style>

                    <div className={`relative logo-${handle} w-full mx-auto flex justify-center`}>
                      <Logo className="h-auto w-[inherit]"/>
                    </div>
                  </a>

                </SwiperSlide>

              )
            })
          }
        
          <div className="absolute hidden md2:block z-20 top-0 left-0 h-full w-20 bg-brands-left"></div>
          <div className="absolute hidden md2:block z-20 top-0 right-0 h-full w-20 bg-brands-right rotate-180"></div>

          <div className="absolute hidden md:block cursor-pointer left-arrow z-30 top-[calc(50%-15px)] left-7 ">          
            <LeftArrow/>
          </div>

          <div className="absolute hidden md:block cursor-pointer right-arrow z-30 top-[calc(50%-15px)] right-7 ">          
            <RightArrow/>
          </div>

        </Swiper>
      </div>
      
    </section>

  )
}

export default Brands