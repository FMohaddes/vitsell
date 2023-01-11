import Layout from "../layouts";
import styled from "styled-components";
import Header from "../components/pages/home/header";
import AboutUs from "../components/pages/home/aboutus";
import CountUp from "../components/pages/home/count";
import ChooseUs from "../components/pages/home/chooseus";
import ServicesHome from "../components/pages/home/services";
import Teams from "../components/pages/home/teams";
import CallToAction from "../components/pages/home/call-to-action";
import News from "../components/pages/home/news";
import { fetchIndexProducts } from "../../lib/db/hasura";

export async function getStaticProps(context) {
     const products = await fetchIndexProducts(6);
     
     return {
          props: {
               products
          },
          revalidate: 90, // In seconds
     };
}


function Main({products}) {
 
     
     return    (
          <$Main >
               {/*<Features />*/}
               <AboutUs />
               <CountUp/>
               <ChooseUs/>
               <ServicesHome/>
               <Teams products={products}/>
               <CallToAction/>
               <News/>
          </$Main >
     );
}

export default function Home({products}) {
    
     
     return (
          <>
               <Layout title = { "Vista - home page" } >
                    <$HomePageGrid >
                         <Header />
                         <Main products={products ? products : []}/>
                    </$HomePageGrid >
               
               </Layout >
          
          </>
     )
}

const $HomePageGrid = styled.div`

`;

const $Main = styled.main`
     width                 : 100%;
     grid-column           : 1/-1;
     display               : grid;
     grid-template-columns : minmax(5%, 10%) 1fr minmax(5%, 10%);
     grid-row-gap          : 14vh;
     max-width             : 140rem;
     margin                : 0 auto;
     align-content         : start;
     @media only screen and (max-width : 40em) {
          grid-row-gap          : 8vh;

          }
`;
