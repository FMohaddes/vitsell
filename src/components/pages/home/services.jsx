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
import { Caption , H3 } from "../../../styles/global";
import ServiceCard from "../../cards/serviceCard";

export default function ServicesHome() {
     const [state] = useState( [
          {
               title: "SUPPLIER OF YOUR PRODUCTS",
               src:  "/images/new1.jpg",
               id: 1,
               text: "The role of our company in a business is to provide high-quality products from a manufacturer at a good price to a distributor or retailer for resale. Due to this Vista Experts are flexible and understand how to manage relationships. With our help, grow your business by selling to customers around the world.  If you need a specific product, we can provide it for you wherever you are in the world.  We will do our best to get the goods to you at the lowest possible price. Our biggest pride is providing quality products at very low prices.  The conditions of your order are carefully checked by our experts.  We have consultants who can find business partners for your products in 30 countries around the world. we comply with all relevant laws and standards, including human rights protection and child labor.Contact our experts for advice and to receive the catalog and place orders in retail and wholesale. ",
          },    {
               title: "SUPPLIER OF DISPOSABLE CONTAINERS",
               src:  "/images/glasses.jpg",
               id: 2,
               text: "The role of our company in a business is to provide high-quality products from a manufacturer at a good price to a distributor or retailer for resale. Due to this Vista Experts are flexible and understand how to manage relationships. With our help, grow your business by selling to customers around the world.  If you need a specific product, we can provide it for you wherever you are in the world.  We will do our best to get the goods to you at the lowest possible price. Our biggest pride is providing quality products at very low prices.  The conditions of your order are carefully checked by our experts.  We have consultants who can find business partners for your products in 30 countries around the world. we comply with all relevant laws and standards, including human rights protection and child labor.Contact our experts for advice and to receive the catalog and place orders in retail and wholesale. ",
          },    {
               title: "GRANULE SUPPLIER",
               src:  "/products/granule.jpg",
               id: 3,
               text: "The role of our company in a business is to provide high-quality products from a manufacturer at a good price to a distributor or retailer for resale. Due to this Vista Experts are flexible and understand how to manage relationships. With our help, grow your business by selling to customers around the world.  If you need a specific product, we can provide it for you wherever you are in the world.  We will do our best to get the goods to you at the lowest possible price. Our biggest pride is providing quality products at very low prices.  The conditions of your order are carefully checked by our experts.  We have consultants who can find business partners for your products in 30 countries around the world. we comply with all relevant laws and standards, including human rights protection and child labor.Contact our experts for advice and to receive the catalog and place orders in retail and wholesale. ",
          },
          
          ],
     );
     
     return (
          <>
               <$Wrapper>
                    <$TextBox >
                         <Caption >
                              Best Services
                         </Caption >
                         <H3 >
                              SERVICE WE PROVIDE
                         </H3 >
     
                    </$TextBox >
                    
                    <$Items >
                         <Swiper
                              pagination={{
                                   dynamicBullets: true,
                              }}
                              modules={[Autoplay]}
                              spaceBetween={30}
                              // centeredSlides={true}
                              autoplay={{
                                   delay: 2500,
                                   disableOnInteraction: false,
                              }}
                              breakpoints={{
                                   "@0.00": {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                   },
                                   "@0.75": {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                   },
                                   "@1.00": {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                   },
                                   "@1.50": {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                   },
                              }}
                              // navigation={true}
                              className="mySwiper">
                              {
                                   state.map(( { id , ...otherprops }) => (
                                        <SwiperSlide>
                                             <ServiceCard key={id} id={id}
                                                  {...otherprops}/>
                                        </SwiperSlide>
                                   
                                   ))
                              }
                         </Swiper>
                    </$Items>
               </$Wrapper>
          </>
     )
}

const $Wrapper = styled.section`
     grid-column           : 1/-1;
     display               : flex;
     flex-direction: column;
     height                : 40rem;
     background            : ${ p => p.theme.primaryColorDarker };
     margin-bottom: 30vh;
     border          : ${ p => p.theme.border.borderDark };


`
const $TextBox = styled.div`
     display       : grid;
     margin-top    : 10rem;
     grid-row-gap  : 2.4rem;
     align-content : start;
     text-align    : center;
     width         : 100%;

     > * {
          :nth-child(1) {
               font-size     : 3.2rem;
               color         : ${ p => p.theme.secondaryColorMain };
               margin-bottom : -.4rem;
               }
          }

     h3 {
          line-height : 135%;
          color       : ${ p => p.theme.white };
          font-weight : 700;
          font-size   : 4.8rem;
          }
`
const $Items = styled.div`
     position: relative;
     grid-column           : 1/-1;
     width                 : 100%;
     padding               : 5% 10%;

     .swiper {
          width: 100%;
          height: 100%;
          }

     .swiper-slide {
          text-align: center;


          }


`



