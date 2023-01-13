import styled , { css } from "styled-components";

const ff = css`
     font-family : 'IRANSans', sans-serif;
     color       : ${ p => p.theme.textColorMain };
     line-height                 : 150%;


`



export const H1 = styled.h1`
     font-family                 : "IRANSansBold", sans-serif;
     font-weight: 900;
     ${ ff }
`

export const H2 = styled.h2`
     font-weight : bold;
     font-size   : 2rem;
     font-family                 : "IRANSansBold", sans-serif;
     ${ ff }

`

export const H3 = styled.h3`
     font-weight : 400;
     font-size   : 1.6rem;
     ${ ff }

`

export const H4 = styled.h4`
     font-weight : 900;
     font-size   : 2rem;
     
     ${ ff }

`


export const BodyIntro = styled.p`
     font-weight : 400;
     font-size   : 1.8rem;
     opacity: .8;
     :hover{
          opacity: 1;
          }
     
`


export const Caption = styled.p`
     font-weight : 500;
     font-size   : 1.4rem;
     line-height                 : 150%;

`
