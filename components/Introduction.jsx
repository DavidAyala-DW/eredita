import React from 'react'
import Image from "next/image"
import Button from './UI/Button'
import Glass from "../public/VPLE371.webp"

function Introduction() {

  return (

    <section className="rounded-[10px] w-[calc(100%-48px)] mt-[-33px] lg:mt-[-45px] shadow-introduction pt-[30px] md:pt-[45px] pb-[51px] sm:px-[25px] md:px-[50px] lg:px-0 lg:max-w-[85%] mx-auto bg-white z-[30]">

      <h2 className="text-primary font-bold text-2xl lg:text-[32px] leading-[29px] md:leading-[38px] text-center tracking-[0.145em] uppercase mb-[53px] lg:mb-20">
        Introducing
      </h2>

      <h3 className="text-lg md:pl-[15px] lg:pl-[85px] leading-[22px] text-center md:text-start font-bold uppercase mb-5 tracking-[.145em]">
        police lifestyle
      </h3>

      <div className="flex items-start md:items-center lg:items-start space-y-24 md:space-y-0 flex-col  md:flex-row w-full lg:pl-[72px] lg:pr-[90px]">

        <div className="pl-3 pr-[11px] lg:max-w-max mx-auto lg:mx-0 w-full flex flex-col items-center md:items-start">

          <h3 className=" text-[40px] md:-ml-[15px] md:text-[50px] lg:text-[60px] text-primary font-starduster leading-[55px] tracking-[-.1em] uppercase mb-5">
            vple037
          </h3>

          <p className="text-base text-left leading-[19px] lg:text-lg md:leading-[22px] lg:max-w-[380px] mb-8">
            Aside from being featured and worn by top A-Listers in the upcoming hit “Bullet Train”, these frames come in a wide variety of 6 sun and 6 ophthalmic SKU’s, offering huge sales opportunities for optical shops looking for more growth & exposure in the market, all done for you!
          </p>

          <a className="block w-full max-w-[calc(100%-24px)] md:max-w-max mx-auto md:mx-0" href="https://ereditaeyewear.com/products/police-x-bullet-train">

            <Button
              color="primary"
              text="Apply To Participate"
              size="large"
              type="button"
              className="!w-full md:!w-max !text-[18.15px] !leading-[24px] !py-[15.5px] !px-[18.6px] md:!text-[17.2px] md:!leading-[21px] md:!py-[13.25px] md:!px-[15.9px] md:min-w-[min-content]"
            />

          </a>

        </div>

        <div className="flex flex-col w-full h-full relative max-w-[616px] ml-auto">

          <Image
            src={Glass}
            alt="590332_1644363131835_600x3001.webp"
            layout="responsive"
            className="object-cover"
          />

          <div className="absolute hidden md:block bottom-0 right-0 w-full max-w-[17.8%]">
            <Image
              src={"/barcode.png"}
              alt="barcode.png"
              layout="responsive"
              width={135}
              height={160}
              className="object-cover"
            />
          </div>

          <div className="absolute -top-[25%] left-[37%]  md:-top-[16.5%] z-20 md:z-[-1] md:left-[57%] rounded-full flex flex-col items-center justify-center bg-[#FFCB05] shadow-[0px_2px_6px_#E0E3F8] h-full w-full max-h-[55.2%] max-w-[26.4%] lg:max-h-[56.7%] lg:max-w-[27.9%]">

            <p className="font-bold text-[10px] xl:text-base leading-[19px] tracking-[.145em] text-center uppercase">Featured in</p>

            <div className="block w-full">
              <Image
                src={"/BulletTrain-Header-Sample22.png"}
                alt="BulletTrain-Header-Sample22.png"
                layout="responsive"
                width={159}
                height={59}
                className="object-cover"
              />              
            </div>

          </div>

        </div>

        <div className="w-full md:hidden !mt-0 max-w-[168px] mx-auto">
            <Image
              src={"/barcode.png"}
              alt="barcode.png"
              layout="responsive"
              width={135}
              height={160}
              className="object-cover"
            />
          </div>

      </div>

    </section>

  )

}

export default Introduction