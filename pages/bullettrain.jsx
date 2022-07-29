import React from 'react'
import Image from "next/image";
import HeroMain from "../public/ezgif.com-gif-maker_1_1.png";

export default function bullettrain() {

  return (

    <section className="flex flex-col justify-center min-h-screen pt-[55px] pb-[53px] lg:py-0">

      <div className="flex flex-col">
        
        <h1 className="text-primary font-starduster text-[50px] text-center">
          Comming Soon
        </h1>

        <div className="flex flex-col h-full w-[95%] md:w-[62.5%] lg:max-w-[680px] 3xl:max-w-[900px] mx-auto z-20 lg:pb-10">
          <Image
            src={HeroMain}
            alt="hero_main.webp"
            layout='responsive'
            priority={true}
          />
        </div>

      </div>

    </section>

  )
}
