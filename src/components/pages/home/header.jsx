import styled from "styled-components";
import React , { useState } from "react";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
// import required modules
import { Swiper , SwiperSlide } from "swiper/react";
import { Autoplay , Pagination } from "swiper";
import HeaderCard from "../../cards/headerCard";
import { H3 } from "../../../styles/global";
import Image from "next/image";

export default function Header( { type , text } ) {
     const [ state ] = useState( [
               {
                    src   : "/images/year.jpg" ,
                    id    : 0 ,
                    noBox : true
                    
               } ,
               {
                    subtitle : "WE ARE HERE TO" ,
                    title    : "CHANGE THE COLOR OF YOUR LIFE" ,
                    src      : "/images/arian.jpg" ,
                    id       : 1 ,
                    text     : "Getting such prices and services has never been this easy and we are proud" +
                         " of this" ,
               } ,
               {
                    title    : "WE PROVIDE WHAT YOU WANT" ,
                    subtitle : "ALL AROUND THE WORLD" ,
                    src      : "/images/team5.jpg" ,
                    id       : 2 ,
                    text     : "kitchenware, home appliances, disposable tableware, comestibles, clothing ,petrochemical materials" ,
               } , {
                    title    : "BECAUSE QUALITY IS UNBREAKABLE!" ,
                    subtitle : "WHY WE ARE THE BEST" ,
                    src      : "/images/granul.jpg" ,
                    id       : 3 ,
                    text     : "With our high quality products you have nothing to worry about! Buy and sell to expand your business." ,
               } ,
          
          ] ,
     );
     
     return (
          <>
               {
                    type === "image" || type === "product" ?
                         <$WrapperImage >
                              <$ImageBox >
                                   <Image
                                        src = { type === "product" ? "/images/glasses.jpg" :
                                             "/images/call-to-action.jpg"
                                        }
                                        alt = { "call-to-action" }
                                        objectPosition = { "50% 50%" }
                                        fill
                                        sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                        objectFit = { "cover" }
                                        quality = { 30 }
                                   />
                              </$ImageBox >
                              <$TextBox >
                                   <H3 >
                                        { text }
                                   </H3 >
                              
                              </$TextBox >
                         </$WrapperImage >
                         
                         :
                         <$Wrapper >
                              <Swiper
                                   pagination = { {
                                        dynamicBullets : true ,
                                   } }
                                   modules = { [ Pagination , Autoplay ] }
                                   spaceBetween = { 30 }
                                   // centeredSlides={true}
                                   autoplay = { {
                                        delay                : 2500 ,
                                        disableOnInteraction : false ,
                                   } }
                                   // navigation={true}
                                   className = "mySwiper" >
                                   {
                                        state.map( ( { id , ...otherprops } ) => (
                                             <SwiperSlide >
                                                  <HeaderCard key = { id }
                                                       { ...otherprops } id = { id } />
                                             </SwiperSlide >
                                        
                                        ) )
                                   }
                              </Swiper >
                         </$Wrapper >
                    
               }
          </>
     )
}

const $Wrapper = styled.header`
     width         : 100%;
     height        : 80vh;
     border-bottom : ${ p => p.theme.border.borderDark };
     border-right  : ${ p => p.theme.border.borderDark };
     border-left   : ${ p => p.theme.border.borderDark };
     position      : relative;
     @media only screen and (max-width : 40em) {
          height : 50vh;

          }

     .swiper {
          width  : 100%;
          height : 100%;
          }

     .swiper-slide {
          text-align : center;
          font-size  : 18px;
          background : #FFF;

          }

     .swiper-pagination-bullet {
          background : ${ p => p.theme.black };

          }
`
const $WrapperImage = styled.header`

     border-bottom         : ${ p => p.theme.border.borderDark };
     border-right          : ${ p => p.theme.border.borderDark };
     border-left           : ${ p => p.theme.border.borderDark };
     padding               : 0 10%;
     margin-bottom         : 16vh;
     position              : relative;
     height                : 45rem;
          //background            : ${ p => p.theme.secondaryColorMain };

     border                : ${ p => p.theme.border.borderDark };
     //background            : url("/images/call-to-action.jpg") ;
     background-size       : cover;
     background-attachment : fixed;
     display               : flex;
     justify-content       : start;
     align-content         : center;
     align-items           : center;

     @media only screen and (max-width : 55em) {
          padding : 0 5%;
          }
     @media only screen and (max-width : 40em) {
          margin-bottom : 10vh;

          }

`
const $TextBox = styled.div`
     background : ${ p => p.theme.black };
     text-align : left;
     z-index    : 55;
     padding    : 4.8rem;

     h3 {
          font-size   : 4.8rem;
          font-weight : 700;
          @media only screen and (max-width : 55em) {
               font-size : 4rem;

               }
          }

`
const $ImageBox = styled.div`
     position : absolute;
     bottom   : 0;
     right    : 0;
     width    : 100%;
     height   : 100%;
     z-index  : 22;

     > * {
          filter          : sepia(100%) hue-rotate(180deg);
          object-position : right top;
          }
`