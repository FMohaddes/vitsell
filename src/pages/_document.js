import Document , { Head , Html , Main , NextScript } from "next/document";
import { ServerStyleSheet , StyleSheetManager } from "styled-components";
import stylisRTLPlugin from "stylis-plugin-rtl";

class MyDocument extends Document {
     static async getInitialProps( ctx ) {
          const sheet = new ServerStyleSheet();
          const originalRenderPage = ctx.renderPage;
          
          try {
               ctx.renderPage = () =>
                    originalRenderPage( {
                         enhanceApp : ( App ) => ( props ) =>
                              sheet.collectStyles(
                                   <StyleSheetManager
                                        stylisPlugins = { ctx?.locale === "fa" && [ stylisRTLPlugin ] }
                                   >
                                        <App { ...props } />
                                   </StyleSheetManager >
                              ) ,
                    } );
               const styleTags = sheet.getStyleElement();
               const initialProps = await Document.getInitialProps( ctx );
               return {
                    ...initialProps ,
                    styleTags ,
                    styles : (
                         <>
                              { initialProps.styles }
                              { sheet.getStyleElement() }
                         </>
                    ) ,
               };
          } finally {
               sheet.seal();
          }
     }
     
     render() {
          // const { __NEXT_DATA__ } = this.props;
          // const dir = __NEXT_DATA__.locale === "fa" ? "rtl" : "ltr";
          const dir = 'rtl';
          return (
               <Html dir = { dir } lang = {"fa-IR" } >
                    <Head >
                         { this.props.styleTags }
                         <link
                              rel="preload"
                              href={'/fonts/iranSans/IRANSans.ttf'}
                              as="font"
                              crossOrigin="anonymous"
                         />
                         <link
                              rel="preload"
                              href={'/fonts/iranSans/IRANSans_Bold.ttf'}
                              as="font"
                              crossOrigin="anonymous"
                         />       <link
                              rel="preload"
                              href={'/fonts/iranSans/IRANSans_Light.ttf'}
                              as="font"
                              crossOrigin="anonymous"
                         />
                    
                    </Head >
                    <body >
                         <Main />
                         <NextScript />
                    </body >
               </Html >
          );
     }
}

export default MyDocument;
