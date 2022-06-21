import Image from 'next/image'
import React from 'react'
import Button from './UI/Button'
import ContactImage from "../public/US_20x30_brian-Bottom-CTA1.webp";
import Eredita from "../public/eredita-contact.svg";
import Cineplex from "../public/cineplex-contact.svg"
import BulletTrain from "../public/bulletTrain.png"

function ContactUs() {
  return (

    <section className="py-[45px] px-[26px] w-full lg:px-[7.5%] bg-[#F7F7FB] flex flex-col">

      <h2 className="text-primary text-[32px] uppercase text-center leading-[38px] tracking-[.145em] mb-10 font-black">Contact us</h2>

      <div className="grid grid-cols-1 md2:grid-cols-[48.4%_51.6%] w-full">
        
        <div className="">

          <Image
            src={ContactImage}
            alt="contact.png"
            quality={100}
            layout="responsive"
          />
          
        </div>

        <div className="bg-white w-full h-max my-auto pt-5 lg:pt-[105px] pb-[25px]">

          <div className="flex flex-col items-center lg:items-start lg:px-[75px] mb-[120px]">

            <h3 className="text-primary text-center uppercase text-[32px] font-black tracking-[.145em] leading-[38px] mb-10">
              Join The Promotion!
            </h3>

            <p className="max-w-[471px] text-center lg:text-left w-full text-lg font-normal leading-[30px] text-[#6F6C90] mb-10">
              Don’t miss your chance to be a part of this summer’s blockbuster hit, and gain nationwide exposure!
            </p>

            <a href="https://ereditaeyewear.com/products/police-x-bullet-train" className="block">
              <Button
                text="Apply To Participate"
                color={"primary"}
                size="large"
                type="button"
                className="min-w-[220px] lg:min-w-[363px]"
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

  )
}

export default ContactUs