import styled from "styled-components";
import React , { useState } from "react";
import Ticket from "../../../assets/icons/ticket";
import { Caption , device , H2 } from "../../../styles/global";
import ArrowDown from "../../../assets/icons/arrowDown";
import Fire from "../../../assets/icons/fire";
import Image from "next/image";
import { numberSeparator } from "../../../utils/formatNumber";
import Bookmark from "../../../assets/icons/bookmark";

export default function SuggestedProducts( { type , text } ) {
     const [ products ] = useState( [
               {
                    src     : "/images/han.png" ,
                    id      : 0 ,
                    price   : 4343000 ,
                    percent : 34 ,
                    sale    : 4300000 ,
                    title   : "کتونی نایک شماره ۱۲۱" ,
                    
               }
          
          ] ,
     );
     return (
          <>
               
               <$Wrapper >
                    <$TextBox >
                         <$Text >
                              <span >
                                                                 <Fire />

                              </span >
                              <Caption >
                                   پیشنهادات شگفت انگیر
                              </Caption >
                         </$Text >
                         <hr />
                         <$ShowAll >
                              <Caption >
                                   مشاهده همه
                              </Caption >
                              <ArrowDown />
                         </$ShowAll >
                    
                    </$TextBox >
                    <$ProductsContainer >
                         <$SingleProduct >
                              <$Bookmark >
                                   <Bookmark />
                                   <Fire />
                              </$Bookmark >
                              
                              <$ImageBox >
                                   <Image
                                        src = { "/images/blender.png" }
                                        alt = { "product" }
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
                                        { "همزن برقی sanford" }
                                   </H2 >
                                   <Caption >
                                        { numberSeparator( 4343000 ) }<span >تومان</span >
                                   </Caption >
                              
                              </$Info >
                         
                         </$SingleProduct >
                         <$Products >
                              { Array(9).fill(        {
                                   src     : "/images/han.png" ,
                                   id      : 0 ,
                                   price   : 4343000 ,
                                   percent : 34 ,
                                   sale    : 4300000 ,
                                   title   : "کتونی نایک شماره ۱۲۱" ,
     
                              }).map( ( { title , src , price , percent , sale } ) =>
                                   (
                                        <$Product >
                                             
                                             <img
                                                  src = { src }
                                                  alt = { title }
                                             />
                                             
                                             <$ProductInfo >
                                                  <$BookmarkProduct >
                                                       <Bookmark />
                                                       <Fire />
                                                  </$BookmarkProduct >
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
                                             
                                             </$ProductInfo >
                                        
                                        </$Product >
                                   )
                              ) }
                         
                         </$Products >
                    </$ProductsContainer >
               </$Wrapper >
          
          </>
     )
}

const $Wrapper = styled.section`
     grid-column : 1/-1;
     width       : 100%;
     display     : grid;
     position    : relative;
     

`

const $TextBox = styled.div`
     display         : grid;
     grid-auto-flow  : column;
     width           : 100%;
     align-content   : center;
     align-items     : center;
     justify-items   : start;
     justify-content : space-between;
     gap             : 2rem;
     position        : relative;
     margin-bottom   : 3rem;

     hr {
          position         : absolute;
          width            : 100%;
          background-color : ${ p => p.theme.primaryColorLighter };
          z-index          : 1;
          border-top       : .1rem solid ${ p => p.theme.primaryColorLighter };
          }





`
const $Text = styled.div`
     gap              : 1rem;
     background-color : ${ p => p.theme.white };
     position         : relative;
     z-index          : 500;
     display          : flex;
     justify-content  : center;
     align-items      : center;
     padding-left     : 2rem;

     span {
          width           : 4rem;
          display         : flex;
          justify-content : center;
          align-items     : center;
          height          : 4rem;
          background      : ${ p => p.theme.greyBoxBG };
          border-radius   : ${ p => p.theme.border.borderRadius2 };
          }

     p {
          font-family : "IRANSansBold", sans-serif;
          font-weight : 900;
          display     : block;
          color       : ${ p => p.theme.black };
          }

     svg {
          fill : ${ p => p.theme.primaryColorDark };
          }

`
const $ShowAll = styled.div`
     display          : flex;
     gap              : 1rem;
     position         : relative;
     z-index          : 500;
     justify-content  : center;
     align-items      : center;
     background-color : ${ p => p.theme.white };
     padding-right    : 2rem;

     svg {
          transform : rotate(90deg);
          }


`

const $ProductsContainer = styled.div`
     gap      : 1.6%;
     position : relative;
     display  : grid;
     grid-auto-flow: column;
     overflow:hidden;
    grid-template-columns: 1fr 3fr;
     width: 100%;
     @media only screen and ${ device.tablet } {
          grid-template-columns: 1fr ;


          }

`
const $SingleProduct = styled.div`
     width              : 100%;
     background         : ${ p => p.theme.greyBoxBG };
     height             : 100%;
     display            : grid;
     grid-template-rows : 50% 50%;
     position           : relative;
     overflow           : hidden;
     border-radius      : ${ p => p.theme.border.borderRadius1 };

     @media only screen and ${ device.tablet } {
          display: none;

          }

`


const $Info = styled.div`
     margin-top : 20%;
     width      : 100%;
     display    : grid;
     padding    : 1.4rem;

     h2 {
          align-self    : start;
          justify-self  : start;
          font-size     : 1.6rem;
          font-weight   : 900;
          margin-bottom : 4.4rem;
          color         : ${ p => p.theme.textColorDark };

          }

     p {
          font-weight  : 700;
          font-size    : 2rem;
          align-self   : end;
          justify-self : end;

          span {
               font-size   : 1.2rem;
               font-weight : 100;

               }

          }

`
const $ImageBox = styled.div`
     position   : absolute;
     top        : 1rem;
     right      : 0;
     width      : 100%;
     height     : 50%;
     text-align : center;

`
const $Bookmark = styled.div`
     position : relative;

     svg {
          position : absolute;
          fill     : ${ p => p.theme.primaryColorDark };

          }

     > * {
          :nth-child(1) {
               top  : 0;
               left : 4%;

               }

          :nth-child(2) {

               top  : 1.5%;
               left : 7%;

               }
          }


`
const $Products = styled.div`
     display               : grid;
     grid-template-columns : repeat(auto-fit, minmax(23rem, 1fr));

     grid-column-gap       : 2.4rem;
     grid-row-gap          : 1.6rem;
     justify-content: space-between;
     overflow              : hidden;
     @media only screen and ${ device.mobileM } {
         grid-template-rows: 1fr;
          overflow-x: scroll;
          width:700%;
          grid-template-columns : repeat(auto-fit, minmax(38rem, 1fr));

          }

`

const $Product = styled.div`


     position              : relative;
     display               : flex;
     grid-template-columns : 1fr 2fr;
     justify-content       : center;
     justify-items         : center;
     background            : ${ p => p.theme.greyBoxBG };
     border-radius         : ${ p => p.theme.border.borderRadius1 };
     overflow: hidden;
     min-height: 12rem;
     img {
          width  : 8.8rem;
          height : 8.8rem;
          justify-self: center;
          align-self: center;
          }
`


const $ProductInfo = styled.div`
     grid-column   : 2/3;

     width         : 100%;
     margin-right  : -5%;
     display       : grid;
     grid-row-gap  : .8rem;
     padding       : 0 1.4rem ;
     align-content : start;
     position: relative;

     h2 {

          align-self    : start;
          justify-self  : start;
          font-size     : 1.4rem;
       
          font-weight   : 900;
          color         : ${ p => p.theme.textColorDark };

          }

`

const $Price = styled.div`

     justify-self   : end;
     align-self: end;
     display        : flex;
     flex-direction : column;
     align-items    : end;
     margin-top: 1rem;

     p {
          
          font-weight : 700;
          font-size   : 1.8rem;

          span {
               font-size   : 1.2rem;
               font-weight : 100;

               }

          }




`

const $Sale = styled.div`
     display         : flex;
     justify-content : space-between;
     margin-top: -1rem;


     p {
          font-size            : 1.4rem;
          color                : ${ p => p.theme.textColorLight };
          font-weight          : 100;
          align-self           : center;
          justify-self         : end;
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



const $BookmarkProduct = styled.div`
     position : relative;

     svg {
          position : absolute;
          fill     : ${ p => p.theme.primaryColorDark };

          }

     > * {
          :nth-child(1) {
               top  : 0;
               left : 0;
               }

          :nth-child(2) {

               top  : .3rem;
               left : 3%;

               }
          }


`