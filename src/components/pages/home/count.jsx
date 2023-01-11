import React from "react"
import styled from "styled-components";
import { BodyIntro , H3 } from "../../../styles/global";
import Calendar from "../../../assets/icons/calendar";


function CountUp() {
     return (
          <$Wrapper >
               <$Box >
                    <Calendar />
                    <div>
                         <H3 >
                              50+
                         </H3 >
                         <BodyIntro >Years Experience</BodyIntro >

                    </div>
         </$Box >
               <$Box >
                    <Calendar />
                    <div>
                         <H3 >
                              20+
                         </H3 >
                         <BodyIntro >Different Products</BodyIntro >
          
                    </div>
               </$Box >
               <$Box >
                    <Calendar />
                    <div>
                         <H3 >
                              10+
                         </H3 >
                         <BodyIntro >Business Partner</BodyIntro >
          
                    </div>
               </$Box >
               <$Box >
                    <Calendar />
                    <div>
                         <H3 >
                              50+
                         </H3 >
                         <BodyIntro >Different Countries</BodyIntro >
          
                    </div>
               </$Box >
          </$Wrapper >
     
     
     );
}


export default CountUp;

const $Wrapper = styled.section`
     grid-column           : 1/3;
     display               : grid;
     grid-auto-flow: column;
     grid-gap       : 2.4rem;
     background      : ${ p => p.theme.primaryColorDarker };
     border          : ${ p => p.theme.border.borderDark };
     min-height: 15rem;
     @media only screen and (max-width : 55em) {
         grid-column: 1/-1;
          grid-auto-flow: row;
          grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
        padding: 2%;
          }
     @media only screen and (max-width : 35em) {
         
          grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
          }
`
const $Box = styled.div`
     display         : grid;
     justify-content : center;
     align-content   : center;
     align-items: center;
     grid-auto-flow: column;
     text-align      : center;
     transform: scale(.9);
     grid-gap    : 1.2rem;
     text-align-last: left;
     h3 {
          font-weight : 900;
          font-size: 3.2rem;
          color       : ${ p => p.theme.secondaryColorMain };
          line-height: 110%;

          }

     p {
          // background      : ${ p => p.theme.secondaryColorMain };
          color           : ${ p => p.theme.white };
       
          font-size: 2rem;
          @media only screen and (max-width : 40em) {
            font-size: 2.4rem;

               }

          }

     > * {
          :nth-child(1) {

               fill   : ${ p => p.theme.white };
               width  : 8rem;
               height : 8rem;
               }
          }

`