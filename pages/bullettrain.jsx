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

    // StoreRocket.init({
    //   selector: ".storerocket-store-locator",
    //   account: "vk8PKozJbm"
    // });
    let config = {
      selector: ".storerocket-store-locator",
      account: "vk8PKozJbm"
    };
    if (typeof window !== 'undefined'){
      setTimeout(() => {
        window?.StoreRocket?.init(config);  
      }, 1000);      
    }    

  }, []);

  return (

    <>
    <Script src="//cdn.storerocket.io/widget.js"  strategy="lazyOnload"/>
      <main>      
        <Header/>
        <HeroWithSlider/>
        <FeaturedProduct/>
        <div className="storerocket-store-locator"></div>

        {/* <div className="w-full locator">

          <div className="w-full hidden md:block">
            <Image
              src={Locator}
              alt="locator"
              layout="responsive"
              className="w-full block"
            />
          </div>

          <div className="w-full block md:hidden">
            <Image
              src={LocatorMobile}
              alt="locator"
              layout="responsive"
              className="w-full block"
            />
          </div>

        </div> */}
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

    server = dev ? 'http://localhost:3000' : `https://${server}`;
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