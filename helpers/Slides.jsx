import Slide1Gallery1D from "../public/products/product1_slide_1.png";
import Slide1Gallery1M from "../public/products/product1_slide_1_m.png";
import Slide1Gallery2 from "../public/products/product1_slide_2.png";

import Slide2Gallery1D from "../public/products/product2_slide_1.png";
import Slide2Gallery1M from "../public/products/product2_slide_1_m.png";
import Slide2Gallery2 from "../public/products/product2_slide_2.png";

import Slide3Gallery1D from "../public/products/product3_slide_1.png";
import Slide3Gallery1M from "../public/products/product3_slide_1_m.png";
import Slide3Gallery2 from "../public/products/product3_slide_2.png";

import Slide4Gallery1D from "../public/products/product4_slide_1.png";
import Slide4Gallery1M from "../public/products/product4_slide_1_m.png";
import Slide4Gallery2 from "../public/products/product4_slide_2.png";

export const galleries = [

  {
    handle: "slide1",
    slides:[
      {
        desktop: Slide1Gallery1D,
        mobile: Slide1Gallery1M
      },
      {
        desktop: Slide1Gallery2,
        mobile: Slide1Gallery2
      }
    ]
  },
  
  {
    handle: "slide2",
    slides:[
      {
        desktop: Slide2Gallery1D,
        mobile: Slide2Gallery1M
      },
      {
        desktop: Slide2Gallery2,
        mobile: Slide2Gallery2
      }
    ]
  },

  {
    handle: "slide3",
    slides:[
      {
        desktop: Slide3Gallery1D,
        mobile: Slide3Gallery1M
      },
      {
        desktop: Slide3Gallery2,
        mobile: Slide3Gallery2
      }
    ]
  },

  {
    handle: "slide4",
    slides:[
      {
        desktop: Slide4Gallery1D,
        mobile: Slide4Gallery1M
      },
      {
        desktop: Slide4Gallery2,
        mobile: Slide4Gallery2
      }
    ]
  }

]

