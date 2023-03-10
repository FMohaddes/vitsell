import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { device , secondary } from "./index";

export const GlobalStyle = createGlobalStyle`
     ${ normalize() }
     :root {

          --base-font-size         : 1.9px;
          --fluid-typography-ratio : 0.6;
          --rem-lg                 : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1vw);
          --rem-md                 : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1.3vw);
          --rem-sm                 : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1.5vw);
          --rem-xsm                : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1.8vw);
          --rem-xxsm               : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 2.1vw);

          }

     *,
     *::after,
     ::before {
          padding         : 0;
          margin          : 0;
          text-decoration : none;
          box-sizing      : border-box;

          }

     html {
          scroll-behavior : smooth;

          /*font-size : 62.5%;*/
          font-size       : var(--rem-lg);
          @media only screen and ${ device.tablet } {
               font-size : var(--rem-md);
               }
          @media only screen and ${ device.tabletS } {
               font-size : var(--rem-sm);
               }
          @media only screen and ${ device.mobileM } {
               font-size : var(--rem-xsm);
               }
          @media only screen and ${ device.mobileS } {
               font-size : var(--rem-xxsm);
               }
          /*     @media only screen and (max-width : 50em) {
                    font-size : var(--rem-sm);
                    }
     
               @media only screen and (max-width : 37em) {
                    font-size : var(--rem-xsm);
                    }
               @media only screen and (max-width : 32em) {
                    font-size : var(--rem-xxsm);
                    }*/
          }

     body {
          overflow-x                  : hidden;
          box-sizing                  : border-box;
          line-height                 : 150%;
          text-align                  : justify;
          text-justify                : inter-word;
          font-weight                 : 400;
          background                  : #FFF;
          padding                     : 3.2rem 12rem 0;
          color                       :#333;
          font-family                 : 'IRANSans', sans-serif;
          -webkit-tap-highlight-color : transparent;
          @media only screen and ${ device.tablet } {
               padding                     : 1rem 5.8rem 0;

               }
          @media only screen and ${ device.mobileS } {
               padding                     : 1.2rem 2.4rem 0;

               }

          :focus {
               outline : none;
               }
          }

     a {
          color : black;

          }

     form, button, input {
          font-family : inherit;
          color       : inherit;
          font-weight : 500;
          }

     ol, ul {
          list-style : none;
          }

     img {
          object-fit : cover;
          max-width  : 100%;
          display    : block;
          height     : 400;
          }

     table {
          border-collapse : collapse;
          }

     textarea {
          white-space : revert;
          }

     code {
          font-family : source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
          }

     @font-face {
          font-family  : 'IRANSans';
          font-style   : normal;
          src          : url(/fonts/iranSans/IRANSans.ttf) format('truetype');
          font-display : swap;
          }

     @font-face {
          font-family  : 'IRANSansBold';
          font-style   : normal;
          src          : url(/fonts/iranSans/IRANSans_Bold.ttf) format('truetype');
          font-display : swap;
          }

     @font-face {
          font-family  : 'IRANSansLight';
          font-style   : normal;
          src          : url(/fonts/iranSans/IRANSans_Light.ttf) format('truetype');
          font-display : swap;
          }

     /* The emerging W3C standard */
     * {
          scrollbar-width : thin;
          scrollbar-color : #0000 transparent;
          }

     /* Works on Chrome/Edge/Safari */
     *::-webkit-scrollbar {
          width : 8px;
          }

     *::-webkit-scrollbar-track {
          background : transparent;
          }

     *::-webkit-scrollbar-thumb {
          background-color : #C2123C;
          border-radius    : .5rem;
          }

     ::-webkit-scrollbar-thumb:hover {
          background : #C2123C;
          }

     ::selection {
          background-color : #000;
          color            : #F5F6FA;
          }

     #nprogress .bar {
          background : ${ secondary[ 500 ] };
          }

     .MuiModal-root.MuiPopover-root.MuiMenu-root .MuiPaper-root {
          background-color : transparent;
          box-shadow       : none;
          }





`;
