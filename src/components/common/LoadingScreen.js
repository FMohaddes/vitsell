import React from "react";
import styled from "styled-components";


export default function LoadingScreen( { ...other } ) {
     return (
          <>
               <SpinnerOverlay > <SpinnerContainer > </SpinnerContainer ></SpinnerOverlay >


          </>
     );
}

export const SpinnerOverlay = styled.div`
     height          : 100vh;
     width           : 100%;
     display         : flex;
     justify-content : center;
     align-items     : center;
     background-color: var(--grey-light);
`;

export const SpinnerContainer = styled.div`
     display           : inline-block;
     width             : 4rem;
     height            : 4rem;
     border            : .5rem solid var(--primary-light);
     border-radius     : 50%;
     border-top-color  : var(--primary);
     animation         : spin 1s ease-in-out infinite;
     -webkit-animation : spin 1s ease-in-out infinite;
     @keyframes spin {
          to {
               -webkit-transform : rotate(360deg);
               }
          }
     @-webkit-keyframes spin {
          to {
               -webkit-transform : rotate(360deg);
               }
          }
`;

