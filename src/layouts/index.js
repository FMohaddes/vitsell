import Head from "next/head";
import MenuBar from "./menu";
import Footer from "./footer";

export default function Layout( { title , children , keywords , description } ) {
     
     
     return (
          <>
               <Head >
                    <title >{ title }</title >
                    <meta name = "description" content = { description } />
                    <meta name = "keywords" content = { keywords } />
                    <link rel="shortcut icon" href="/logos/favicon.ico" />

               </Head >
               <MenuBar/>
     
               { children }
            <Footer/>
          </>
     
     
     )
     
}

Layout.defaultProps = {
     title : "Vitsell" ,description:"experts" ,keywords: "experts "
     
}