import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { device } from "../../../styles/global";


export default function Banner( { reverse } ) {
    
     return (
          <>
               
               <$Wrapper reverse={reverse}>
                    
                    <$Banner1>
                         <$ImageBox >
                              <Image
                                   src = {reverse ? "/images/ad1.png" : "/images/ad2.png" }
                                   alt = { "بنر" }
                                   fill
                                   objectPosition = { "50% 50%" }
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
                                   src = {!reverse ? "/images/ad1.png" : "/images/ad2.png" }
     
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
             

               </$Wrapper >
          
          </>
     )
}

const $Wrapper = styled.section`
     grid-column: 1/-1;
     width    : 100%;
     height   :19rem;
     display  : flex;
     gap      : 1.6%;
     margin-top:${p => p.reverse ?  "0":"1.8rem"};
     position : relative;
     @media only screen and ${ device.tabletS } {
        display:grid;
          grid-gap: 1.8rem;
          height   :40rem;


          }
`

const $Banner1 = styled.div`
     position: relative;
     width      : 100%;
     height     : 100%;
`
const $Banner2= styled.div`
     width      : 100%;
     height     : 100%;
     position: relative;
`
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