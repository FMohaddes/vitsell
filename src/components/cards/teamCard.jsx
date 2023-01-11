import React , { useState } from "react"
import styled from "styled-components";
import { Caption , H3 } from "../../styles/global";
import Image from "next/image";
import CustomButton from "../common/customButtons";
import { addCart , setCurrentProduct } from "../../redux/slices/product";
import { useDispatch , useSelector } from "../../redux/store";
import { useRouter } from "next/router";


TeamCard.defaultProps = {
     title : "ALEX MONATINMO" ,
     img   : "/images/team.jpg" ,
     text  : "Project Manager" ,
     price : `€ 16.96` ,
     pack  : `Pack of 12` ,
}

function TeamCard( ...other ) {
     const { title , vari , slug,name , page , img , price,category , pack , id } = other[ 0 ]
     
     const quantity = 1
     const { checkout } = useSelector( ( state ) => state.product );
     const router = useRouter();
     const alreadyProduct = checkout.cart.map( ( item ) => item.id ).includes( id );
     
     const [ adding , setAdding ] = useState( false );
     const dispatch = useDispatch();
     
     const onAddCart = ( product ) => {
          dispatch( addCart( product ) );
     };
     // const handleClick = () => {
     //      // if (!alreadyProduct) {
     //      onAddCart(
     //           {
     //                title ,
     //                price , quantity ,
     //                subtotal : price * quantity , img ,
     //                id       : vari[ 0 ]?.id ,
     //                size     : vari[ 0 ]?.size ,
     //                color    : vari[ 0 ]?.colorName ,
     //                pack     : vari[ 0 ]?.pack ,
     //                stock    : vari[ 0 ]?.stock ,
     //           }
     //      );
     //      // }
     // }
     
     const handleClickLink = () => {
          // router.push( `/products/${ slug( name ) }${ vari[0].id.slice(5,) }` )
          router.push( `/products/${slug}`,undefined,{ shallow :  true  } )
          dispatch( setCurrentProduct( { ...other[ 0 ] } ) )
          
     }
     
     return (
          <$Wrapper >
               
               <$Box >
                    <$ImageBox >
                         <Image
                            
                             objectFit = { "cover" }
                              alt = { name } src = { img } quality = { 100 }
                              objectPosition = { "40% 60%" }
                              fill
                              sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                         />
                    </$ImageBox >
                    
                    <H3 >{ name } ({ `${ category?.trim() }`})</H3 >
                    
                    <$Attribute >
                                           <span >
                         {
                              // !page ?
                              //      <>
                              //           {vari[0]?.size!=="0" && vari[ 0 ]?.size }ml -&nbsp;
                              //           { vari[ 0 ]?.colorName }-&nbsp;
                              //           { vari[ 0 ]?.pack }&nbsp;
                              //      </>
                              //      :
                                   <>
                                        <div >
                                             {vari[0]?.size!=="0" &&
                                                  vari.filter( ( value , index , self ) =>
                                                            index === self.findIndex( ( t ) => (
                                                                 t.place === value.place && t.size === value.size
                                                            ) )
                                                  ).map( ( v , i ) =>
                                                       <>
                                                            {  vari.filter( ( value , index , self ) =>
                                                                      index === self.findIndex( ( t ) => (
                                                                           t.place === value.place && t.size === value.size
                                                                      ) )
                                                            ).length - 1 === i ? ` ${ v.size }ml ` : ` ${ v.size }ml -` }
                              
                                                       </>
                                                  )
                                             }
               
                                        </div >
                                        <div >
                                             {
                                                 vari.filter( ( value , index , self ) =>
                                                            index === self.findIndex( ( t ) => (
                                                                 t.place === value.place && t.colorName === value.colorName
                                                            ) )
                                                  ).map( ( v , i ) =>
                                                       <>
                                                            {  vari.filter( ( value , index , self ) =>
                                                                      index === self.findIndex( ( t ) => (
                                                                           t.place === value.place && t.colorName === value.colorName
                                                                      ) )
                                                            ).length - 1 === i ? ` ${ v.colorName }  ` : ` ${ v.colorName } -` }
                              
                                                       </>
                                                  )
                                             }
               
                                        </div >
                                        <div >
                                             {
                                                  vari.filter( ( value , index , self ) =>
                                                            index === self.findIndex( ( t ) => (
                                                                 t.place === value.place && t.pack === value.pack
                                                            ) )
                                                  ).map( ( v , i ) =>
                                                       <>
                                                            {  vari.filter( ( value , index , self ) =>
                                                                      index === self.findIndex( ( t ) => (
                                                                           t.place === value.place && t.pack === value.pack
                                                                      ) )
                                                            ).length - 1 === i ? ` ${ v.pack } ` :
                                                             
                                                                 
                                                                 
                                                                 ` ${ v.pack } -` }
                              
                                                       </>
                                                  )
                                             }
               
                                        </div >
                                   </>
     
     
                         }
                         
                       
                         
                    </span >
                    
                    </$Attribute >
                    <$Info >
                         <Caption >
                              €{ Intl.NumberFormat( "en-DE" ).format( vari[0]?.price ) }
                         </Caption >
                         {
                                   <$CustomButton onClick = { () => handleClickLink() } >
                                        
                                        { "Show" }
                                   
                                   </$CustomButton >
                                 
                                   // <$CustomButton onClick = { handleClick } >
                                   //
                                   //      { "Add to cart" }
                                   //
                                   // </$CustomButton >
                         }
                    
                    </$Info >
               </$Box >
          
          </$Wrapper >
     
     
     );
}


export default TeamCard;

const $Wrapper = styled.section`



`

const $Box = styled.div`
     background   : ${ p => p.theme.secondaryColorMain };
     padding      : 3.2rem;
     display      : grid;
     border       : ${ p => p.theme.border.borderDark };
     position     : relative;
     grid-row-gap : .8rem;

     text-align   : center;

     h3 {
          margin-top  : 2rem;
          font-weight : 700;
          font-size   :2.4rem;
          color       : ${ p => p.theme.white };
          }

     p, span {
          margin-bottom : 1.2rem;
          font-size     : 1.8rem;
          font-weight   : 500;
          color         : ${ p => p.theme.black };
          line-height   : 120%;
          }

     p {
          font-weight : 700;

          font-size   : 3.2rem;

          }


`
const $Attribute = styled.div`

     div {
          text-align      : center;
          display         : grid;
          grid-row-gap    : -.6rem;
          justify-content : space-between;
          align-content   : center;
          align-items     : center;
          text-transform  : capitalize;
          width: 100%;
          }


`
const $Info = styled.div`

     display         : grid;
     grid-auto-flow  : column;
     grid-column-gap : .6rem;
     justify-content : space-between;
     align-content   : center;
     align-items     : center;
     justify-items   : center;


`
const $ImageBox = styled.div`
     width        : 100%;
     justify-self : center;
     position     : relative;
     height       : 35rem;
     @media only screen and (max-width : 40em) {
          height : 40rem;

          }

     > * {

          -webkit-filter : drop-shadow(10px 2px 0 black) drop-shadow(-2px -2px 0 black);
          filter         : drop-shadow(10px 10px 0 black) drop-shadow(-10px -10px 0 black);

          }

`
const $CustomButton = styled( CustomButton )`
     background : ${ p => p.theme.black };
     color      : ${ p => p.theme.white };
     height     : 4.5rem;

     font-size  : 2rem;
     width      : 10rem;

     a {
          color : ${ p => p.theme.white };

          }

     p {

          color : ${ p => p.theme.white };
          }

`
