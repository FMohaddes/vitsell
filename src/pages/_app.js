import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/themes/light-theme";
import darkTheme from "../styles/themes/dark-theme";
import { useEffect , useState } from "react";
import { GlobalStyle } from "../styles/global/global";
import { persistor , store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ErrorBoundary from "../utils/ErrorBoundary";
import { useRouter } from "next/router";
import NProgress from "nprogress";

NProgress.configure( { showSpinner : false } )
import "nprogress/nprogress.css";

function MyApp( { Component , pageProps } ) {
     
     const router = useRouter();
     
     useEffect( () => {
          router.events.on( "routeChangeStart" , () => NProgress.start() );
          router.events.on( "routeChangeComplete" , () => NProgress.done() );
          router.events.on( "routeChangeError" , () => NProgress.done() );
     } , [] );
     


     
     const [ theme , setTheme ] = useState( "light" );
     
     const toggleTheme = () => {
          theme === "light" ? setTheme( "dark" ) : setTheme( "light" );
     };
     return (
          <>
               <Provider store = { store } >
                    <ErrorBoundary >
                         <PersistGate loading = { null } persistor = { persistor } >
                              <ThemeProvider theme = { theme === "light" ? lightTheme : darkTheme } >
                                   {/*<CartProvider>*/ }
                                   <GlobalStyle />
                                   
                                   <Component { ...pageProps } toggleTheme = { toggleTheme } />
                                   {/*<Toaster />*/ }
                                   {/*</CartProvider>*/ }
                              </ThemeProvider >
                         </PersistGate >
                    
                    </ErrorBoundary >
               </Provider >
          </>
     );
}

// export default wrapper.withRedux(MyApp);
export default MyApp;


// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//      const handleComplete = () => {
//           setIsLoading(false);
//      };
//      router.events.on("routeChangeComplete", handleComplete);
//      router.events.on("routeChangeError", handleComplete);
//
//      return () => {
//           router.events.off("routeChangeComplete", handleComplete);
//           router.events.off("routeChangeError", handleComplete);
//      };
// }, [router]);
// return isLoading ? <Loading /> : <Component {...pageProps} />;