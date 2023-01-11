import React from "react"
import styled from "styled-components";
import { BodyIntro , Caption , H3 } from "../../../styles/global";
import CustomButton from "../../common/customButtons";
import { useRouter } from "next/router";
import Image from "next/image";


function AboutUs() {
     const router = useRouter()
     return (
          <$Wrapper >
               <$ImageBox >
                    
                    <Image
                         src = { "/images/aboutus.jpg" }
                         fill objectFit = { "cover" }
                         quality = { 50 }
                         sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                         alt = "about"
                    />
               </$ImageBox >
               <$TextBox >
                    <Caption >
                         About Us.
                    </Caption >
                    <H3 >
                         WE ARE A MULTIPURPOSE COMPANY
                    </H3 >
                    <BodyIntro >
                         Vista company started it's activity in 2015 by improving the quality of
                         international trade. And now we are proud to have more than a dozen active experts
                         around the world. We are a multipurpose company who have been working in various
                         fields such as kitchenware, home appliances, disposable tableware, foodstuffs,
                         clothing ,petrochemical materials and many other fields for many years...
                    
                    </BodyIntro >
                    <$SearchBox >
                         <CustomButton
                              onClick = { () => router.push( "/about" , undefined , { shallow : true } ) } >
                              <Caption >
                                   Read More
                              </Caption >
                         </CustomButton >
                    </$SearchBox >
               </$TextBox >
          
          </$Wrapper >
     
     
     );
}


export default AboutUs;

const $Wrapper = styled.section`
     grid-column           : 1/-1;
     display               : grid;
     grid-template-columns : 50% 46%;
     grid-gap              : 2%;
     padding               : 10% 2% 0 2%;

     @media only screen and (max-width : 55em) {
          grid-template-columns : 1fr;
          grid-column           : 2/3;
          grid-template-rows    : max-content;
          }

`
const $TextBox = styled.div`
     height        : 100%;
     display       : grid;
     grid-row-gap  : 2.4rem;
     padding       : 2% 0 2% 0;
     width         : 100%;
     text-align    : left;
     align-content : space-between;

     > * {
          :nth-child(1) {
               font-size     : 3.2rem;
               color         : ${ p => p.theme.secondaryColorMain };
               margin-bottom : -.4rem;

               }

          :nth-child(3) {
               color       : ${ p => p.theme.black };
               line-height : 120%;
               }
          }

     h3 {
          color       : ${ p => p.theme.black };
          font-weight : 700;
          font-size   : 4.8rem;
          width       : 90%;
          }

`
const $ImageBox = styled.div`
     width    : 80%;
     height   : 100%;
     margin   : 0 auto;
     position : relative;
     @media only screen and (max-width : 55em) {
          width    : 100%;
          grid-row : 2/3;
          height   : 45vh;

          }
     @media only screen and (max-width : 35em) {
          height : 30vh;
          }

     > * {
          z-index        : 88;
          -webkit-filter : drop-shadow(10px 2px 0 black) drop-shadow(-2px -2px 0 black);
          filter         : drop-shadow(40px 10px 0 black) drop-shadow(-2px -2px 0 black);
          @media only screen and (max-width : 35em) {
               -webkit-filter : drop-shadow(10px 2px 0 black) drop-shadow(-2px -2px 0 black);
               filter         : drop-shadow(20px 7px 0 black) drop-shadow(-2px -2px 0 black);

               }
          }

`

const $SearchBox = styled.div`
     height       : 5rem;
     width        : 20rem;
     justify-self : start;

`