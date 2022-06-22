import Image from 'next/image'
import React from 'react'
import Button from './UI/Button'
import ContactImage from "../public/US_20x30_brian-Bottom-CTA1.webp";
import Eredita from "../public/eredita-contact.svg";
import Cineplex from "../public/cineplex-contact.svg"
import BulletTrain from "../public/bulletTrain.png"

function ContactUs() {
  return (

      <>
        <h2 className="text-primary text-2xl md:text-[32px] uppercase text-center leading-[29px] md:leading-[38px] tracking-[.145em] mb-10 font-black">Contact us</h2>
            <section className="py-[45px] px-[26px] w-full lg:px-[7.5%] bg-[#F7F7FB] flex flex-col">

      <div className="grid grid-cols-1 md2:grid-cols-[48.4%_51.6%] w-full">
        
        <div className="">

          <Image
            src={ContactImage}
            alt="contact.png"
            quality={100}
            layout="responsive"
          />
          
        </div>

        <div className="bg-white w-full h-max my-auto pt-[46px] lg:pt-[105px] pb-[53px]">

          <div className="flex flex-col md:items-center lg:items-start px-2 lg:px-[75px] mb-10 md:mb-[120px]">

            <h3 className="text-primary md:text-center uppercase text-[22px] md:text-[32px] font-black tracking-[.145em] leading-[29px] md:leading-[38px] mb-10">
              Join The Promotion!
            </h3>

            <p className="max-w-[471px] md:text-center lg:text-left w-full text-lg font-normal leading-[30px] text-[#6F6C90] mb-10">
              Don’t miss your chance to be a part of this summer’s blockbuster hit, and gain nationwide exposure!
            </p>

            <a href="https://ereditaeyewear.com/products/police-x-bullet-train" className="block max-w-full">
              <Button
                text="Apply To Participate"
                color={"primary"}
                size="large"
                type="button"
                className="!text-sm 2xs:!text-[17.2px] !w-full"
              />
            </a>

          </div>

          <div className="max-w-[95%] lg:max-w-[calc(100%-80px)] flex items-center justify-between mx-auto">

            <div className="w-full max-w-[32.84%]">
              <Image
              src="/eredita-contact.svg"
              alt="svg"
              layout="responsive"
              width="181"
              height="19.5"
              />
            </div>

            <div className="w-full max-w-[22.9%]">
              <Image
              src="/cineplex-contact.svg"
              alt="svg"
              layout="responsive"
              width="126"
              height="34"
              />
            </div>

            <div className="w-full max-w-[28.6%]">
              <Image
                src={BulletTrain}
                alt="bullet-train"
                layout="responsive"
              />
            </div>
          </div>
        
        </div>

      </div>



    </section>
      </>

  )
}

export default ContactUs