import React from "react"
import styled from "styled-components";
import { BodyIntro , Caption , H3 } from "../../styles/global";
import Link from "next/link";
import Image from "next/image";
import { slug } from "../../utils/func";


NewsCard.defaultProps = {
     title : "Export and import of kitchenware " ,
     info  : " BY ADMIN/ ON 11 SEP, 2022" ,
     src   : "/images/new.jpg" ,
     id   : "354647" ,
     text  : "The suppliers with greatest potential to export 392410 Table/kitchenware, of plastics to World are China, Turkey and United States. Dominican Republic  . has closest export links with World. China has the highest supply capacity in 392410 Table/kitchenware, of plastics.  \n" +
          "\n" +
          "The suppliers with greatest potential to export 392410 Table/kitchenware, of plastics to World are China, Turkey and United States. China shows the largest absolute difference between potential and actual exports in value terms, leaving room to realize additional exports worth $2.8 bn. ",
     
}

function NewsCard( { title , info , src , text ,id} ) {
     

    
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
                              objectFit={"cover"}  quality={40}
                         />
                    </$ImageBox >
                    <Caption >
                         { info }
                    </Caption >
                    <H3 >
                         { title.slice( 0,100) }
                    </H3 >
                    <BodyIntro >
                         { text.slice( 0,200) }
                    </BodyIntro >
                 
                    <Caption >
                         <Link shallow={true} legacyBehavior href = { `/blog/${ slug(title.slice( 0,40)) }${id}` } >
                              <a > READ MORE &#8594;</a >
                         </Link >
                    
                    </Caption >
               </$Box >
          
          </$Wrapper >
     
     
     );
}


export default NewsCard;

const $Wrapper = styled.section`



`

const $Box = styled.div`

     display        : grid;
     border         : ${ p => p.theme.border.borderDark };
     text-align     : left;
     grid-row-gap   : 1.2rem;
     padding-bottom : 3.2rem;
     min-height     : 57rem;

     > * {
          padding : 0 3.2rem;

          :first-child {
               padding : 0;
               }

          :last-child {

               margin-top : 1.2rem;
               font-size  : 1.6rem;
               }

          :nth-child(2) {
               font-weight : 700;
               font-size   : 1.4rem;
               color       : ${ p => p.theme.white };
               padding     : 1.2rem;
               background  : ${ p => p.theme.black };
               }

          :nth-child(4) {
               background  : ${ p => p.theme.secondaryColorMain };
               color       : ${ p => p.theme.white };
               font-size   : 1.6rem;
               padding     : 1.2rem;
               opacity: 1;

               text-align  : left;
               line-height : 120%;
               @media only screen and (max-width : 40em) {
                    font-size : 2rem;

                    }
               }
          }

     h3 {
          text-align  : center;
          color       : ${ p => p.theme.black };
          font-size   : 2.4rem;
          line-height : 120%;
          width       : 100%;
          color       : ${ p => p.theme.primaryColorDarker };
          font-weight : 500;
          }

`
const $ImageBox = styled.div`
     width        : 100%;
     justify-self : center;
     height       : 25rem;
     position : relative;
     @media only screen and (max-width : 40em) {
          height : 30rem;

          }
     
     > *{
          width           : 100%;
          height          : 100%;
          object-position : 50% 10%;
          object-fit      : cover;
          -webkit-filter  : drop-shadow(10px 2px 0 black) drop-shadow(-2px -2px 0 black);
          filter          : drop-shadow(10px -10px 0 black) drop-shadow(-2px -2px 0 black);
          }
     
`
