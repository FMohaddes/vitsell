import React from "react"
import styled from "styled-components";
import Logo from "../assets/Logo";
import { Caption , device , H1 } from "../styles/global";
import Call from "../assets/icons/call";
import Send from "../assets/icons/send";
import Map from "../assets/icons/map";
import Instagram from "../assets/icons/Instagram";
import SendUp from "../assets/icons/sendup";
import Whatsapp from "../assets/icons/whatsapp";
import Image from "next/image";

function Footer() {
     const quickAccess = [ "درباره ما" , "  تماس با ما" , "   حریم خصوصی" , "    شرایط بازگشت کالا" ]
     const products = [ "کالای دیجیتال" , "سوپرمارکت" , "گوشی موبایل" , "لوازم تحریر" , "ابزار الات" ]
     
     
     return (
          < $Wrapper >
               
               <$About >
                    <Logo />
                    <H1 >
                         ویتسل
                    </H1 >
                    <Caption >
                         صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در بستری مطمئن
                    </Caption >
               
               </$About >
               <$QuickAccess >
                    <H1 >
                         با ویتسل
                    </H1 >
                    {
                         quickAccess.map( link =>
                              (
                                   <Caption >
                                        { link }
                                   </Caption >
                              )
                         )
                    }
               
               </$QuickAccess >
               <$Products >
                    <H1 >
                         محصولات ویتسل
                    </H1 >
                    {
                         products.map( link =>
                              (
                                   <Caption >
                                        { link }
                                   </Caption >
                              )
                         )
                    }
               </$Products >
               <$Info >
                    <H1 >
                         ارتباط با ویتسل
                    </H1 >
                    <$Item >
                         <Send />
                         <Caption >
                              vitdell@gmail.com
                         </Caption >
                    </$Item >
                    <$Item >
                         <Call />
                         <Caption >
                              ۰۸۴۷۷۴۷۳۲۲
                         </Caption >
                    </$Item >
                    <$Item >
                         <Map />
                         <Caption >
                              خیابان ولی عصرنرسیده به سینما
                              آفریقا
                         </Caption >
                    </$Item >
                    
                    <$SocialMedia >
                         <div >
                              <Instagram />
                         </div >
                         <div >
                              <SendUp />
                         </div >
                         <div >
                              <Whatsapp />
                         </div >
                    </$SocialMedia >
               </$Info >
               <$Symbol >
                    <$Symbol1 >
                         <$ImageBox >
                              <Image
                                   src = { "/images/nemad1.png" }
                                   
                                   alt = { "بنر" }
                                   fill
                                   objectPosition = { "50% 50%" }
                                   sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                   objectFit = { "contain" } quality = { 100 }
                              />
                         </$ImageBox >
                    
                    </$Symbol1 >
                    <$Symbol2 >
                         <$ImageBox >
                              <Image
                                   src = { "/images/nemad2.png" }
                                   
                                   alt = { "بنر" }
                                   fill
                                   objectPosition = { "50% 50%" }
                                   sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                   objectFit = { "contain" } quality = { 100 }
                              />
                         </$ImageBox >
                    
                    </$Symbol2 >
                    <$Symbol3 >
                         <$ImageBox >
                              <Image
                                   src = { "/images/nemad3.png" }
                                   
                                   alt = { "بنر" }
                                   fill
                                   objectPosition = { "50% 50%" }
                                   sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                   objectFit = { "contain" } quality = { 100 }
                              />
                         </$ImageBox >
                    
                    </$Symbol3 >
                    <$Symbol4 >
                         <$ImageBox >
                              <Image
                                   src = { "/images/nemad4.png" }
                                   
                                   alt = { "بنر" }
                                   fill
                                   objectPosition = { "50% 50%" }
                                   sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                   objectFit = { "contain" } quality = { 100 }
                              />
                         </$ImageBox >
                    
                    </$Symbol4 >
               
               </$Symbol >
               <$CopyRight >
                    <Caption >
                         کلیه حقوق متعلق به شرکت ویستا است.
                    </Caption >
               </$CopyRight >
          
          </$Wrapper >
     );
}

export default Footer;

const $Wrapper = styled.footer`
     display               : grid;
     margin-top            : 15vh;
     justify-content       : space-between;
     grid-gap              : 2rem;
     position              : relative;
     text-align            : right;
     grid-template-columns :1.5fr repeat(4, 1fr);
     @media only screen and ${ device.tabletS } {
          grid-template-columns : repeat(2, 1fr);

          }

     h1 {
          font-size : 1.6rem;
          color     : ${ p => p.theme.textColorDark };

          }

`
const $About = styled.div`
     display         : grid;
     justify-content : start;
     align-content   : start;
     text-align      : justify;
     grid-gap        : .8rem;
     @media only screen and ${ device.tabletS } {
          display : none;

          }

     svg {
          width  : 11rem;
          height : 11rem;
          }

     p {
          width : 90%;
          }
`
const $QuickAccess = styled.div`
     display         : grid;
     justify-content : start;
     align-content   : start;
     grid-gap        : 1.8rem;
     @media only screen and ${ device.tabletS } {
          grid-column : 1/2;
          grid-row    : 1/2;

          }

`
const $Products = styled.div`
     display         : grid;
     justify-content : start;
     align-content   : start;
     grid-gap        : 1.8rem;
     @media only screen and ${ device.tabletS } {
          grid-column : 2/3;
          grid-row    : 1/2;

          }

`
const $Info = styled.div`
     display         : grid;
     justify-content : start;
     align-content   : start;
     grid-gap        : 1.8rem;
     @media only screen and ${ device.tabletS } {
          grid-column : 1/-1;
          grid-row    : 2/3;

          }

`
const $Item = styled.div`
     display : flex;
     gap     : 1.8rem;
`
const $SocialMedia = styled.div`
     display : flex;
     gap     : .8rem;

     div {
          width           : 4rem;
          height          : 4rem;
          background      : ${ p => p.theme.greyBoxBG };
          border-radius   : ${ p => p.theme.border.borderRadius2 };
          display         : flex;
          align-items     : center;
          align-content   : center;
          justify-content : center;
          }

`
const $Symbol = styled.div`
     display      : grid;
     gap          : 2rem;
     width        : 13rem;
     justify-self : end;
     @media only screen and ${ device.tabletS } {
          grid-column       : 1/-1;
          grid-row          : 3/4;
          height            : 8rem;
          width             : 100%;
          grid-auto-flow    : column;
          justify-self      : end;
          gap               : 1rem;

          grid-auto-columns : 20%;

          }



`
const $Symbol1 = styled.div`
     position      : relative;
     background    : ${ p => p.theme.greyBoxBG };
     border-radius : ${ p => p.theme.border.borderRadius1 };
`
const $Symbol2 = styled.div`
     position      : relative;
     background    : ${ p => p.theme.greyBoxBG };
     border-radius : ${ p => p.theme.border.borderRadius1 };
`
const $Symbol3 = styled.div`
     position      : relative;
     background    : ${ p => p.theme.greyBoxBG };
     border-radius : ${ p => p.theme.border.borderRadius1 };
     display       : none;
     @media only screen and ${ device.tabletS } {
          display : block;

          }
`
const $Symbol4 = styled.div`
     position      : relative;
     background    : ${ p => p.theme.greyBoxBG };
     border-radius : ${ p => p.theme.border.borderRadius1 };
     display       : none;
     @media only screen and ${ device.tabletS } {
          display : block;

          }
`


const $CopyRight = styled.div`
     grid-column : 1/-1;
     border-top  : .1rem solid ${ p => p.theme.primaryColorDark };

     p {
          margin    : 2rem 0;
          font-size : 1.4rem;
          }
`

const $ImageBox = styled.div`
     position   : absolute;
     top        : 0;
     right      : 0;
     width      : 100%;
     height     : 100%;
     text-align : center;
     border-top : .1rem solid ${ p => p.theme.greyBoxBG };
     @media only screen and ${ device.tabletS } {
          transform : scale(.8);
          }

     > * {

          border-radius : ${ p => p.theme.border.borderRadius1 };

          }

`

