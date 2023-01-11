import Layout from "../layouts";
import Header from "../components/pages/home/header";
import styled from "styled-components";
import { BodyIntro , Caption , H4 } from "../styles/global";
import React , { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch , useSelector } from "../redux/store";
import {
     InsertOrder ,
     InsertOrderItems ,
     UpdateOrderStatus ,
     updateProductContent
} from "../../lib/db/hasura";
import { resetCart } from "../redux/slices/product";
import Image from "next/image";


export default function Success() {
     const { checkout , currentOrderId } = useSelector( ( state ) => state.product );
     const dispatch = useDispatch();
     
     
     const { cart , total , discount , subtotal } = checkout;
     const router = useRouter()
   
     const changeQuantityFunc = async () => {
          
          try {
               const res = await cart.map( async ( { id , stock , quantity } ) => {
                    await updateProductContent( id , stock - quantity );
               } )
               const resStatus = await UpdateOrderStatus( currentOrderId , 1 );
               
          } catch (error) {
               console.log( error );
          }
     }
     
     
     useEffect( () => {
          changeQuantityFunc();
          
          return () => {
               dispatch( resetCart() )
          }
     } , [] );
     
     return (
          <>
               <Layout title = { "Vista - success page" } >
                    <Header type = "image" text = { "SUCCESS" } />
                    <$Wrapper >
                         
                         <$TextBox >
                              <Caption >
                                   {
                                        router.query.session_id ?
                                             "SUCCESSFULLY PAID"
                                             :
                                             "SUCCESSFULLY RECEIVED"
                                        
                                   }
                              </Caption >
                              {/*<H3 >*/ }
                              {/*     WE ARE A MULTIPURPOSE COMPANY*/ }
                              {/*</H3 >*/ }
                              <BodyIntro >
                                   {
                                        router.query.session_id ?
                                             "" :
                                             "WE WILL CONTACT YOU SOON"
                                        
                                   }
                              </BodyIntro >
                         </$TextBox >
                         <$Orders >
                              {
                                   cart.map( ( {
                                                    id ,
                                                    img ,
                                                    name ,
                                                    stock ,
                                                    title ,
                                                    color ,
                                                    size ,
                                                    pack ,
                                                    subtotal ,
                                                    price ,
                                                    quantity
                                               } ) => {
                                        
                                        return <$Order >
                                             <$ImageBox >
                                                  <Image
                                                       layout = "fill" objectFit = { "cover" }
                                                       alt = { title } src = { img } quality = { 30 }
                                                  
                                                  />
                                             </$ImageBox >
                                             <H4 >
                                                  { name }
                                                  { ` (${ size } ml - ${ color } - ${ pack }) ` }
                                             
                                             </H4 >
                                             
                                             <Caption >
                                                  €{ Intl.NumberFormat( "en-DE" ).format( price ) }
                                             </Caption >
                                        
                                        </$Order >
                                        
                                        
                                   } )
                              }
                              <hr />
                         
                         </$Orders >
                    
                    </$Wrapper >
               
               </Layout >
          
          </>
     )
}
const $Wrapper = styled.main`
     grid-column           : 2/3;
     width                 : 100%;
     display               : grid;
     grid-row-gap          : 16vh;
     margin                : 0 auto 30vh;
     grid-template-columns : minmax(5%, 10%) 1fr minmax(5%, 10%);

     @media only screen and (max-width : 40em) {
          grid-row-gap : 10vh;

          }
`;
const $TextBox = styled.div`
     text-align       : center;
     display          : grid;
     grid-row-gap     : 2.4rem;
     width            : 100%;
     background-color : ${ p => p.theme.secondaryColorMain };
     padding          : 5%;
     grid-column      : 2/3;
     grid-row         : 1/2;

     > * {
          :nth-child(1) {
               width     : 100%;
               font-size : 4rem;
               color     : ${ p => p.theme.white };
               }

          :nth-child(2) {
               color       : ${ p => p.theme.white };
               line-height : 120%;

               }
          }


`
const $Orders = styled.div`
     display      : grid;
     overflow-x   : auto;
     grid-row-gap : 2.4rem;
     overflow-y   : auto;
     width        : 100%;
     text-align   : center;
     //justify-items: center;
     grid-column  : 2/3;
     grid-row     : 2/3;

     h4 {
          color      : ${ p => p.theme.black };
          text-align : justify;

          }

     hr {
          margin        : 0 auto;
          align-content : center;
          width         : 100%;
          background    : ${ p => p.theme.primaryColorDarker };
          border        : .0 .1rem solid transparent;
          }

     p {
          font-size : 2.4rem;
          }

     span {
          cursor    : pointer;
          font-size : 3.5rem;
          margin    : 0 1.6rem;

          :hover {
               color : ${ p => p.theme.secondaryColorMain };
               }
          }

`
const $Order = styled.div`
     display               : grid;
     grid-auto-flow        : column;
     grid-template-columns :repeat(3, 33%);
     justify-content       : start;
     align-content         : center;
     align-items           : center;
     width                 : 100%;
     margin-bottom         : 3.2rem;
     @media only screen and (max-width : 62em) {
          width : 80rem;

          }

`

const $ImageBox = styled.div`

     justify-self : center;
     position     : relative;
     height       : 20rem;
     width        : 80%;
     @media only screen and (max-width : 40em) {
          height : 15rem;

          }

     > * {

          -webkit-filter : drop-shadow(5px 5px 0 #F58220) drop-shadow(-5px -5px 0 #F58220);
          filter         : drop-shadow(5px 5px 0 #F58220) drop-shadow(-5px -5px 0 #194780);

          }

`