import React from "react"
import styled from "styled-components";
import { BodyIntro , H3 } from "../../styles/global";
import Image from "next/image";


function ClientCard( { src , title , text } ) {
     return (
          <$Wrapper >
               <$Box >
                    <$ImageBox >
                         <Image
                            
                              src = { src }
                              alt = {title}
                              objectPosition= { "50% 10%" }
                              fill
                              sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                              objectFit={"cover"}
                             quality={30}
                         />
                    </$ImageBox >
                    <$TextBox >
                         <H3 >
                              &ldquo;  { title }
                         <span>
                              (CEO)   &ldquo;
                         </span>
                         </H3 >
                         
                         <BodyIntro >
                              { text }
                         </BodyIntro >
                    </$TextBox >
               
               </$Box >
          
          </$Wrapper >
     
     
     );
}


export default ClientCard;

const $Wrapper = styled.section`



`

const $Box = styled.div`
     background            : ${ p => p.theme.secondaryColorMain };
     padding               : 3.2rem;
     display               : grid;
     grid-template-columns : 38% 58%;
     border                : ${ p => p.theme.border.borderDark };
     position              : relative;
     grid-gap              : 4%;
     overflow              : hidden;
     @media only screen and (max-width : 55em) {

          }

     }

h3 {
     margin-bottom : .8rem;
     font-weight   : 600;
     font-size     : 2rem;
     transform     : translate(15px, 0px);

     color         : ${ p => p.theme.black };
     @media only screen and (max-width : 40em) {
          transform : translate(10px, 10px);

          font-size : 2.4rem;

          }
     }

p {
     line-height : 120%;
     font-size   : 2rem;
     transform   : translate(15px, 0px);
     @media only screen and (max-width : 40em) {
          transform : translate(10px, 10px);

          font-size : 2.4rem;

          }

     }

`
const $TextBox = styled.div`
     grid-column    : 2/3;
     background     : ${ p => p.theme.white };
     -webkit-filter : drop-shadow(10px 2px 0 white) drop-shadow(-2px -2px 0 white);
     filter         : drop-shadow(20px -20px 0 white) drop-shadow(10px -10px 0 white);
        h3{
             span{
                  display: block;
                  }
             }

`
const $ImageBox = styled.div`
     grid-column : 1/2;
     width       : 100%;
     height      : 20rem;
     position: relative;
     @media only screen and (max-width : 40em) {
          height : 30rem;

          }
      > *{
      
           -webkit-filter  : drop-shadow(10px 2px 0 black) drop-shadow(-2px -2px 0 black);
           filter          : drop-shadow(-20px 20px 0 black) drop-shadow(-10px 10px 0 black);
           }

`
