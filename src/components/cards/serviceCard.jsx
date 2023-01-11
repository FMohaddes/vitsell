import React from "react"
import styled from "styled-components";
import { BodyIntro , Caption , H3 } from "../../styles/global";
import Shipped from "../../assets/icons/shipped";
import Link from "next/link";
import Image from "next/image";
import Supplier from "../../assets/icons/supplier";

ServiceCard.defaultProps =   {
     title : "SUPPLIER OF YOUR PRODUCTS" ,
     src   : "/images/new1.jpg" ,
     id    : 1 ,
     text  : "The role of our company in a business is to provide high-quality products from a manufacturer at a good price to a distributor or retailer for resale. Due to this Vista Experts are flexible and understand how to manage relationships. With our help, grow your business by selling to customers around the world.  If you need a specific product, we can provide it for you wherever you are in the world.  We will do our best to get the goods to you at the lowest possible price. Our biggest pride is providing quality products at very low prices.  The conditions of your order are carefully checked by our experts.  We have consultants who can find business partners for your products in 30 countries around the world. we comply with all relevant laws and standards, including human rights protection and child labor.Contact our experts for advice and to receive the catalog and place orders in retail and wholesale. " ,
}


function ServiceCard({src,title,text}) {
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
                              objectFit={"cover"} quality={40}
                         />
                         
                    </$ImageBox >
                    <Supplier />
          
                    <H3 >
                         {title}
          
                    </H3 >
                    {/*<BodyIntro >*/}
                    {/*     {text.slice(0,100)}*/}
                    {/*</BodyIntro >*/}
                    <Caption>
                         {/*<Link legacyBehavior href = { `/services/${ title }` } >*/}
                         {/*     <a > READ MORE &#8594;</a >*/}
                         {/*</Link>*/}
                    </Caption>
               </$Box >


          </$Wrapper >
     
     
     );
}


export default ServiceCard;

const $Wrapper = styled.section`



`

const $Box = styled.div`
          //background      : ${ p => p.theme.primaryColorDarker };
     padding: 3.2rem;
     display  : grid;
     border   : ${ p => p.theme.border.borderDark };
     position : relative;
     grid-row-gap: 1.2rem;
     min-height: 35rem;
     


     &::before {
          content    : '';
          position   : absolute;
          top        : 0rem;
          left       : 0;
          width      : 8rem;
          background : ${ p => p.theme.secondaryColorMain };
          z-index: 8;
          height     : 8rem;
          }

     > * {
          :nth-child(2) {
               z-index: 55;
               margin : 1rem;
               position    : absolute;
               fill        : ${ p => p.theme.white };

               width       : 6rem;
               height      : 6rem;
               }
          :last-child{
               font-size: 1.6rem;
               }
          
          
          }
     h3{
          margin-top: 1.2rem;
          font-weight : 500;
          font-size   : 2.4rem;
          line-height : 120%;
          width       : 100%;
          color       : ${ p => p.theme.primaryColorDarker };

          }
     p{
          line-height: 120%;
           font-size: 2rem;
          
          text-align : left;
          @media only screen and (max-width : 35em) {

               font-size: 2.4rem;

               }
          
          }

`
const $ImageBox = styled.div`
     width        : 100%;
     justify-self : center;
     position: relative;
     height       : 20rem;
     > *{
          
         
          -webkit-filter : drop-shadow(10px 2px 0 black) drop-shadow(-2px -2px 0 black);
          filter         : drop-shadow(-10px 10px 0 black) drop-shadow(-2px -2px 0 black);

          }

`
