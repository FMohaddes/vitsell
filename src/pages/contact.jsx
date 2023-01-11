import Layout from "../layouts";
import Header from "../components/pages/home/header";
import Information from "../components/pages/contact/information";
import ContactForm from "../components/pages/contact/contact-form";
import styled from "styled-components";


export default function Contact() {
     return (
          <>
               <Layout title = { "Vista - contact page" } >
                    <Header type = "image" text = { "CONTACT US" }/>
     
                    <$Wrapper>
                         <Information/>
                         <ContactForm/>
                    </$Wrapper>
                  
               </Layout >
          
          </>
     )
}
const $Wrapper = styled.main`
     width                 : 100%;
     display               : grid;
     grid-template-columns : minmax(5%, 10%) 1fr minmax(5%, 10%);
     grid-row-gap          : 16vh;
     max-width             : 140rem;
     margin                : 0 auto;
     align-content         : start;
     @media only screen and (max-width : 40em) {
          grid-row-gap          : 10vh;

          }
`;