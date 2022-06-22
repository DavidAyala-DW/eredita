import Image from 'next/image';
import React from 'react';

import Glass from "../public/glass.svg";
import Girl from "../public/beautiful-young-woman-choosing-new-pair-spectacles-opticians-store-eyesight-correction-optics-ophtha.webp";

function AuthorizedRetailer() {
  return (
    
    <section className="px-5 md:px-0 md:max-w-[85%] mx-auto w-full flex flex-col mb-[82px]">

      <h2 className="text-center text-primary text-2xl md:text-[32px] leading-[29px] md:leading-9 tracking-[.145em] uppercase font-black mb-4">
        To become an authorized retailer
      </h2>

      <p className="mb-10 text-center mx-auto max-w-[594px] text-lg leading-[22px] tracking-[.145em]">
        Open our Police Eyewear collection with a pre-selected 24 pc order -CAD 3075
      </p>

      <div className="flex flex-col lg:grid lg:grid-cols-[59.15%_41.85%] relative">
        
        <div className="block w-full">          
          <Image
            src={Girl}
            alt={"beautiful-young-woman-choosing-new-pair-spectacles-opticians-store-eyesight-correction-optics-ophthalmology1.webp"}
            width={724}
            height={401}
            layout="responsive" 
            quality={100}
            className="rounded-[10px]"
          />
        </div>

        <div

          className="!-mt-20 bg-white !w-[calc(100%-20px)] bg-opacity-80 backdrop-blur-[8px]  lg:backdrop-blur-[24px] lg:mx-0 lg:!w-[calc(137%)] lg:-mt-0 mx-auto lg:!ml-[-37%] !z-20 rounded-[12px] max-h-max lg:!my-auto shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)]"
        >

          <div className="!max-w-[100%] flex flex-col rounded-[12px]">

            <div className=" z-20 lg:max-w-[684px]  max-h-max flex flex-col pl-[21px] pr-[13px] lg:pl-[30px] lg:pr-[25px] pt-10 pb-7 ">

              <div className="space-y-[33px] flex flex-col">

                <div className="flex flex-start space-x-[18px]">

                  <div className="max-w-[46px]">
                    <Glass/>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                    12 pcs “Bullet Train” Ophthalmic + Sun selection (multiple colours, 1 frame complimentary)
                  </p>
                  
                </div>

                <div className="flex flex-start space-x-[18px]">

                  <div className="max-w-[46px]">
                    <Glass/>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                    12 pcs “Police Lifestyle” selection (our top sellers)
                  </p>
                  
                </div>

                <div className="flex flex-start space-x-[18px]">

                  <div className="max-w-[46px]">
                    <Glass/>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                    30/60 payment terms, payable via credit card
                  </p>
                  
                </div>

                <div className="flex flex-start space-x-[18px]">

                  <div className="max-w-[46px]">
                    <Glass/>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                    Point of Purchase (POP) materials, including a plaque and Police Eyewear branded counter card based on availability and logistics timing.
                  </p>
                  
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>




    </section>

  )
}

export default AuthorizedRetailer