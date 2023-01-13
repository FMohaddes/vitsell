import styled from "styled-components";
import React , { useState } from "react";

import HeaderCard from "../../cards/headerCard";
import Ticket from "../../../assets/icons/ticket";
import { Caption , device , H2 } from "../../../styles/global";
import ArrowDown from "../../../assets/icons/arrowDown";
import Category from "../../../assets/icons/category";
import Image from "next/image";

export default function Categories( { type , text } ) {
     const [ categories ] = useState( [
               {
                    src   : "/images/categories/cat1.png" ,
                    title : "تجهیزات صنعتی"
                    
               } , {
                    src   : "/images/categories/cat2.png" ,
                    title : "لوارم تحریر"
                    
               } , {
                    src   : "/images/categories/cat3.png" ,
                    title : "سوپرمارکت"
                    
               } , {
                    src   : "/images/categories/cat4.png" ,
                    title : "کالای دیجیتال"
                    
               } , {
                    src   : "/images/categories/cat5.png" ,
                    title : "موبایل"
                    
               } , {
                    src   : "/images/categories/cat6.png" ,
                    title : "مد و پوشاک"
                    
               } , {
                    src   : "/images/categories/cat7.png" ,
                    title : "خانه و آشپزخانه"
                    
               } , {
                    src   : "/images/categories/cat8.png" ,
                    title : "زیبایی و سلامت"
                    
               } , {
                    src   : "/images/categories/cat9.png" ,
                    title : "اسباب بازی "
                    
               } ,
          
          ] ,
     );
     return (
               
               <$Wrapper >
                    <$Categories >
                         <$TextBox >
                              <$Text >
                              <span >
                                                                 <Category />

                              </span >
                                   <Caption >
                                        دسته بندی های محبوب
                                   </Caption >
                              </$Text >
                              <hr />
                         
                         </$TextBox >
                         <$Items >
                              { categories.map( ( { title , src } ) =>
                                   (
                                        <div >
                                             <img
                                                  src = { src }
                                                  alt = { title }
                                             />
                                             <H2 >
                                                  { title }
                                             </H2 >
                                        
                                        </div >
                                   )
                              )
                              }
                         
                         </$Items >
                    
                    </$Categories >
                    <$CategoryVector >
                         <$ImageBox >
                              <Image
                                   src = { "/images/cartVector.png" }
                                   alt = { "vector" }
                                   fill
                                   objectPosition = { "50% 50%" }
                                   
                                   sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                   objectFit = { "contain" } quality = { 100 }
                              />
                         </$ImageBox >
                    
                    </$CategoryVector >
               </$Wrapper >
          
     )
}

const $Wrapper = styled.header`
     width       : 100%;
     display     : flex;
     gap         : 1.6%;
     position    : relative;
     grid-column : 1/-1;

`

const $Categories = styled.div`
     width           : 64%;
     overflow        : hidden;
     display         : grid;
    
     @media only screen and ${ device.tabletS } {
          width           : 100%;


          }
     


`
const $CategoryVector = styled.div`
     width         : 34.4%;
     border-radius : ${ p => p.theme.border.borderRadius1 };
     overflow      : hidden;
     position: relative;
     @media only screen and ${ device.tabletS } {
          display: none;
          
          }

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
     margin-bottom: 3rem;

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
     padding-left: 2rem;
     

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
const $Items = styled.div`
     display               : grid;
     grid-template-columns : repeat(auto-fit, minmax(10rem, 1fr));
     grid-gap              : 2.4rem;
     overflow              : hidden;
     @media only screen and ${ device.tabletS } {
          grid-template-columns : repeat(auto-fit, minmax(15rem, 1fr));


          }

     div {
          position        : relative;
          display         : grid;
          justify-content : center;
          justify-items   : center;
          align-items     : start;
          height          : 14rem;
          align-content   : center;
          background      : ${ p => p.theme.greyBoxBG };
          border-radius   : ${ p => p.theme.border.borderRadius1 };

          h2 {
               font-size   : 1.4rem;
               font-weight : 700;
               height      : 1rem;
               z-index     : 444;

               }

          img {
               width  : 9.8rem;
               height : 9.8rem;
               }
          }

`
const $ImageBox = styled.div`
     position : absolute;
     top      : 0;
     left     : 0;
     width    : 100%;
     height   : 100%;

`