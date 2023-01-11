import styled from "styled-components";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
// import required modules
import { Swiper , SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Caption , H3 } from "../../../styles/global";
import TeamCard from "../../cards/teamCard";


export default function Services({products :p}) {
     const productsArray=p[Object.keys(p)[0]]
     
  
     
     
     return (
          <>
               <$Wrapper >
                    <$TextBox >
                         <Caption >
                              Our Products
                         </Caption >
                         <H3 >
                              CHECK OUR PLASTIC PRODUCTS </H3 >
                    
                    </$TextBox >
                    
                    <$Items >
                         <Swiper
                              pagination = { {
                                   dynamicBullets : true ,
                              } }
                              modules = { [ Autoplay ] }
                              spaceBetween = { 30 }
                              // centeredSlides={true}
                              autoplay = { {
                                   delay                : 2500 ,
                                   disableOnInteraction : false ,
                              } }
                              breakpoints = { {
                                   "@0.00" : {
                                        slidesPerView : 1 ,
                                        spaceBetween  : 10 ,
                                   } ,
                                   "@0.75" : {
                                        slidesPerView : 2 ,
                                        spaceBetween  : 20 ,
                                   } ,
                                   "@1.00" : {
                                        slidesPerView : 2 ,
                                        spaceBetween  : 30 ,
                                   } ,
                                   "@1.50" : {
                                        slidesPerView : 3 ,
                                        spaceBetween  : 40 ,
                                   } ,
                              } }
                              // navigation={true}
                              className = "mySwiper" >
                              {
                                   productsArray?.map( ( { id , ...otherprops } ) => (
                                        <SwiperSlide >
                                             <TeamCard key = { id } id = { id }
                                                  { ...otherprops }
                                             />
                                        </SwiperSlide >
                                   
                                   ) )
                              }
                         </Swiper >
                    </$Items >
               </$Wrapper >
          </>
     )
}

const $Wrapper = styled.section`
     grid-column     : 1/-1;
     display         : flex;
     grid-column-gap : 2.4rem;
     flex-direction  : column;
`
const $TextBox = styled.div`
     display       : grid;
     margin-top    : 10rem;
     grid-row-gap  : 2.4rem;
     align-content : start;
     text-align    : center;
     width         : 100%;
     justify-items : center;

     > * {
          :nth-child(1) {
               font-size     : 3.2rem;
               color         : ${ p => p.theme.secondaryColorMain };
               margin-bottom : -.4rem;

               }
          }

     h3 {
          width       : 40%;
          line-height : 135%;
          color       : ${ p => p.theme.black };
          font-weight : 700;
          font-size   : 4.8rem;
          @media only screen and (max-width : 40em) {
               width : 60%;

               }
          }
`
const $Items = styled.div`
     position    : relative;
     grid-column : 1/-1;
     width       : 100%;
     padding     : 5% 10%;

     .swiper {
          width  : 100%;
          height : 100%;
          }

     .swiper-slide {
          text-align : center;

          }


`



