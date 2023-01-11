
import React from "react"
import styled from "styled-components";
import { BodyIntro , Caption , H3 } from "../../../styles/global";
import Shipped from "../../../assets/icons/shipped";
import CustomButton from "../../common/customButtons";
import Image from "next/image";


function CallToAction() {
     return (
          <$Wrapper >
               <$ImageBox >
                    <Image
                         src = { "/images/call-to-action.jpg" }
                         alt = {"call-to-action"}
                         objectPosition= { "50% 90%" }
                         fill
                         sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                         objectFit={"cover"}
                         quality={50}
                    />
               </$ImageBox >
               <$TextBox>
                    <H3>
                    WE GATHER THE BEST EXPERTS IN THIS INDUSTRY TO BE ABOVE THE OTHERS
                    </H3>
               
               </$TextBox>
          
          
          </$Wrapper >
     
     
     );
}


export default CallToAction;

const $Wrapper = styled.section`
     grid-column           : 1/-1;
     position: relative;
     height                : 45rem;
     //background            : ${ p => p.theme.secondaryColorMain };

     border          : ${ p => p.theme.border.borderDark };
     //background            : url("/images/call-to-action.jpg") ;
     background-size       : cover;
     background-attachment : fixed;
     display: flex;
     justify-content: center;
     align-content: center;
     align-items: center;
     //filter: hue-rotate(300deg);
`

const $TextBox=styled.div`
     background      : ${ p => p.theme.black };
     text-align: center;
     padding: 4.8rem;
     z-index: 88;
     width: 70%;
     @media only screen and (max-width : 55em) {

          width: 80%;

          }

     h3{
          font-size: 4.8rem;
          font-weight: 700;
          @media only screen and (max-width : 55em) {
               font-size: 4rem;


               }
          }

`

const $ImageBox = styled.div`
     position       : absolute;
     bottom         :0;
     right :0;
     width:100%;
     height: 100%;


     > *{
          filter: sepia(100%) hue-rotate(180deg) ;
          object-position: right top;
           }
`