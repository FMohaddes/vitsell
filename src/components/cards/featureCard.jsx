import React from "react"
import styled from "styled-components";
import { BodyIntro , H3 } from "../../styles/global";
import Shipped from "../../assets/icons/shipped";

FeatureCard.defaultProps = {
     title: "BUSINESS SOLUTION",
     icon: <Shipped />,
     text: "Lorem ipsum dolor sit amet constur adipelit sed.",
}
function FeatureCard({title,text,icon}) {
     return (
          <$Wrapper >
               <$Box >
                    {icon}
                    <H3 >
                         {title}
                    </H3 >
                    <BodyIntro >
                         {text}
                    </BodyIntro >
               </$Box >
          </$Wrapper >
     
     
     );
}


export default FeatureCard;

const $Wrapper = styled.section`

`

const $Box = styled.div`

     border          : ${ p => p.theme.border.borderDark };
     display         : grid;
    
     text-align      : center;
     grid-gap    : 1.2rem;
     min-height: 25rem;

     h3 {
          font-size: 2rem;
          font-weight : 600;
          color       : ${ p => p.theme.black };

          }

     p {
          line-height : 120%;
          font-size: 2rem;
          padding: 1.2rem;
          background      : ${ p => p.theme.secondaryColorMain };
          color           : ${ p => p.theme.white };

          }

     > * {
          :nth-child(1) {
           justify-self: center;
               fill   : ${ p => p.theme.primaryColorMain };

               width  : 10rem;
               height : 10rem;
               }
          }

`