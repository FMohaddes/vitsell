import React , { useEffect , useRef , useState } from "react"
import styled from "styled-components";
import Logo from "../assets/Logo";
import { BodyIntro , Caption , H3 } from "../styles/global";
import FaceBook from "../assets/icons/facebook";
import Linkedin from "../assets/icons/linkedin";
import Instagram from "../assets/icons/Instagram";
import FormInput from "../components/common/form/form-input";
import CustomButton from "../components/common/customButtons";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
   
     
     const [ services ] = useState( [
               {
                    title : "SUPPLIER OF YOUR PRODUCTS" ,
                    src   : "/images/new1.jpg" ,
                    id    : 1 ,
                    text  : "The role of our company in a business is to provide high-quality products from a manufacturer at a good price to a distributor or retailer for resale. Due to this Vista Experts are flexible and understand how to manage relationships. With our help, grow your business by selling to customers around the world.  If you need a specific product, we can provide it for you wherever you are in the world.  We will do our best to get the goods to you at the lowest possible price. Our biggest pride is providing quality products at very low prices.  The conditions of your order are carefully checked by our experts.  We have consultants who can find business partners for your products in 30 countries around the world. we comply with all relevant laws and standards, including human rights protection and child labor.Contact our experts for advice and to receive the catalog and place orders in retail and wholesale. " ,
               } , {
                    title : "SUPPLIER OF DISPOSABLE CONTAINERS" ,
                    src   : "/images/glasses.jpg" ,
                    id    : 2 ,
                    text  : "The role of our company in a business is to provide high-quality products from a manufacturer at a good price to a distributor or retailer for resale. Due to this Vista Experts are flexible and understand how to manage relationships. With our help, grow your business by selling to customers around the world.  If you need a specific product, we can provide it for you wherever you are in the world.  We will do our best to get the goods to you at the lowest possible price. Our biggest pride is providing quality products at very low prices.  The conditions of your order are carefully checked by our experts.  We have consultants who can find business partners for your products in 30 countries around the world. we comply with all relevant laws and standards, including human rights protection and child labor.Contact our experts for advice and to receive the catalog and place orders in retail and wholesale. " ,
               } , {
                    title : "GRANULE SUPPLIER" ,
                    src   : "/products/granule.jpg" ,
                    id    : 3 ,
                    text  : "The role of our company in a business is to provide high-quality products from a manufacturer at a good price to a distributor or retailer for resale. Due to this Vista Experts are flexible and understand how to manage relationships. With our help, grow your business by selling to customers around the world.  If you need a specific product, we can provide it for you wherever you are in the world.  We will do our best to get the goods to you at the lowest possible price. Our biggest pride is providing quality products at very low prices.  The conditions of your order are carefully checked by our experts.  We have consultants who can find business partners for your products in 30 countries around the world. we comply with all relevant laws and standards, including human rights protection and child labor.Contact our experts for advice and to receive the catalog and place orders in retail and wholesale. " ,
               } ,
          
          ] ,
     );
     const router = useRouter();
     
     const inputElement = useRef( null );
     
     useEffect( () => {
          if ( inputElement.current ) {
               inputElement.current.focus();
          }
     } , [] );
     return (
          < $Wrapper >
               <$BrandDes >
                    <Logo />
                    
                    <BodyIntro >
                         Vista company started it's activity in 2015 by improving the quality of international trade. And now we are proud to have more than a dozen active experts around the world. We are a multipurpose company who have been working in various fields such as kitchenware, home appliances, disposable tableware, foodstuffs, clothing ,petrochemical materials



                    </BodyIntro >
                    
                    <$SocialMedia >
                         FOLLOW US ON :
                         
                         <FaceBook />
                         <Linkedin />
                         <Instagram />
                    </$SocialMedia >
               </$BrandDes >
               <$Box >
                    <$quickAccess >
                         <H3 >
                         SERVICES
                         </H3 >
                         <div>
                              {
                                   services.map( ( { title } , index ) => {
                                        return <>
                                             <Caption key = { index }>
                                               
                                                  {/*<Link legacyBehavior href = { `/services/${ title }` } >*/}
                                                       <a >    {title}</a >
                                                  {/*</Link>*/}
                                             </Caption >
                                        
                                        
                                        </>
               
                                   } )
                              }
                         </div>
                       
                    
                    </$quickAccess >
                    <$Info >
                         <H3 >
                              CONTACT INFO
                         </H3 >
                         <div >
                              <Caption >
                                   9567 Turner Trace Apt. 466 North Willie, BC C3G8A4
                              </Caption >
                              <Caption >
                                   +21 123 456 5523
                              </Caption >
                              <Caption >
                                   info@bexar.com
                              </Caption >
                         
                         </div >
                    </$Info >
                    <$NewsLetter >
                         <H3 >
                              SUBSCRIBE NEWSLETTER
                         </H3 >
                         <div >
                              <FormInput
                                   // Ref = { inputElement }
                                   name = "email"
                                   hasIcon
                                   type = "text"
                                   placeholder = "Enter your email address "
                                   required
                                   // onMouseEnter = { () => {
                                   //      inputElement.current.focus()
                                   // } }
                              
                              />
                              <$SearchBox >
                                   <CustomButton >
                                        <Caption >
                                             SERVICES
                                        </Caption >
                                   </CustomButton >
                              </$SearchBox >
                         </div >
                    
                    </$NewsLetter >
               
               </$Box >
               <$CopyRight >
                    <Caption >
                         
                         Copyright © Vista. All rights reserved. Legal notice
                    </Caption >
               </$CopyRight >
          </$Wrapper >
     );
}

export default Footer;

const $Wrapper = styled.footer`
     height                : 70vh;
     padding               : 0 10%;
     background            : ${ p => p.theme.primaryColorDarker };
     margin-top            : 15vh;
     display               : grid;
     grid-template-columns : 50% 40%;
     border                : ${ p => p.theme.border.borderDark };
     align-content         : center;
     justify-content       : center;
     align-items           : center;
     grid-column-gap       : 10%;
     position              : relative;
     grid-row-gap          : 10rem;
     @media only screen and (max-width : 40em) {
          padding               : 0 5%;
          grid-row-gap          : 5%;

          grid-template-columns : 1fr;

          }



`

const $BrandDes = styled.div`
     display      : grid;
     text-align   : left;
     grid-row-gap : 2.4rem;
     > * {
          :nth-child(1) {

               width:20rem;
               height:100%;
           
            
               }

          }

     p {
          color       : ${ p => p.theme.white };
          font-size   : 2.4rem;
          text-align  : left;
          line-height : 120%;
       
          }
`
const $SocialMedia = styled.div`
     display     : flex;
     align-items : center;
     font-size   : 1.6rem;
     font-weight : 500;
     color       : ${ p => p.theme.white };

     > * {
               //background  : ${ p => p.theme.black };
          display         : flex;
          justify-content : space-between;
          margin-left     : 1.2rem;

          outline-style   : outset;
          width           : 3rem;
          height          : 3rem;
          fill            : ${ p => p.theme.white };

          }


`

const $Box = styled.div`
     display               : grid;
     grid-template-columns : repeat(2, 1fr);
     grid-gap              : 2.4rem;
     @media only screen and (max-width : 40em) {
          grid-gap              : 0;
          }
`


const $quickAccess = styled.div`
     grid-column : 1/2;

     h3 ,a{
          font-weight   : 500;
          font-size     : 2.4rem;
          margin-bottom : 2.4rem;
          }

     > * {
          :nth-child(2) {
               display      : grid;
               grid-row-gap : 1.6rem;
               color        : ${ p => p.theme.white };

               }
p{
     text-align:left;
     }
          }
          a {
               opacity : .5;
               color        : ${ p => p.theme.white };
               font-size:1.8rem;
               line-height: 120%;
               text-align:left;

               :hover {
                    opacity : 1;

                    }
               }

`

const $Info = styled.div`
     grid-column : 2/3;

     h3 {
          font-weight   : 500;
          font-size     : 2.4rem;
          margin-bottom : 2.4rem;
          }

     > * {
          :nth-child(2) {
               display      : grid;
               grid-row-gap : 2.4rem;
               color        : ${ p => p.theme.white };

               p {
                    font-size   : 1.8rem;
                    line-height : 120%;
                    opacity     : .5;

                    :hover {
                         opacity : 1;

                         }
                    }

               }

          }
`
const $NewsLetter = styled.div`
     grid-column    : 1/-1;
     width          : 100%;
     display        : flex;
     position       : relative;
     flex-direction : column;

     h3 {
          font-weight   : 500;
          font-size     : 2.4rem;
          margin-bottom : 2.4rem;
          }

     div {
          height : 6rem
          }

     @media only screen and (max-width : 40em) {
        margin-top: 2vh;
          }

`


const $SearchBox = styled.div`
     height       : 5rem;
     width        : 30%;
     justify-self : end;
     position     : absolute;
     right        : 0;
     bottom       : 0;



`

const $CopyRight = styled.div`
     position        : absolute;
     bottom          : 0;
     
     width           : 100%;
     display         : flex;
     align-content   : center;
     justify-content : center;
     align-items     : center;
     color           : ${ p => p.theme.white };
     height          : 5rem;
     background      : ${ p => p.theme.black };
`