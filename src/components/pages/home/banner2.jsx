import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { device } from "../../../styles/global";


export default function Banner2(  ) {
    
     return (
          <>
               
               <$Wrapper >
                    
                    <$Banner1>
                         <$ImageBox >
                              <Image
                                   src = { "/images/ad3.png" }
                                   alt = { "بنر" }
                                   fill
                                   objectPosition = { "80% 50%" }
                                   sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                   objectFit = { "cover" } quality = { 100 }
                              />
                         </$ImageBox >
                    </$Banner1>
                    <$Banner2>
                         <$ImageBox >
                              <Image
                                   src = {"/images/ad4.png" }
     
                                   alt = { "بنر" }
                                   fill
                                   objectPosition = { "50% 50%" }
                                   sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                   objectFit = { "cover" } quality = { 100 }
                              />
                         </$ImageBox >
                    </$Banner2>
                    <$Banner3>
                         <$ImageBox >
                              <Image
                                   src = {"/images/ad5.png" }
                    
                                   alt = { "بنر" }
                                   fill
                                   objectPosition = { "50% 50%" }
                                   sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                   objectFit = { "cover" } quality = { 100 }
                              />
                         </$ImageBox >
                    </$Banner3>

               </$Wrapper >
          
          </>
     )
}

const $Wrapper = styled.section`
     grid-column: 1/-1;
     width    : 100%;
     height   :40rem;
     display  : grid;
     grid-gap: 1.6rem;
     margin-top:1.8rem;
     position : relative;
     @media only screen and ${ device.tablet } {
          grid-template-rows: 2.5fr 1fr 1fr;
          height   :70rem;

          }
 
`

const $Banner1 = styled.div`
     grid-row: 1/3;
     grid-column: 1/2;
     position: relative;
     width      : 100%;
     height     : 100%;
     @media only screen and ${ device.tablet } {
          grid-row: 1/2;
          grid-column: 1/3;


          }
`
const $Banner2= styled.div`
     width      : 100%;
     height     : 100%;
     grid-row: 1/2;
     grid-column: 2/3;
     position: relative;
     @media only screen and ${ device.tablet } {
          grid-row: 2/3;
          grid-column: 1/3;


          }
`
const $Banner3= styled.div`
     width      : 100%;
     height     : 100%;
     grid-row: 2/3;
     grid-column: 2/3;
     position: relative;
     @media only screen and ${ device.tablet } {
          grid-row: 3/4;
          grid-column: 1/3;


          }`
const $ImageBox = styled.div`
     position   : absolute;
     top        :0;
     right      : 0;
     width      : 100%;
     height     : 100%;
     text-align : center;
     > *{
          
          border-radius: ${p => p.theme.border.borderRadius1};

          }

`