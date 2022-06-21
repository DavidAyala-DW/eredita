import Image from 'next/image'
import React from 'react'
import Banner from "../public/rows-red-seats-theater.webp";

function BannerWithText() {

  return (

    <section className="pt-2.5 md:pt-10 w-full sm:px-[25px] md:px-[50px]  lg:px-[60px] xl:px-[84px]" id="banner">

      <div className="relative w-full">

        <div className="block absolute inset-0 w-full h-full">
          <Image
            src={Banner}    
            layout={"fill"}
            alt={"rows-red-seats-theater.webp"}
            quality={100}
            className="object-cover"
          />
        </div>

        <div className="bg-banner_text absolute inset-0 w-full h-full opacity-60"></div>

        <div className="flex flex-col justify-center items-center static pt-[46px] pb-[110px] md:py-20 w-full">

          <div className="h-max px-6 max-w-max text-white flex flex-col z-[10]">

            <h2 className="font-starduster text-center max-w-[971px] mx-auto text-[30px] sm:text-[32px] md:text-[38px] lg:text-[50px] xl:text-[60px] italic leading-[20px] sm:leading-[32px] md:leading-[48px] lg:leading-[56px] tracking-[-0.1em] mb-[45px] md:mb-[25px]">
              Team up with eredità & cineplex as an authorized retailer!
            </h2>
          
            <div className="text-center text-[18px] lg:text-2xl leading-7 max-w-[380px] md:max-w-[848px] mx-auto">
              Police Lifestyle frame <span className="font-bold">VPLE37</span> is featured & worn in the new summer action blockbuster “Bullet Train”, starring <span className="font-bold">Brad Pitt & Sandra Bullock!</span> Do you want your Optical shop to be listed as an authorized retailer of the star frames, and be seen by millions of movie fans all across the country? Learn more about the frames and your ultra exclusive opportunity below...
            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default BannerWithText