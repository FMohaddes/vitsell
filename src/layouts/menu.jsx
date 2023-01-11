import styled from "styled-components"
import Link from "next/link"
import { useRouter } from "next/router";
import Logo from "../assets/Logo";
import { useEffect , useRef , useState } from "react";
import Cart from "../assets/icons/cart";
import { useSelector } from "../redux/store";
import { sum } from "lodash";
import { size } from "../styles/global";

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
          < $Wrapper fixed = { fixed } ref = { elementRef } >
               <div >
                    <Link shallow = { true } legacyBehavior href = { "/" } >
                         <$Logo >
                              <Logo />
                         
                         </$Logo >
                    </Link >
               </div >
               <$MenuBox >
                    {
                    
                    }
               
               </$MenuBox >
               
               {/*     <$SearchBox >
                <CustomButton >
                <Caption >
                SERVICES
                </Caption >
                </CustomButton >
                </$SearchBox >*/ }
               <$ResNAv >
                    <div className = "navbar" >
                         
                         <div className = "container nav-container" >
                              <div className = "logo" >
                                   <Link shallow = { true } legacyBehavior href = { "/" } >
                                        <a >
                                             <Logo />
                                        </a >
                                   </Link >
                              </div >
                              <input className = "checkbox" type = "checkbox" name = "" id = "" />
                              <div className = "hamburger-lines" >
                                   <span className = "line line1" />
                                   <span className = "line line2" />
                                   <span className = "line line3" />
                              </div >
                              
                              <div className = "menu-items" >
                              
                              </div >
                         </div >
                    </div >
               </$ResNAv >
          
          </ $Wrapper >
     );
}

export default MenuBar;


const $Wrapper = styled.nav`
     width                 : 100%;
     height                : 8rem;
     padding               : 0 10%;
     box-shadow            : ${ p => p.theme.shadow.boxShadow };
     border-radius         : ${ size.radius2 };
     display               : grid;
     position              : ${ p => p.fixed ? "fixed" : "relative" };
     background-color      : ${ p => p.fixed ? p.theme.primaryColorDarker : p.theme.white };
     z-index               : ${ p => p.fixed ? "555" : "555" };
     top                   : ${ p => p.fixed ? "0" : "auto" };
     transition            : .5s linear;
     grid-template-columns : 45% 45%;
     justify-content       : space-between;
     align-content         : center;
     align-items           : center;
     @media only screen and (max-width : 55em)
     and (-webkit-min-device-pixel-ratio : 1.5) {
          grid-template-columns : 1fr;
          padding               : 0 ;

          }

     > * {
          :nth-child(1) {
               //cursor: pointer;
               @media only screen and (max-width : 55em)
               and (-webkit-min-device-pixel-ratio : 1.5) {
                    display : none;

                    }
               }
          }

     .active {
          font-weight    : 500;
          color          : ${ p => p.theme.secondaryColorMain };
          text-transform : uppercase;
          opacity        : 1;
          }

`
const $Logo = styled.a`

     > * {
          :nth-child(1) {
               cursor : pointer;
               height : 100%;
               }

          }
`
const $MenuBox = styled.div`
     display         : flex;
     justify-content : space-between;

     div {
          position : relative;

          span {
               pointer-events : none;
               }
          }

     svg {
          width  : 3rem;
          height : 3rem;
          fill   : ${ p => p.theme.secondaryColorMain };
          }

     span {
          position    : absolute;
          bottom      : 25%;
          font-weight : 900;
          font-size   : 1.2rem;
          left        : 48%;
          transform   : translate(-50%, -5%);
          }

     @media only screen and (max-width : 55em)   and (-webkit-min-device-pixel-ratio : 1.5) {
          display : none;
          }

`


const $NavLink = styled.a`
     cursor         : pointer;
     font-size      : 2rem;
     font-weight    : 400;
     color          : ${ p => p.fixed ? p => p.theme.white : p => p.theme.black };
     z-index        : 10000;
     text-transform : uppercase;
     padding        : .8rem 0;
     position       : relative;
     opacity        : .6;

     @media only screen and (max-width : 55em) {
          font-size      : 2.8rem;
          padding-bottom : 2.4rem;
          margin         : 0 auto;

          }

     &:before,
     &:after {
          position           : absolute;
          -webkit-transition : all 0.35s ease;
          transition         : all 0.35s ease;
          }

     &:before {
          bottom           : 0;
          display          : block;
          height           : .3rem;
          width            : 0;

          content          : "";
          background-color : ${ p => p.theme.secondaryColorMain };

          }

     &:after {
          left        : 0;
          top         : 0;
          padding     : 1rem 0;
          position    : absolute;
          content     : attr(data-hover);
          color       : #FFF;
          white-space : nowrap;
          max-width   : 0%;
          overflow    : hidden;
          }

     &:hover {
          opacity : 1;
          }

     &:hover:before,
     .current &:before {
          opacity : 1;
          width   : 100%;
          }

     &:hover:after,
     .current &:after {
          max-width : 100%;
          }

`


const $ResNAv = styled.div`
     display    : none;
     width      : 100%;
     position   : relative;
     z-index    : 155;
     list-style : none;

     @media only screen and (max-width : 55em)
     and (-webkit-min-device-pixel-ratio : 1.5) {
          display : block;

          }

     .navbar .menu-items {
          border-bottom   : ${ p => p.theme.border.borderDark };
          border-left     : ${ p => p.theme.border.borderDark };
          border-right    : ${ p => p.theme.border.borderDark };
          display         : flex;
          justify-content : start;
          background      : ${ p => p.theme.white };
          }

     .menu-items div {
          margin-top : 1.4rem;
          position   : relative;

          svg {
               width  : 4.5rem;
               height : 4.5rem;
               fill   : ${ p => p.theme.secondaryColorMain };
               }

          span {
               pointer-events : none;
               position       : absolute;
               bottom         : 30%;
               font-weight    : 900;
               font-size      : 1.2rem;
               left           : 49%;
               z-index        : 55;
               }
          }

     .nav-container {
          display  : block;
          position : relative;
          height   : 10rem;
          }

     .nav-container .logo {
          //cursor: pointer;
          position : absolute;
          display  : block;
          left     : 5%;
          top      : 25%;

          a {
               svg {

                    width  : 15rem;
                    height : 50%;

                    }
               }

          }

     .nav-container .checkbox {
          position : absolute;
          display  : block;
          height   : 3.2rem;
          width    : 3.2rem;
          top      : 35%;
          right    : 5%;
          z-index  : 5;
          opacity  : 0;
          cursor   : pointer;
          }

     .nav-container .hamburger-lines {
          height          : 2.8em;
          width           : 3.2rem;
          position        : absolute;
          top             : 35%;
          right           : 5%;
          z-index         : 2;
          display         : flex;
          flex-direction  : column;
          justify-content : space-between;
          }

     .nav-container .hamburger-lines .line {
          display    : block;
          height     : .7rem;
          width      : 100%;
          background : ${ p => p.theme.secondaryColorMain };

          }

     .nav-container .hamburger-lines .line1 {
          transform-origin : 0% 0%;
          transition       : transform 0.4s ease-in-out;
          }

     .nav-container .hamburger-lines .line2 {
          transition : transform 0.2s ease-in-out;
          }

     .nav-container .hamburger-lines .line3 {
          transform-origin : 0% 100%;
          transition       : transform 0.4s ease-in-out;
          }

     .navbar .menu-items {
          padding-top    : 20vh;
          height         : 100vh;
          width          : 100%;
          transform      : translate(-150%);
          display        : flex;
          flex-direction : column;
          transition     : transform 0.5s ease-in-out;
          text-align     : center;
          }

     .logo {
          position  : absolute;
          top       : 5px;
          right     : 15px;
          font-size : 1.2rem;
          }

     .nav-container input[type="checkbox"]:checked ~ .menu-items {
          transform : translateX(0);
          }

     .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
          transform : rotate(45deg);
          }

     .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
          transform : scaleY(0);
          }

     .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
          transform : rotate(-45deg);
          }

     .nav-container input[type="checkbox"]:checked ~ .logo {
          display : none;
          }
`