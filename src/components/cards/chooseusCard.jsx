import React from "react"
import styled from "styled-components";
import { BodyIntro , Caption , H3 } from "../../styles/global";
import Shipped from "../../assets/icons/shipped";
import FeatureCard from "./featureCard";

ChooseUsCard.defaultProps = {
     title : "CREATIVE DESIGN" ,
     icon  : <Shipped /> ,
     text  : "Lorem ipsum dolor sit amet constur adipelit sed." ,
}

function ChooseUsCard( { title , text , icon , id } ) {
     return (
          <$Wrapper >
               
               <$Box >
                    { icon }
                    <Caption >
                         { id }
                    </Caption >
                    <H3 >
                         { title }
                    
                    </H3 >
                    <BodyIntro >
                         { text }
                    </BodyIntro >
               </$Box >
          </$Wrapper >
     
     
     );
}


export default ChooseUsCard;

const $Wrapper = styled.section`
`

const $Box = styled.div`
          //background      : ${ p => p.theme.primaryColorDarker };
     //padding: 3.2rem;
     display      : grid;
     border       : ${ p => p.theme.border.borderDark };
     min-height:50vh;
     grid-row-gap : 1.2rem;
     @media only screen and (max-width : 40em) {
          min-height:35rem;


          }

     > * {
          :nth-child(1) {
               margin-left : 3.2rem;

               fill        : ${ p => p.theme.primaryColorDarker };

               width       : 10rem;
               height      : 10rem;
               }

          :nth-child(2) {
               font-weight : 900;
               font-size   : 3.2rem;
               margin-left : 3.2rem;
               color       : ${ p => p.theme.white };

               color       : ${ p => p.theme.secondaryColorMain };
               line-height : 100%;
               }

          :nth-child(4) {
               text-align  : left;
               line-height : 120%;
               color       : ${ p => p.theme.black };
               margin      : 0 0 1.2rem 3.2rem;
               font-size   : 2rem;

               }
          }

     h3 {
          align-self  : center;
          margin-left : 3.2rem;
          background  : ${ p => p.theme.secondaryColorMain };
          color       : ${ p => p.theme.white };
          text-align  : center;
          padding     : .5rem;
          font-weight : 500;
          font-size   : 3.2rem;
          }

`