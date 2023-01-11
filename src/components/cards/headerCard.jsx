import React , { useState } from "react"
import styled from "styled-components";
import Image from "next/image";
import CustomButton from "../common/customButtons";
import { BodyIntro , Caption , H1 , H2 } from "../../styles/global";
import NewsCard from "./newsCard";

HeaderCard.defaultProps = {
     subtitle : "WE ARE HERE TO" ,
     title    : "PLANNING BUSINESS" ,
     src      : "/images/man2.png" ,
     text     : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, laudantium." ,
     
}

function HeaderCard( {id, title , src , subtitle , text,noBox } ) {
     const [ imgUrl , setImgUrl ] = useState( src )
     const handleImgError = () => {
          setImgUrl( "/images/man2.png" )
     }
     return (
          <$Wrapper >
               <$ImageBox >
                    <Image
                         src = { src }
                         alt = { title }
                         objectPosition = { "50% 30%" }
                         fill
                         sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                         objectFit = { "cover" }  quality = { 100 }
                    />
               </$ImageBox >
               <$Shape >
               
               </$Shape >
               {
                    !noBox &&
                    <$TextBox >
                         <Caption >
                              { subtitle }
                         </Caption >
                         <H1 >
                              { title }
                         </H1 >
                         <BodyIntro >
                              { text }
                         </BodyIntro >
                         {
                              id === 1 ?
                                   <$SearchBox >
                                        <CustomButton >
                              
                                             <Caption >
                                                  <a target = { "_blank" }
                                                       href = "https://drive.google.com/file/d/1OQqi4Ulb2vUN2DKE7e2kziVj-5DKuP6a/view?usp=sharing" >
                                                       Download The Catalog
                                                  </a >
                              
                                             </Caption >
                         
                                        </CustomButton >
                                   </$SearchBox >
                                   : id === 3 &&
                                   <$SearchBox >
                                        <CustomButton >
                              
                                             <Caption >
                                                  <a target = { "_blank" }
                                                       href = "https://drive.google.com/file/d/1JJHSQUhT91I6HhLcBhirm3Tq34YO8856/view?usp=sharing" >
                                                       Download The Catalog
                                                  </a >
                              
                                             </Caption >
                         
                                        </CustomButton >
                                   </$SearchBox >
               
                         }
     
                    </$TextBox >
     
               }
               {/*<CustomButton >*/ }
               {/*     <Caption >*/ }
               {/*          SERVICES*/ }
               {/*     </Caption >*/ }
               {/*</CustomButton >*/ }
          </$Wrapper >
     
     
     );
}


export default HeaderCard;

const $Wrapper = styled.div`
     background      : ${ p => p.theme.primaryColorDarker };
     background-size : cover;
     width           : 100%;
     height          : 100%;
     position        : relative;
     display         : flex;
     overflow        : hidden;
     align-content   : start;
     align-items     : center;
     //background      : ${ p => `url(${ p.src })` };
     background-size: cover;
     background-position: top center;
     
     

`

const $ImageBox = styled.div`
     position : absolute;
     bottom   : 0;
     right    : 0;
     width    : 100%;
     height   : 100%;

     > * {
          //filter          : sepia(100%) hue-rotate(180deg);

          object-position : right center;
          }



`

const $TextBox = styled.div`
     display          : grid;
     justify-content  : start;
     justify-items    : start;
     z-index          : 100;
     background-color : ${ p => p.theme.primaryColorDarker };
     border           : ${ p => p.theme.border.borderDark };
     padding          : 3.2rem 0 3.2rem 3.2rem;
     width            : 40%;
     text-align       : left;
     @media only screen and (max-width : 55em) {
          width : 60%;
          
          }

     > * {
          :nth-child(1) {
               font-size     : 3.2rem;
               color         : ${ p => p.theme.secondaryColorMain };
               margin-bottom : -1.2rem;
               @media only screen and (max-width : 40em) {
                    font-size : 2rem;
                    width:90%;

                    }
               }

          :nth-child(3) {
               color       : ${ p => p.theme.white };
               line-height : 120%;
               margin-top  : -2.2rem;
               @media only screen and (max-width : 40em) {
                    font-size  : 2.4rem;
                    margin-top : -1.5rem;
                    width:90%;
                    }

               }
          }

     h1 {
          color : ${ p => p.theme.white };

          @media only screen and (max-width : 40em) {
               font-size : 3.6rem;
               width:95%;

               }
          /*   width: 22ch;
             animation: typing 2s steps(22), blink .5s step-end infinite alternate;
             white-space: nowrap;
             overflow: hidden;
             border-right: 3px solid;
             font-family: monospace;
             font-size: 2em;*/
          }

     /*  @keyframes typing {
            from {
                 width: 0
                 }
            }
  
       @keyframes blink {
            50% {
                 border-color: transparent
                 }
            }*/
     }


`

const $SearchBox = styled.div`
     height       : 5rem;
     width        : 20rem;
     justify-self : start;
     margin-top   : 2.4rem;
     a{
          color       : ${ p => p.theme.white };

          }

`

const $Shape = styled.div`
     position   : absolute;
     width      : 100%;
     height     : 100%;
     clip-path       : polygon(-50% -20%, 70% 0%, 20% 100%, 0% 100%);
   z-index: 1;

     @media only screen and (max-width : 40em) {
          left       : -10vw;
          clip-path       : polygon(-50% -20%, 90% 0%, 40% 100%, 0% 100%);

          }

`