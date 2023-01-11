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
     padding                     : .6rem;
     height                      : 100%;
     background                  : ${ p => p.theme.secondaryColorMain };
     background                  : linear-gradient(to right,
     ${ p => p.theme.secondaryColorMain },
     ${ p => p.theme.secondaryColorDarker });
     color                       : ${ p => p.theme.white };
     border                      : ${ p => p.theme.border.borderDark };
          // border-radius   : ${ p => p.theme.border.borderRadius2 };
     box-shadow                  : ${ p => p.theme.secondaryColorMain };
     vertical-align              : middle;
     -webkit-transform           : perspective(1px) translateZ(0);
     transform                   : perspective(1px) translateZ(0);
     -webkit-transition-duration : 0.3s;
     transition-duration         : 0.3s;
     -webkit-transition-property : transform;
     transition-property         : transform;

     &:hover, &:focus, &:active {
          -webkit-transform : rotate(3deg);
          transform         : rotate(3deg);
          }


`
