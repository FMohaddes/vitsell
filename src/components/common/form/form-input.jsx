import styled from "styled-components";

function FormInput( { name , type , placeholder , Ref , hasIcon , Icon , ...other } ) {
     return (
          <$Wrapper >
               {/*{ Icon }*/}
     
               <$Input ref = { Ref } type = { type } placeholder = { placeholder }
                    name = { name } { ...other } icon = { hasIcon } autoComplete="off"
               />

          </$Wrapper >
     
     );
}

export default FormInput;


const $Wrapper = styled.div`
     position : relative;
     height: 100%;
     

    /* > * {
          :nth-child(1) {
               position : absolute;
               top      : 1.5rem;
               right     : 1rem;
               width    : 2.8rem;
               height   : 2.8rem;
               //fill     : ${ p => p.theme.white };
               }
          }*/
`




export const $Input = styled.input`
     color            : inherit;
     padding          :.2rem 2rem;
     background-color : ${ p => p.theme.white } ;
     border           : none;
     width            : 100%;
     //border-radius    :${ p => p.theme.border.borderRadius2 };
     height           :100%;
     font-size: 1.6rem;
     border          : ${ p => p.theme.border.borderDark };
     display          : block;
     &:-webkit-autofill,
     &:-webkit-autofill:hover,
     &:-webkit-autofill:focus,
     &:-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
          -webkit-text-fill-color: #000 !important;
          }
     &:focus {
          outline : none;
          background-color:${ p => p.theme.white };
          //border-bottom : 3px solid var(--c-green);
          }

     &:focus:invalid {
          //border-bottom : 3px solid var(--c-red);
          }

     &::-webkit-input-placeholder {
          color           : ${ p => p.theme.black };
        opacity: .5;
          font-size: 1.6rem;


          }
`
