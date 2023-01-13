import React , { useState } from "react"
import styled from "styled-components";
import Image from "next/image";
import CustomButton from "../common/customButtons";
import { BodyIntro , Caption , H1 , H2 } from "../../styles/global";
import { numberSeparator } from "../../utils/formatNumber";

HeaderCard.defaultProps = {
     price   : "100" ,
     title   : "همزن برقی sanford" ,
     src     : "/images/headerMobile.png" ,
     sale    : "99" ,
     percent : "50" ,
     
}

function HeaderCard( { id , percent , title , src , price , sale , noBox } ) {
     const [ imgUrl , setImgUrl ] = useState( src )
     const handleImgError = () => {
          setImgUrl( "/images/headerMobile.png" )
     }
     return (
          <$Wrapper >
               {
                    noBox ?
                         <$AdImage >
                              <Image
                                   src = { src }
                                   alt = { title }
                                   objectPosition = { "90% 30%" }
                                   
                                   fill
                                   sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                   objectFit = { "cover" } quality = { 100 }
                              />
                         </$AdImage >
                         :
                         <$Box >
                              
                              <$ImageBox >
                                   <Image
                                        src = { src }
                                        alt = { title }
                                        fill
                                        objectPosition = { "50% 50%" }
                                        
                                        sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                        objectFit = { "contain" } quality = { 100 }
                                   />
                              </$ImageBox >
                              <$Info >
                                   <H2 >
                                        { title }
                                   </H2 >
                                   <$Price >
                                        <Caption >
                                             { numberSeparator( price ) }<span >تومان</span >
                                        </Caption >
                                   
                                   </$Price >
                                   <$Sale >
                                        <div >
                                             <span >{ percent }%</span >
                                        </div >
                                        <Caption >
                                             { numberSeparator( sale ) }
                                        </Caption >
                                   </$Sale >
                              
                              </$Info >
                         </$Box >
                    
                    
               }
          
          </$Wrapper >
     
     
     );
}


export default HeaderCard;

const $Wrapper = styled.div`
     background          : ${ p => p.theme.greyBoxBG };
     background-size     : cover;
     width               : 100%;
     height              : 100%;
     position            : relative;
     display             : flex;
     overflow            : hidden;
     align-content       : start;
     align-items         : center;
     background-size     : cover;
     background-position : top center;
`
const $AdImage = styled.div`
     position : absolute;
     bottom   : 0;
     right    : 0;
     width    : 100%;
     height   : 100%;
`
const $Box = styled.div`
     height             : 100%;
     width              : 100%;
     display            : grid;
     grid-template-rows : 50% 50%;
     position           : relative;
`
const $ImageBox = styled.div`
     position   : absolute;
     top        : 1rem;
     right      : 0;
     width      : 100%;
     height     : 50%;
     text-align : center;

`

const $Info = styled.div`
     grid-row      : 2/3;
     margin-top    : 20%;
     width         : 100%;
     display       : grid;
     padding       : 0 1.4rem;
     align-content : start;

     h2 {
          align-self    : start;
          justify-self  : start;
          font-size     : 1.6rem;
          font-weight   : 900;
          margin-bottom : 4.4rem;
          color         : ${ p => p.theme.textColorDark };

          }

`
const $Price = styled.div`
     justify-self   : end;
     display        : flex;
     flex-direction : column;

     p {
          font-weight   : 700;
          font-size     : 2rem;

          span {
               font-size   : 1.2rem;
               font-weight : 100;

               }

          }




`

const $Sale = styled.div`
     display         : flex;
     justify-content : space-between;

     p {
          font-size            : 2rem;
          margin-bottom        : .8rem;
          color                : ${ p => p.theme.textColorLight };
          font-weight          : 100;
          justify-self         : end;
          align-self           : center;

          font-family          : "IRANSansLight", sans-serif;
          position             : relative;
          text-decoration-line : line-through;
          }

     div {
          display         : flex;
          justify-content : center;
          align-content   : center;
          align-items     : center;
          font-size       : 1.4rem;
          font-family     : "IRANSansBold", sans-serif;

          color           : ${ p => p.theme.white };
          background      : ${ p => p.theme.primaryColorGradient };
          width           : 4.8rem;
          height          : 3rem;
          border-radius   : ${ p => p.theme.border.borderRadius2 };
          }

`


