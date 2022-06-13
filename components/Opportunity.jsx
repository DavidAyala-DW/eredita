import React from 'react';
import Audience from "../public/rating1.svg";
import Advertiser from "../public/advertising1.svg";
import Theater from "../public/theatre1.svg";
import Canada from "../public/canada1.svg";

function Opportunity() {

  return (

    <section className="px-5 md:px-0 md:max-w-[85%] mx-auto w-full flex flex-col">

      <h2 className="text-primary text-center uppercase font-black text-[24px] sm:text-[32px] leading-[38px] tracking-[.145em] mb-10">
        The opportunity in numbers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-x-[30px] gap-y-[50px]">

        <div className="flex flex-col space-y-9 pb-8 items-center bg-white shadow-[0px_1.7571px_5.2713px_rgba(151,_172,_198,_0.25)]">

          <div className="flex flex-col transform items-center justify-center bg-primary h-[126px] w-[126px] rounded-full">
            <Audience/>
          </div>

          <div className="max-w-[251px] text-center leading-5 tracking-[.145em] uppercase font-semibold">
            700,000-1M+ potential impressions (audience members)
          </div>

        </div>

        <div className="flex flex-col space-y-9 pb-8 items-center bg-white shadow-[0px_1.7571px_5.2713px_rgba(151,_172,_198,_0.25)]">

          <div className="flex flex-col transform items-center justify-center bg-primary h-[126px] w-[126px] rounded-full">
            <Advertiser/>
          </div>

          <div className="max-w-[251px] text-center leading-5 tracking-[.145em] uppercase font-semibold">
            30 second primetime Ads played on 150+ theatre screens Canada-wide
          </div>

        </div>

        <div className="flex flex-col space-y-9 pb-8 items-center bg-white shadow-[0px_1.7571px_5.2713px_rgba(151,_172,_198,_0.25)]">

          <div className="flex flex-col transform items-center justify-center bg-primary h-[126px] w-[126px] rounded-full">
            <Theater/>
          </div>

          <div className="max-w-[251px] text-center leading-5 tracking-[.145em] uppercase font-semibold">
            700 Bullet Train screenings PER DAY Canada-wide
          </div>

        </div>

        <div className="flex flex-col space-y-9 pb-8 items-center bg-white shadow-[0px_1.7571px_5.2713px_rgba(151,_172,_198,_0.25)]">

          <div className="flex flex-col transform items-center justify-center bg-primary h-[126px] w-[126px] rounded-full">
            <Canada/>
          </div>

          <div className="max-w-[251px] text-center leading-5 tracking-[.145em] uppercase font-semibold">
            Residual and concurrent advertisements post-show in select malls and retail locations across Canada
          </div>

        </div>

      </div>

    </section>

  )

}

export default Opportunity