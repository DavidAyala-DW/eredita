import React from 'react'
import More from "../public/more.svg"
import Less from "../public/less.svg"

const data = {

  left: [

    {
      question: "Why is this campaign different?",
      answer: "Cineplex is actively partnering in this initiative to drive additional business to your store through a multi-channel marketing approach. The addition of scannable QR codes and priority Ad space makes this the first of its type in Canada and helps reduce the question of “where can I get that product” by showing a captive audience exactly where and how to buy the product. The pilot is widely expected to perform well, opening the door for future on-screen partnerships not only with Eredita Eyewear, but multiple product suppliers."
    },

    {
      question: "Can I substitute other Police styles for my order?",
      answer: "Due to the volumes anticipated with this campaign, initial orders are limited to our best sellers plus the Police:Bullet frames featured in the movie in order to maximize your sales and provide cross-selling opportunities. We welcome additions to your initial order – should you wish to do this, please contact sales@ereditaeyewear.com and quote your account name."
    },

    {
      question: "Do you offer warranty on your product?",
      answer: "We fully stand by our product, and offer a warranty of 2 years from patient sale"
    },

    {
      question: "Why are you only accepting credit cards for this promotion?",
      answer: "Due to the fast moving and time-sensitive nature of this promotion, we are securing payment via credit card.  Should you wish to have an ongoing credit facility, our Accounts Receivable team will be happy to work with you going forward."
    },
    {
      question: "I’m a member of an optical group, do I have to pay by credit card and will I receive my discount?",
      answer: "Eredita Eyewear partners with The Optical Group, Regard Action and Digital ECP. If you are a member of any of these groups, your credit card will be billed $300 to reserve your space, with the remainder of the amount billed through your group, at the prevailing discount agreed. Those not with one of the above groups will be billed exclusively via credit card - discounts will not be available. You may consider joining The Independent Network to receive consolidated billing, discounts and other value-adds for minimal costs. Email us at info@theindependentnetwork.ca for more information!"
    }

  ],

  right: [

    {
      question: "What are your terms of payment?",
      answer: "For this campaign, we are offering 30/60 terms on your order.  We will take a deposit of 10% of the full package price on July 15th to secure your space.  Of the remaining amount, 50% will be taken on/about August 30 and 50% will be taken on/about Sep 30."
    },
      
    {
      question: "Can I return product that does not sell?",
      answer: "Yes, however due to the extended ad campaign associated with this initiative, we strongly encourage to retain the product on the board for at least 6 months before any return decisions are made. Change answer to: “We are happy to offer an exchange of product for alternate SKUs within the Police collection, however, we strongly encourage to retain the product on the board for at least 6 months before any exchange decisions are made, in order to fully capitalize on the extended marketing campaign available. Your sales team can assist with this when convenient."
    },
  
    {
      question: "I don't want the Police brand, can I substitute other brands for this promotion?",
      answer: "While we welcome your business for any one of our other brands, this specific promotion is available for Police frames only.  To inquire/open other brands, please contact sales@ereditaeyewear.com and a member of our sales team will contact you to provide more details on opening orders, minimums, etc."
    },
  
    {
      question: "Do you guarantee that customers will visit my store as part of this promotion?",
      answer: "Since this is a pilot, we do not have analytics from previous campaigns on the advertisement to store conversion ratio.We can confidently state that over 1M viewers will watch this movie Canada-wide and with our B2B 'authorized retailer' feature on the site's landing page, customers will be directed to your store more actively than any other ad campaign of this type.  We fully expect a healthy store conversion ratio, but we cannot fully guarantee store visits."
    },
  
    {
      question: "Will you be selling direct to the public?",
      answer: "Yes. Customers that are directed to the landing page will also have the opportunity to buy frames direct from Eredita Eyewear, at an elevated price from standard MSRP.  Efforts are being made to drive the consumer to your business as the primary method of purchase."
    }

  ]

}


function FAQ() {

  function handleOpenQuestion(e){

    const target = e.target;
    const more = target.querySelector(".more");
    const less = target.querySelector(".less");
    const answer = target.parentElement.parentElement.querySelector(".answer");

    if(target.classList.contains("!bg-[#001C71]")){

      target.classList.remove("!bg-[#001C71]")
      less.classList.remove("!block");
      more.classList.remove("!hidden");
    
      answer.style.maxHeight = "0px";

      setTimeout(() =>{
        answer.classList.remove("!visible");
        answer.classList.remove("!static");
        answer.removeAttribute("style");
      },150)

    }else{

      target.classList.add("!bg-[#001C71]")
      less.classList.add("!block");
      more.classList.add("!hidden");

      const answerHeight = answer.clientHeight;
      answer.classList.add("!static");
      answer.style.maxHeight = "0px";

      setTimeout(() =>{
        answer.classList.add("!visible");
        answer.style.maxHeight = `${answerHeight + 800}px`;
      },10)

    }

  }

  return (

    <section className="px-6 lg:px-0 lg:max-w-[80%] mx-auto py-20 bg-white flex flex-col w-full">

      <h2 className="text-primary text-center mb-6 text-2xl lg:text-[32px] leading-7 tracking-[.145em] font-black">
        FAQs
      </h2>

      <div className="flex flex-col space-y-[26px] lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-[22px] w-full">

        <div className="flex flex-col h-max space-y-[26px]">

          {
            data["left"].map((data,index)=> {

              const {question,answer} = data;

              return (

                <div key={index} className="pt-11 transition-[max-height] pb-[50px] px-8 rounded-[16px] shadow-[0px_5px_16px_rgba(8,_15,_52,_0.06)] w-full flex flex-col space-y-1.5">

                  <div className="flex w-full items-center justify-between">

                    <h3 className="text-sm 2xs:text-lg select-none font-semibold leading-7 text-primary max-w-[180px] 2xs:max-w-[270px] sm:max-w-[403px]">
                      {question}
                    </h3>
          
                    <div onClick={e => handleOpenQuestion(e)} className="h-[41px] w-[41px] bg-[#F7F7FF] rounded-lg flex items-center justify-center cursor-pointer">
                      <More className="more block pointer-events-none"/>
                      <Less className=" hidden less pointer-events-none"/>
                    </div>

                  </div>

                  <p className="absolute overflow-hidden select-none answer transition-[max-height] invisible max-w-[430px] text-[#6F6C90] text-sm 2xs:text-lg leading-[30px]">
                    {answer}
                  </p>
        
                </div>

              )
            })
          }

        </div>

        <div className="flex flex-col space-y-[26px]">

          {
            data["right"].map((data,index)=> {

              const {question,answer} = data; 
              
              return (

                <div key={index} className="pt-11 transition-[max-height] pb-[50px] px-8 rounded-[16px] shadow-[0px_5px_16px_rgba(8,_15,_52,_0.06)] w-full flex flex-col space-y-1.5">

                  <div className="flex w-full items-center justify-between">

                    <h3 className="text-sm 2xs:text-lg select-none font-semibold leading-7 text-primary max-w-[180px] 2xs:max-w-[270px] sm:max-w-[403px]">
                      {question}
                    </h3>
          
                    <div onClick={e => handleOpenQuestion(e)} className="h-[41px] w-[41px] bg-[#F7F7FF] rounded-lg flex items-center justify-center cursor-pointer">
                      <More className="more block pointer-events-none"/>
                      <Less className=" hidden less pointer-events-none"/>
                    </div>

                  </div>

                  <p className="absolute overflow-hidden select-none answer transition-[max-height] invisible max-w-[430px] text-[#6F6C90] text-sm 2xs:text-lg leading-[30px]">
                    {answer}
                  </p>
        
                </div>

              )
            })
          }
          
        </div>

      </div>

    </section>

  )

}

export default FAQ