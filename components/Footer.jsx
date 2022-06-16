import React from 'react'
import Facebook from "../public/facebook.svg";
import Linkedin from "../public/linkedin.svg";
import Instagram from "../public/instagram.svg";
import Speers from "../public/speers.svg"
import BrandsFooter from "../public/brands_footer.svg";

function Footer() {
  return (

    <footer className="bg-[#212D69] px-6 sm:px-[50px] xl:px-20 pt-[80px] pb-[31px] text-[#e9ebf2]">

      <div className="flex flex-col">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[86px] gap-y-12">

          <div className="flex flex-col">

            <h3 className="mb-[30px] uppercase text-[15px] tracking-[.2em] font-bold leading-[1.65]">
              Support
            </h3>

            <div className="flex space-y-[10px] flex-col mb-[50px] text-[15px] leading-[1.65] font-normal">
              
              <p>sales@ereditaeyewear.com</p>
              <p>orders@ereditaeyewear.com</p>
              <p>1-855-793-EYES </p>

            </div>

            {/* <div className="flex items-center space-x-7 opacity-50">

              <div className="flex fle-col h-[30px] w-[30px] justify-center items-center rounded-full">
                <Facebook/>
              </div>

              <div className="flex fle-col h-[30px] w-[30px] justify-center items-center rounded-full">
                <Linkedin/>
              </div>

              <div className="flex fle-col h-[30px] w-[30px] justify-center items-center rounded-full">
                <Instagram/>
              </div>

            </div> */}

          </div>

          <div className="flex flex-col">

            <h3 className="mb-[30px] uppercase text-[15px] tracking-[.2em] font-bold leading-[1.65]">
              Terms & Conditions
            </h3>

            <div className="flex flex-col mb-4 text-[15px] leading-[1.65] font-normal space-y-[15px]">

              <a target="_blank" rel="noopener noreferrer" href="https://ereditaeyewear.com/policies/terms-of-service">Terms of Service</a>
              <a target="_blank" rel="noopener noreferrer" href="https://ereditaeyewear.com/policies/refund-policy">Refund Policy</a>
              <a target="_blank" rel="noopener noreferrer" href="https://ereditaeyewear.com/policies/privacy-policy">Privacy Policy</a>
              <a target="_blank" rel="noopener noreferrer" href="https://ereditaeyewear.com/policies/shipping-policy">Shipping Policy</a>

            </div>

          </div>

        </div>

        <div className="mt-[60px] mb-5 sm:mb-0 flex sm:justify-end">
          <div className="max-w-[80%] cursor-pointer sm:max-w-[363px] relative">

            <BrandsFooter/>

            <div className="absolute grid grid-cols-[57.3%_43.7%] inset-0 w-full h-full">
              <a target="_blank" rel="noopener noreferrer" className="w-full h-full block" href="https://ereditaeyewear.com/"></a>
              <a target="_blank" rel="noopener noreferrer" className="w-full h-full block" href="https://www.cineplex.com/"></a>
            </div>

          </div>
          
        </div>

        <div className="w-full flex flex-col space-y-5 md:space-y-0 sm:flex-row sm:items-center sm:space-x-2.5">

          <p className="text-xs leading-9 text-white">
            © 2022 Eredità Eyewear Group Inc. | Website & Marketing by :
          </p>

          <a href="https://www.speerscreative.ca">
            <Speers/>
          </a>
          
        </div>
      
      </div>

    </footer>

  )
}

export default Footer