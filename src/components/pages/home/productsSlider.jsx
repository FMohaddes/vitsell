import styled from "styled-components";
import React , { useState } from "react";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
// import required modules
import { Swiper , SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import HeaderCard from "../../cards/headerCard";
import { Navigation , Pagination } from "swiper";
import "swiper/css/navigation";
import ProductCard from "../../cards/productCard";
import Ticket from "../../../assets/icons/ticket";
import { Caption , device } from "../../../styles/global";
import ArrowDown from "../../../assets/icons/arrowDown";
import Popular from "../../../assets/icons/popular";

export default function ProductsSlider( { popular } ) {
     const [ productsSlider ] = useState( [
               {
                    src     : "/images/shoes.png" ,
                    id      : 0 ,
                    price   : 4343000 ,
                    percent : 34 ,
                    sale    : 4300000
                    
               }
          
          ] ,
     );
     return (
          <>
               
               <$Wrapper >
                    <$TextBox >
                         <$Text >
                              <span >
                                   {
                                        popular ?
                                             <Popular/>
                                             :
                                             <Ticket />
     
                                   }

                              </span >
                              <Caption >
                                   {
                                        popular ?
                                             "پرفروش ترین محصولات"
                                             :
                                             "    تخفیف های ویتسل"
                                   }
                              </Caption >
                         </$Text >
                         <hr />
                         <$ShowAll >
                              <Caption >
                                   مشاهده همه
                              </Caption >
                              <ArrowDown />
                         </$ShowAll >
                    
                    </$TextBox >
                    <$ProductsSlider >
                         <Swiper
                              slidesPerView = { "auto" }
                              modules = { [ Navigation , Autoplay ] }
                              spaceBetween = { 30 }
                              // centeredSlides={true}
                              autoplay = { {
                                   delay                : 2500 ,
                                   disableOnInteraction : false ,
                              } }
                              navigation = { true }
                              breakpoints = { {
                                   "@0.00" : {
                                        slidesPerView : 2 ,
                                        spaceBetween  : 10 ,
                                   } ,
                                   "@0.75" : {
                                        slidesPerView : 3 ,
                                        spaceBetween  : 20 ,
                                   } ,
                                   "@1.00" : {
                                        slidesPerView : 4 ,
                                        spaceBetween  : 10 ,
                                   } ,
                                   "@1.50" : {
                                        slidesPerView : 6.1 ,
                                        spaceBetween  : 10 ,
                                   } ,
                              } }
                              className = "mySwiper" >
                              {
                                   Array(9).fill(        {
                                        src     : "/images/shoes.png" ,
                                        id      : 0 ,
                                        price   : 4343000 ,
                                        percent : 34 ,
                                        sale    : 4300000
          
                                   }).map( ( { id , ...otherprops } ) => (
                                        <SwiperSlide >
                                             <ProductCard key = { id }
                                                  { ...otherprops } id = { id } />
                                        </SwiperSlide >
                                   
                                   ) )
                              }
                         </Swiper >
                    
                    </$ProductsSlider >
               </$Wrapper >
          
          </>
     )
}

const $Wrapper = styled.section`
     grid-column : 1/-1;
     width       : 100%;
     display     : grid;

     position    : relative;

     .swiper {
          width  : 100%;
          height : 100%;
          }

     .swiper-slide {
          text-align : center;
          font-size  : 18px;
          background : #FFF;

          }

     .swiper-button-prev {
          color : transparent !important;

          right : 0;

          ::before {

               content     : '';
               display     : inline-block;
               margin-left : -110%;

               background  : url('/images/Arrow.svg');
               height      : 9.3rem;
               width       : 3.5rem;
               @media only screen and ${ device.tablet } {
                    margin-left : -80%;
                    width       : 4rem;

                    }
               }
          }

     .swiper-button-next {
          //visibility: hidden;
          color : transparent !important;

          left  : 0;

          ::before {

               content     : '';
               display     : inline-block;
               margin-left : -110%;
               transform   : scale(-1);

               background  : url('/images/Arrow.svg');
               height      : 9.3rem;
               width       : 3.5rem;
               @media only screen and ${ device.tablet } {
                    margin-left : -85%;
                    height      : 9.3rem;
                    width       : 4rem;
                    }
               }
          }

     .swiper-pagination-bullet {
          background : ${ p => p.theme.black };
          background : ${ p => p.theme.primaryColorDark };

          }

     .swiper-pagination-bullet-active {
          width         : 3rem;
          border-radius : .5rem;

          }


`

const $TextBox = styled.div`
     display         : grid;
     grid-auto-flow  : column;
     width           : 100%;
     align-content   : center;
     align-items     : center;
     justify-items   : start;
     justify-content : space-between;
     gap             : 2rem;
     position        : relative;
     margin-bottom: 3rem;

     hr {
          position         : absolute;
          width            : 100%;
          background-color : ${ p => p.theme.primaryColorLighter };
          z-index          : 1;
          border-top       : .1rem solid ${ p => p.theme.primaryColorLighter };
          }





`
const $Text = styled.div`
     gap              : 1rem;
     background-color : ${ p => p.theme.white };
     position         : relative;
     z-index          : 500;
     display          : flex;
     justify-content  : center;
     align-items      : center;
     padding-left: 2rem;

     span {
          width           : 4rem;
          display         : flex;
          justify-content : center;
          align-items     : center;
          height          : 4rem;
          background      : ${ p => p.theme.greyBoxBG };
          border-radius   : ${ p => p.theme.border.borderRadius2 };
          }

     p {
          font-family : "IRANSansBold", sans-serif;
          font-weight : 900;
          display     : block;
          color       : ${ p => p.theme.black };
          }

     svg {
          fill : ${ p => p.theme.primaryColorDark };
          }

`
const $ShowAll = styled.div`
     display          : flex;
     gap              : 1rem;
     position         : relative;
     z-index          : 500;
     justify-content  : center;
     align-items      : center;
     background-color : ${ p => p.theme.white };
     padding-right: 2rem;

     svg {
          transform : rotate(90deg);
          }


`

const $ProductsSlider = styled.div`
     width         : 100%;
     border-radius : ${ p => p.theme.border.borderRadius1 };
     overflow      : hidden;
     background    : ${ p => p.theme.greyBoxBG };
     height        : 25rem;
     @media only screen and ${ device.tabletS } {
          height        : 26rem;


          }

`

