import React from 'react';
import Audience from "../public/rating1.svg";
import Advertiser from "../public/advertising1.svg";
import Theater from "../public/theatre1.svg";
import Canada from "../public/canada1.svg";

function Opportunity() {

  return (

    <section className="px-5 md:px-0 md:max-w-[85%] mx-auto w-full flex flex-col">

      <h2 className="text-primary text-center uppercase font-black text-[24px] sm:text-[32px] leading-[29px] md:leading-[38px] tracking-[.145em] mb-5">
        WHAT’S IN IT FOR YOU?
      </h2>
      
      <p className="mb-20 text-primary text-center tracking-[.145em] font-black">
        The Opportunity In Numbers
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-x-[30px] gap-y-[100px]">

        <div className="flex flex-col space-y-9 pb-8 items-center bg-white shadow-[0px_1.7571px_5.2713px_rgba(151,_172,_198,_0.25)]">

          <div className="flex flex-col justify-center -mt-10 items-center border-[3px] border-dashed border-[#E9EAF0] w-[181px] h-[181px] md:h-[144px] md:w-[144px] rounded-full">
            <div className="flex flex-col transform items-center justify-center bg-primary h-[158px] w-[158px] md:h-[126px] md:w-[126px] rounded-full">
              <Audience/>
            </div>
          </div>

          <div className="max-w-[315px] text-base leading-[19px] md:max-w-[251px] text-center  md:leading-5 tracking-[.145em] uppercase font-semibold">
            700,000-1M+ potential impressions (audience members)
          </div>

        </div>

        <div className="flex flex-col space-y-9 pb-8 items-center bg-white shadow-[0px_1.7571px_5.2713px_rgba(151,_172,_198,_0.25)]">

          <div className="flex flex-col justify-center -mt-10 items-center border-[3px] border-dashed border-[#E9EAF0] w-[181px] h-[181px] md:h-[144px] md:w-[144px] rounded-full">
            <div className="flex flex-col transform items-center justify-center bg-primary h-[158px] w-[158px] md:h-[126px] md:w-[126px] rounded-full">
              <Advertiser/>
            </div>
          </div>

          <div className="max-w-[315px] text-base leading-[19px] md:max-w-[251px] text-center  md:leading-5 tracking-[.145em] uppercase font-semibold">
            30 second primetime Ads played on 150+ theatre screens Canada-wide
          </div>

        </div>

        <div className="flex flex-col space-y-9 pb-8 items-center bg-white shadow-[0px_1.7571px_5.2713px_rgba(151,_172,_198,_0.25)]">

          <div className="flex flex-col justify-center -mt-10 items-center border-[3px] border-dashed border-[#E9EAF0] w-[181px] h-[181px] md:h-[144px] md:w-[144px] rounded-full">
            <div className="flex flex-col transform items-center justify-center bg-primary h-[158px] w-[158px] md:h-[126px] md:w-[126px] rounded-full">
              <Theater/>                
            </div>
          </div>


          <div className="max-w-[315px] text-base leading-[19px] md:max-w-[251px] text-center  md:leading-5 tracking-[.145em] uppercase font-semibold">
            700 Bullet Train screenings PER DAY Canada-wide
          </div>

        </div>

        <div className="flex flex-col space-y-9 pb-8 items-center bg-white shadow-[0px_1.7571px_5.2713px_rgba(151,_172,_198,_0.25)]">
          
          <div className="flex flex-col justify-center -mt-10 items-center border-[3px] border-dashed border-[#E9EAF0] w-[181px] h-[181px] md:h-[144px] md:w-[144px] rounded-full">
            <div className="flex flex-col transform items-center justify-center bg-primary h-[158px] w-[158px] md:h-[126px] md:w-[126px] rounded-full">
              <Canada/>
            </div>
          </div>

          <div className="max-w-[315px] text-base leading-[19px] md:max-w-[251px] text-center  md:leading-5 tracking-[.145em] uppercase font-semibold">
            Residual and concurrent advertisements post-show in select malls and retail locations across Canada
          </div>

        </div>

      </div>

    </section>

  )

}

export default Opportunity