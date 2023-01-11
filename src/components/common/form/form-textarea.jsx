import React from 'react'
import styled from "styled-components";


function FormTextarea( { placeholder , rows="10" , ...otherProps } ) {
     return (
          < >
               <$Textarea placeholder = { placeholder } rows = { rows } { ...otherProps }/>
          </ >
     );
}

export default FormTextarea;

export const $Textarea = styled.textarea`
     width            : 100%;
     font-size        : 1.6rem;
     line-height      : 2rem;
     transition       : all .2s;
     border           : none;
     resize           : none;
     border          : ${ p => p.theme.border.borderDark };
     background-color : ${ p => p.theme.white } ;

     padding          :2rem 2rem;


     &:focus {
          outline : none;
          background-color:${ p => p.theme.white };
          }

     &::-webkit-input-placeholder {
          color           : ${ p => p.theme.black };
          opacity: .5;
          font-size: 1.6rem;
          }
`
