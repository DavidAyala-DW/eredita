import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import AuthorizedRetailer from '../components/AuthorizedRetailer'
import BannerWithText from '../components/BannerWithText'
import ContactUs from '../components/ContactUs'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Introduction from '../components/Introduction'
import Navbar from '../components/Navbar'
import Opportunity from '../components/Opportunity'
import Opthalmic from '../components/Opthalmic'
import SunCollection from '../components/SunCollection'
import Button from '../components/UI/Button'



export default function Home() {
  return (

    <>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-J4YZD7MQ9W"  strategy="lazyOnload"></Script>
        
      <Script strategy="lazyOnload" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-J4YZD7MQ9W');
          `}
      </Script>

      <div className="flex flex-col">
      
      <Head>
        <title>Eredità-Cineplex | Shop The Movies</title>
      </Head>
      
      <Navbar/>

      <Hero/>

      <BannerWithText/>

      <Introduction/>

      <SunCollection/>

      <Opthalmic/>

      <a href="https://ereditaeyewear.com/products/police-x-bullet-train" className="mt-9 select-none mb-14 w-full max-w-[calc(100%-48px)] md:max-w-max mx-auto">
        <Button
          color="primary"
          text="Apply To Participate"
          size="large"
          type="button"
          className="!w-full !text-sm 2xs:!text-[20.15px] !leading-6 md:!text-[17.2px] md:!leading-[21px] md:!max-w-max sm:!min-w-[min-content]"
        />
      </a>

      <HowItWorks/>

      <Opportunity/>

      <a href="https://ereditaeyewear.com/products/police-x-bullet-train" className="mt-10 mb-[68px] w-full max-w-[calc(100%-48px)] md:max-w-max mx-auto">
        <Button
          color="primary"
          text="Apply To Participate"
          size="large"
          type="button"
          className="!w-full !text-sm 2xs:!text-[18px] !leading-6 !py-6 !px-10 md:!max-w-max md:!text-[17.2px] md:!leading-[21px] md:!py-[13.25px] md:!px-[15.9px] md:!min-w-min"
        />
      </a>

      <AuthorizedRetailer/>

      <ContactUs/>

      <FAQ/>

      <a href="https://ereditaeyewear.com/products/police-x-bullet-train" className="mt-[45px] mb-20 w-full max-w-[calc(100%-48px)] md:max-w-max mx-auto">

        <Button
          color="primary"
          text="Apply To Participate"
          size="large"
          type="button"
          className="!w-full !text-sm 2xs:!text-[17.2px] md:!w-max md:!min-w-min"
        />

      </a>
    
      <Footer/>

    </div>
    </>

  )
}
