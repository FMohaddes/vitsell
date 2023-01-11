import styled from "styled-components";
import { useState } from "react";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
// import required modules
import { Swiper , SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Shipped from "../../../assets/icons/shipped";
import ChooseUsCard from "../../cards/chooseusCard";
import { Caption , H3 } from "../../../styles/global";
import Consultation from "../../../assets/icons/consultation";
import Diversity from "../../../assets/icons/diversity";
import Support from "../../../assets/icons/support";
import Quality from "../../../assets/icons/quality";
import Price from "../../../assets/icons/price";

export default function ChooseUs() {
     const [ state ] = useState( [
               {
                    title : "FREE CONSULTATION SERVICE" ,
                    icon  : <Consultation /> ,
                    id    : 1 ,
                    text  : "Before buying the product, you can get free consultation from the" +
                         " experts of the Vista team on how to buy and choose the desired product." ,
               } , {
                    title : "HIGH VARIETY AND QUALITY OF PRODUCTS" ,
                    icon  : <Diversity /> ,
                    id    : 2 ,
                    text  : "Our products are suitable for all tastes, each person can get the desired" +
                         " product in the required color and dimensions and of course best quality." ,
               } , {
                    title : "DESIRED DELIVERY TIME AT ANY TIME" ,
                    icon  : <Shipped /> ,
                    id    : 3 ,
                    text  : "After purchasing the product, you can choose the desired delivery time and we" +
                         " will deliver your product to you at that time." ,
               } ,
               {
                    title : "SUPPORT AFTER PURCHASING" ,
                    icon  : <Support /> ,
                    id    : 4 ,
                    text  : "In case of questions or problems after purchasing the product, you can quickly connect to the support of the relevant department." ,
               } ,    {
                    title : "90% CUSTOMER SATISFACTION" ,
                    icon  : <Quality /> ,
                    id    : 5 ,
                    text  : "Customer satisfaction is our priority, we have 90% satisfaction from our" +
                         " customers, rest assure you are in good hands" ,
               } ,{
                    title : "FAIR AND REASONABLE PRICE" ,
                    icon  : <Price /> ,
                    id    : 6 ,
                    text  : "You can compare the prices and come to the conclusion that we have the fairest prices." +
                         "if not, they haven't the quality we have" ,
               } ,
          
          ] ,
     );
     
     return (
          <>
               <$Wrapper >
                    <$TextBox >
                         <Caption >
                              Choose Us.
                         </Caption >
                         <H3 >
                              WHY THEY CHOOSE Vista
                         </H3 >
                         {/*<BodyIntro >
                          
                          Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt
                          mollit anim est. laborum sed
                          </BodyIntro >*/ }
                    
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
                                   state.map( ( { id , ...otherprops } ) => (
                                        <SwiperSlide >
                                             <ChooseUsCard key = { id } id = { id }
                                                  { ...otherprops }/>
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
     grid-column    : 1/-1;
     display        : flex;
     flex-direction : column;
     padding        : 0 10%;

`


const $TextBox = styled.div`
     display      : grid;
     grid-row-gap : 2.4rem;
     text-align   : left;
     width        : 70%;
     @media only screen and (max-width : 40em) {
          width : 100%;

          }

     > * {
          :nth-child(1) {
               font-size     : 3.2rem;
               color         : ${ p => p.theme.secondaryColorMain };
               margin-bottom : -.4rem;
               }

          :nth-child(3) {
               line-height : 120%;
               color       : ${ p => p.theme.black };
               }
          }

     h3 {
          line-height : 135%;
          color       : ${ p => p.theme.black };
          font-weight : 700;
          font-size   : 4.8rem;
`

const $Items = styled.section`
     position    : relative;
     grid-column : 1/-1;
     margin-top  : 4.8rem;
     width       : 100%;

     .swiper {
          width  : 100%;
          height : 100%;
          }

     .swiper-slide {
          text-align : center;

          }



`