import Layout from "../layouts";
import styled from "styled-components";
import Header from "../components/pages/home/header";
import Banner from "../components/pages/home/banner";
import ProductsSlider from "../components/pages/home/productsSlider";
import Categories from "../components/pages/home/categories";
import SuggestedProducts from "../components/pages/home/suggestedProducts";
import Banner2 from "../components/pages/home/banner2";
import DownloadApp from "../components/pages/home/downloadApp";


function Main() {
     
     
     return (
          <$Main >
               <Banner />
               <ProductsSlider/>
               <Banner reverse={true}/>
               <Categories/>
               <SuggestedProducts/>
               <ProductsSlider popular={true}/>
               <Banner2 />
               <DownloadApp/>

          </$Main >
     );
}

export default function Home() {
     
     
     return (
          <>
               <Layout title = { "Vitsell - home page" } >
                    <$HomePageGrid >
                         <Header />
                         <Main />
                    </$HomePageGrid >
               
               </Layout >
          
          </>
     )
}

const $HomePageGrid = styled.div`
     margin : 1.8rem 0;
`;

const $Main = styled.main`
     width         : 100%;
     display       : grid;
     align-content : start;
     grid-row-gap  : 9vh;
     grid-template-columns : minmax(5%, 10%) 1fr minmax(5%, 10%);
   
     margin                : 0 auto;
`;
