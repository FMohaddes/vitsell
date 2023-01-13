import React from "react"
import styled from "styled-components";


function CustomButton( { children , ...otherprops } ) {
     const c = { ...otherprops }
     
     
     return (
          <$ButtonStyles { ...otherprops }>
               { children }
          </$ButtonStyles >
     
     
     );
}

export default CustomButton;


const $ButtonStyles = styled.button`
     cursor                      : pointer;
     display                     : grid;
     grid-column-gap             : 1.6rem;
     grid-auto-flow              : column;
     justify-content             : center;
     justify-items               : center;
     align-items                 : center;
     align-content               : center;
     width                       : 100%;
     font-family                 : "IRANSansBold", sans-serif;
     font-weight                 : 700;
     padding                     : .8rem 2.4rem;
     height                      : 100%;
     background                  : ${ p => p.theme.primaryColorGradient };

     color                       : ${ p => p.theme.white };
           border-radius   : ${ p => p.theme.border.borderRadius2 };
     vertical-align              : middle;
     border: none;
     -webkit-transition-duration : 0.5s;
     transition-duration         : 0.5s;
     

     &:hover, &:focus, &:active {
          background                  : ${ p => p.theme.primaryColorLighter };
          color                  : ${ p => p.theme.primaryColorDark };

          }


`
