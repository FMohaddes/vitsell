import styled from "styled-components";
import { useState } from "react";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
// import required modules
import { Swiper , SwiperSlide } from "swiper/react";
import { Autoplay , Pagination } from "swiper";
import FeatureCard from "../../cards/featureCard";
import Shipped from "../../../assets/icons/shipped";

export default function Features() {
     const [state] = useState( [
               {
                    title: "REASONABLE PRICE",
                    icon: <Shipped />,
                    id: 1,
                    text: "Lorem ipsum dolor sit amet constur adipelit sed.",
               },    {
                    title: "BUSINESS SOLUTION",
                    icon: <Shipped />,
                    id: 2,
                    text: "adipelit sed  amet constur adipelit sed.",
               },    {
                    title: "BUSINESS SOLUTION",
                    icon: <Shipped />,
                    id: 3,
                    text: "Lorem ipsum dolor sit amet constur adipelit sed.",
               }, {
                    title: "BUSINESS SOLUTION",
                    icon: <Shipped />,
                    id: 4,
                    text: "Lorem ipsum dolor sit amet constur adipelit sed.",
               },
          
          ],
     );
     
     return (
          <>
               <$Wrapper>
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
                                   slidesPerView: 3,
                                   spaceBetween: 30,
                              },
                              "@1.50": {
                                   slidesPerView: 4,
                                   spaceBetween: 40,
                              },
                         }}
                         // navigation={true}
                         className="mySwiper">
                         {
                              state.map(( { id , ...otherprops }) => (
                                   <SwiperSlide>
                                        <FeatureCard key={id}
                                             {...otherprops}/>
                                   </SwiperSlide>
                              
                              ))
                         }
                    </Swiper>
               </$Wrapper>
          </>
     )
}

const $Wrapper = styled.section`
     position: relative;
     width                 : 100%;
     margin-top            : 8vh;
     grid-column           : 1/-1;
     padding: 0 10%;

     .swiper {
          width: 100%;
          height: 100%;
          }

     .swiper-slide {
          text-align: center;
         

          }



`