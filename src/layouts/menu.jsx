import styled from "styled-components"
import Link from "next/link"
import { useRouter } from "next/router";
import Logo from "../assets/Logo";
import { useRef , useState } from "react";
import { Caption , device , H1 , size } from "../styles/global";
import Category from "../assets/icons/category";
import ArrowDown from "../assets/icons/arrowDown";
import Fire from "../assets/icons/fire";
import Ticket from "../assets/icons/ticket";
import FormInput from "../components/common/form/form-input";
import Shopping from "../assets/icons/shopping";
import CustomButton from "../components/common/customButtons";
import Search from "../assets/icons/search";
import Menu from "../assets/icons/menu";
import Login from "../assets/icons/login";

function MenuBar() {
     const router = useRouter();
     const elementRef = useRef()
     const [ fixed , setIsFixed ] = useState( false )
     {/*// const { totalPrice, cartCount } = useShoppingCart();*/}
     const isFixed = ( e ) => {
          const header = elementRef.current
          const height = header.offsetHeight
          const scrollTop = window.scrollY;
          scrollTop >= height ? setIsFixed( true ) : setIsFixed( false );
     };
     
     return (
          <$Wrapper fixed = { fixed } ref = { elementRef } >
               <$Items >
                    <Link shallow = { true } legacyBehavior href = { "/" } >
                         <$Logo >
                              <Logo />
                              <H1>
                                   ویتسل
                              </H1>
                         </$Logo >
                    
                    </Link >
                    <div >
                         <Category />
                         <Caption >
                              دسته بندی ها
                         </Caption >
                         <ArrowDown />
                    </div >
                    <div >
                         <Fire />
                         <Caption >
                              پرفروش ترین ها
                         </Caption >
                    </div >
                    <div >
                         <Ticket />
                         <Caption >
                              تخفیف دارها
                         </Caption >
                    </div >
               </$Items >
               <$CTA >
                    <FormInput
                         name = "name"
                         hasIcon
                         type = "text"
                         placeholder = "جستجوی محصولات... "
                         required
                         hasicon = { true }
                         icon = { <Search /> }
                    >
                    
                    </FormInput >
                    <$Card >
                         <Shopping />
                    
                    </$Card >
                    <$CustomButton >
                         ورود / ثبت نام
                    </$CustomButton >
               
               </$CTA >
               <$ItemsRes >
          
                    <$Nav >
                         <Menu />
                         <$CTARes >
                              <FormInput
                                   name = "name"
                                   hasIcon
                                   type = "text"
                                   placeholder = "جستجوی ... "
                                   required
                                   hasicon = { true }
                                   icon = { <Search /> }
                              >
                              
                              </FormInput >
                              <Shopping />
                              <Login />
                         
                         </$CTARes >
                    
                    </$Nav >
               </$ItemsRes >
          </ $Wrapper >
     );
}

export default MenuBar;


const $Wrapper = styled.nav`
     width            : 100%;
     height           : 8rem;
     padding          : 2.4rem;
     gap              : .8rem;
     box-shadow       : ${ p => p.theme.shadow.boxShadow };
     border-radius    : ${ size.radius2 };
     position         : ${ p => p.fixed ? "fixed" : "relative" };
     background-color : ${ p => p.fixed ? p.theme.primaryColorLighter : p.theme.white };
     z-index          : ${ p => p.fixed ? "555" : "555" };
     top              : ${ p => p.fixed ? "0" : "auto" };
     transition       : .5s linear;
     display          : flex;
     justify-content  : space-between;
     align-content    : center;
     align-items      : center;
     @media only screen and ${ device.tablet } {
          box-shadow : none;
          display:grid;
          height     : 12rem;
          padding: .5rem;

          }
`
const $Logo = styled.a`
     svg {
          width  : 4rem;
          height : 4rem;
          }

     h1 {
          display     : none;
          font-weight : 900;
          color       : ${ p => p.theme.primaryColorDark };
          @media only screen and ${ device.tablet } {
               display : block;
               font-size   : 1.6rem;

               }
          }
     @media only screen and ${ device.tablet } {
          display : flex;
          align-items: center;
          width   : 100%;
          gap:1.8rem;
          grid-row: 1/2;

       


          }

`


const $Items = styled.div`
     display         : flex;
     justify-content : start;
     align-items     : center;
     gap             : 2.4rem;
    
     svg {
          fill : ${ p => p.theme.textColorMain };

          }

     div {
          @media only screen and ${ device.tablet } {
               display : none;

               }

          display         : flex;
          justify-content : start;
          gap             : .4rem;
          align-items     : center;

          p {
               color : ${ p => p.theme.textColorMain };
               }

          svg {

               }
          }

     span {
          position    : absolute;
          bottom      : 25%;
          font-weight : 900;
          font-size   : 1.2rem;
          left        : 48%;
          transform   : translate(-50%, -5%);
          }



`

const $CTA = styled.div`
     display         : flex;
     justify-content : start;
     align-items     : center;
     gap             : .8rem;
     height          : 4.8rem;
     @media only screen and ${ device.tablet } {
          display : none;

          }

     input {
          width : 25rem;
          }
`
const $Card = styled.div`
     width            : 4.8rem;
     height           : 4.8rem;
     display          : flex;
     justify-content  : center;
     align-items      : center;
     background-color : ${ p => p.theme.greyBoxBG };
     border-radius    : ${ p => p.theme.border.borderRadius2 };


`
const $CustomButton = styled( CustomButton )`
     font-size : 1.4rem;
     width     : 13rem;

`
const $ItemsRes = styled.div`
     width       : 100%;
     align-items : center;
     display     : none;

     @media only screen and ${ device.tablet } {
          display : grid;

          }


`
const $LogoRes = styled.a`



`


const $Nav = styled.a`
     display               : grid;
     height                : 5rem;
     grid-template-columns : 1fr 2fr;
     width                 : 100%;
     align-content         : center;
     align-items           : center;
     justify-content       : space-between;

     > * {
          :nth-child(1) {
               transform : scale(1.3);
               }
          }
`
const $CTARes = styled.div`
     display         : flex;
     justify-content : end;

     align-items     : center;
     gap             : 2.8rem;
     height          : 4.8rem;

     input {
          width       : 45vw;
          align-items : center;

          }

`
