// Import Swiper React components
import { Navigation } from "swiper";
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper , SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";


const Slideshow =
  (WrapperComponent) =>
  ({ SlidesNumber, width, items }) => {
    return (
      <>
        <$Slider width={width}>
          <Swiper
               Swiper navigation={true} modules={[Navigation]}
            slidesPerView={SlidesNumber}
            slidesPerGroup={2}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            // spaceBetween={30}
            // navigation={true}
            className="mySwiper"
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              580: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {items.map((i) => (
              <SwiperSlide>
                <WrapperComponent />
              </SwiperSlide>
            ))}
          </Swiper>
        </$Slider>
      </>
    );
  };
export default Slideshow;

const $Slider = styled.div`
  .swiper {
    width  : 100%;
    height : 100%;
    }
  
  .swiper-slide {
    text-align              : center;
    font-size               : 18px;
    background              : #fff;
    display                 : -webkit-box;
    display                 : -ms-flexbox;
    display                 : -webkit-flex;
    display                 : flex;
    -webkit-box-pack        : center;
    -ms-flex-pack           : center;
    -webkit-justify-content : center;
    justify-content         : center;
    -webkit-box-align       : center;
    -ms-flex-align          : center;
    -webkit-align-items     : center;
    align-items             : center;
    }
  
  .swiper-slide img {
    display    : block;
    width      : 100%;
    height     : 100%;
    object-fit : cover;
    }
`;
