import styled from "styled-components";
import { device } from "../../../styles/global";

function FormInput( { name , type , placeholder , Ref , hasIcon , icon , ...other } ) {
     return (
          <$Wrapper >
               { icon }
               
               <$Input ref = { Ref } type = { type } placeholder = { placeholder }
                    name = { name } { ...other } icon = { hasIcon } autoComplete = "off"
               />
          
          </$Wrapper >
     
     );
}

export default FormInput;


const $Wrapper = styled.div`
     position        : relative;
     height          : 100%;
     display         : flex;
     justify-content : center;
     align-items     : center;
     align-content: center;

     svg {
          position : absolute;
          top      : 50%;
          transform: translate(0%, -50%);
          left     : 5%;

          }
`


export const $Input = styled.input`
     color            : inherit;
     padding         :5%;

     background-color : ${ p => p.theme.greyBoxBG };
     border           : none;
     width            : 100%;
     border-radius    : ${ p => p.theme.border.borderRadius2 };
     height           : 100%;
     font-size        : 1.4rem;
     display          : block;

     &:-webkit-autofill,
     &:-webkit-autofill:hover,
     &:-webkit-autofill:focus,
     &:-webkit-autofill:active {
          transition              : background-color 5000s ease-in-out 0s;
          -webkit-text-fill-color : ${ p => p.theme.grey } !important;
          }

     &:focus {
          outline          : none;
          background-color : ${ p => p.theme.white };
          //border-bottom : 3px solid var(--c-green);
          }

     &:focus:invalid {
          //border-bottom : 3px solid var(--c-red);
          }

     &::-webkit-input-placeholder {
          color     : ${ p => p.theme.textColorMain };
          opacity   : .5;
          font-size : 1.4rem;

          }
`
