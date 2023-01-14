import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { Caption , device , H4 } from "../../../styles/global";


export default function DownloadApp() {
     
     return (
          <>
               
               <$Wrapper >
                    
                    <$Box >
                         <$Content >
                              <H4 >
                                   ویتسل را همیشه همراه داشته باشید!
                              </H4 >
                              <$Markets >
                                   <div >
                                        <img src = "/images/bazar.png" alt = "android" />
                                        <Caption >دانلود از بازار</Caption >
                                   </div >
                                   <div >
                                        <img src = "/images/mayket.png" alt = "android" />
                                        <Caption >
                                             دانلود از مایکت
                                        
                                        </Caption >
                                   </div >
                                   <div >
                                        <img src = "/images/android.png" alt = "android" />
                                        <Caption >
                                             دانلود مستقیم
                                        </Caption >
                                   </div >
                              </$Markets >
                         </$Content >
                         
                         <$ImageBox >
                              <Image
                                   src = { "/images/mobile.png" }
                                   
                                   alt = { "بنر" }
                                   fill
                                   objectPosition = { "50% 50%" }
                                   sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                   objectFit = { "contain" } quality = { 100 }
                              />
                         </$ImageBox >
                    
                    </$Box >
               
               </$Wrapper >
          
          </>
     )
}

const $Wrapper = styled.section`
     grid-column     : 1/-1;
     width           : 100%;
     height          : 25rem;
     display         : grid;
     grid-gap        : 1.6rem;
     margin-top      : 1.8rem;
     position        : relative;
     justify-content : center;
     align-content   : end;
     @media only screen and ${ device.tabletS } {
          width         : 100%;
          justify-content : stretch;
          align-content   : stretch;
          height          : 20rem;

          }

`
const $Box = styled.div`
     background    : ${ p => p.theme.primaryColorGradient };
     width         : 88rem;
     height        : 15rem;
     border-radius : ${ p => p.theme.border.borderRadius1 };
     position      : relative;
     display       : flex;
     padding-right: 3rem;
     align-content : center;
     align-items: center;
     @media only screen and ${ device.tabletS } {
          width         : 100%;
          height        : 100%;
          display:grid;
          padding: 3rem;

          }
  


`

const $ImageBox = styled.div`
     position : absolute;
     bottom   : 0;
     left     : 0;
     width    : 35rem;
     height   : 28rem;
     @media only screen and ${ device.tabletS } {
          display: none;

          }

`
const $Content = styled.div`
     color : ${ p => p.theme.white };

     h4 {
          color     : ${ p => p.theme.white };
          font-size : 1.8rem;
          margin-bottom: 1.8rem;
          @media only screen and ${ device.tabletS } {
               font-size : 1.8rem;


               }
          }



`
const $Markets = styled.div`
     display         : flex;
     justify-content : center;
     align-content   : center;
     align-items: center;
     gap           : .8rem;
     @media only screen and ${ device.tabletS } {
         display:grid;
          grid-template-columns : repeat(2, 1fr);
          gap           : 1.8rem;

          > *{
               :nth-child(3){
                         grid-column: 1/-1;
                    }
               }
          }
  

     div {
          padding       : 1.2rem 1.6rem;
          gap           : .8rem;
          border-radius : ${ p => p.theme.border.borderRadius2 };

          background    : rgba(255, 255, 255, 0.09);
          height        : 5rem;
          justify-content : center;
          align-content   : center;
          align-items: center;
          display       : flex;

          p {
               font-size   : 1.4rem;
               font-weight : 700;
               }
          }

`