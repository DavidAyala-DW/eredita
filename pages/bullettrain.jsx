import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import { useContext, useEffect } from 'react'
import Brands from '../components/Brands'
import FeaturedProduct from '../components/FeaturedProduct'
import Footer from '../components/FooterL'
import Header from '../components/Header'
import HeroWithSlider from '../components/HeroWithSlider'
import {AppContext} from "../helpers/Context";
import Locator from "../public/Locator.png";
import LocatorMobile from "../public/LocatorMobile.png";


export default function Bullettrain({texts,server}) {
  
  const [contentPage, setContentPage] = useContext(AppContext);

  useEffect(() => {    

    const actualSettings = {texts};

    if(typeof window !== "undefined"){

      if(navigator.language.includes("fr")){
        actualSettings.language = "french"
      }else{
        actualSettings.language = "english"
      }
      
    }

    setContentPage(actualSettings);
        
  }, [server,texts,setContentPage]);

  useEffect(() => {

    let config = {
      selector: ".storerocket-store-locator",
      account: "vk8PKozJbm"
    };

    if (typeof window !== 'undefined'){

      function handleLoad(){
        window?.StoreRocket?.init(config);  
      }

      window.addEventListener("load",handleLoad);

      return window.removeEventListener("load",handleLoad,true);
      
    }    

  }, []);

  return (

    <>

      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-236279258-1"  strategy="lazyOnload"></Script>
        
        <Script strategy="lazyOnload" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-236279258-1');
          `}
        </Script>
  
      <Script src="//cdn.storerocket.io/widget.js"/>
      <main>      
        <Header/>
        <HeroWithSlider/>
        <div className="flex flex-col w-full space-y-10 py-20 bg-[#E8EBF1] locator">
          <h2 className="uppercase text-[32px] leading-[38.4px] text-center text-primary tracking-[0.145em] font-bold">
            {contentPage?.texts?.[contentPage?.language]?.store_locator_heading}
          </h2>
          <div className="storerocket-store-locator"></div>
        </div>
        <FeaturedProduct/>
        <Brands/>
        <Footer/>
      </main>
    </>

  )
}

export const getServerSideProps = async (ctx) => {
  
  const dev = process.env.NODE_ENV !== 'production';
  let textObject;
  let server;

  try {  

    if (ctx.req) {
      server = ctx.req.headers.host // will give you localhost:3000
    }

    server = dev ? 'http://localhost:3001' : `https://${server}`;
    const req = await fetch(server + "/settings.json");
    const res = await req.json();
    const {texts} = res;
    if(!texts){
      textObject = {};  
    }else{
      textObject = texts;
    }    
    
 
  } catch (error) {
    textObject = {};
  }
  return {
    props:{
      texts: textObject,
      server
    }
  }
}