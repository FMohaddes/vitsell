import Layout from "../layouts";
import Header from "../components/pages/home/header";
import styled from "styled-components";
import AboutUsContent from "../components/pages/about/aboutusContent";
import Clients from "../components/pages/about/clients";


export default function About() {
     return (
          <>
               <Layout title = { "Vista - about page" } >
                         <Header type = "image" text = { "ABOUT US" }/>
                    <$Wrapper>
                    <AboutUsContent />
                         <Clients/>

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
     margin                : 0 auto 30vh;
     align-content         : start;
     @media only screen and (max-width : 40em) {
          grid-row-gap          : 10vh;

          }
`;