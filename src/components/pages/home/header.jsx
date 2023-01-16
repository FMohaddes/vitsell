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
import { Navigation ,Pagination } from "swiper";
import "swiper/css/navigation";
import { device } from "../../../styles/global";

export default function Header( { type , text } ) {
     const [ adSlider ] = useState( [
               {
                    src   : "/images/headerMobile.png" ,
                    id    : 0 ,
                    noBox : true
                    
               } ,
               {
                    src   : "/images/headerMobile.png" ,
                    id    : 0 ,
                    noBox : true
                    
               } ,        {
                    src   : "/images/headerMobile.png" ,
                    id    : 0 ,
                    noBox : true
                    
               } ,        {
                    src   : "/images/headerMobile.png" ,
                    id    : 0 ,
                    noBox : true
                    
               } ,
          
          ] ,
     );
     const [ productsSlider ] = useState( [
               {
                    src   : "/images/blender.png" ,
                    id    : 0 ,
                    price:4343000,
                    percent:34,
                    sale:4300000,
                    title   : "همزن برقی sanford" ,
                    
                    
               } ,   {
                    src   : "/images/blender.png" ,
                    id    : 0 ,
                    price:4343000,
                    percent:34,
                    sale:4300000,
                    title   : "همزن برقی sanford" ,
                    
                    
               } ,
          
          ] ,
     );
     return (
          <>
               
               <$Wrapper >
                    <$AdsSlider >
                         <Swiper
                              pagination = { {
                                   dynamicBullets : true ,
                              } }
                              modules = { [ Navigation,Pagination , Autoplay ] }
                              spaceBetween = { 30 }
                              // centeredSlides={true}
                              autoplay = { {
                                   delay                : 2500 ,
                                   disableOnInteraction : false ,
                              } }
                              navigation = { true }
                              className = "mySwiper" >
                              {
                                   adSlider.map( ( { id , ...otherprops } ) => (
                                        <SwiperSlide >
                                             <HeaderCard key = { id }
                                                  { ...otherprops } id = { id } />
                                        </SwiperSlide >
                                   
                                   ) )
                              }
                         </Swiper >
                    
                    </$AdsSlider >
                    <$ProductsSlider >
                         <Swiper
                              
                              modules = { [ Navigation , Autoplay ] }
                              spaceBetween = { 30 }
                              // centeredSlides={true}
                              autoplay = { {
                                   delay                : 2500 ,
                                   disableOnInteraction : false ,
                              } }
                              navigation = { true }
                              className = "mySwiper" >
                              {
                                   productsSlider.map( ( { id , ...otherprops } ) => (
                                        <SwiperSlide >
                                             <HeaderCard key = { id }
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

const $Wrapper = styled.header`
     width    : 100%;
     height   : 38rem;
     display  : flex;
     gap      : 1.6%;
     position : relative;

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
          color: transparent !important;
          background : url('/images/Arrow.svg') no-repeat;

          right: 0;
          
          height: 100px;
          transform: translate(0%, -20px);

          }

     .swiper-button-next {
          //visibility: hidden;
          color: transparent !important;
          background : url('/images/Arrow.svg') no-repeat;
      
          height: 100px;
          transform: scale(-1) translate(0%, 30px);
          left: 0;
          }
     .swiper-pagination-bullet {
          background : ${ p => p.theme.black };
          background : ${ p => p.theme.primaryColorDark };

          }
     .swiper-pagination-bullet-active {
          width: 3rem;
          border-radius: .5rem;

          }


`

const $AdsSlider = styled.div`
     width         : 75%;
     overflow      : hidden;
     border-radius : ${ p => p.theme.border.borderRadius2 };
     @media only screen and ${ device.tablet } {
          width         : 100%;


          }
`
const $ProductsSlider = styled.div`
     width         : 23.6%;
     border-radius : ${ p => p.theme.border.borderRadius1 };
     overflow      : hidden;
     @media only screen and ${ device.tablet } {
          display: none;

          }

`

