import React from "react"
import styled from "styled-components";
import Image from "next/image";
import { Caption } from "../../styles/global";
import { numberSeparator } from "../../utils/formatNumber";

ProductCard.defaultProps = {
     price   : "100" ,
     title   : "همزن برقی sanford" ,
     src     : "/images/headerMobile.png" ,
     sale    : "99" ,
     percent : "50" ,
     
}

export default function ProductCard( { id,percent , title , src , price , sale , noBox } ) {
  
     return (
          <$Wrapper >
               {
             
                         <$Box >
                              
                              <$ImageBox >
                                   <Image
                                        src = { src }
                                        alt = { title }
                                        fill
                                        objectPosition = { "50% 50%" }
                                        
                                        sizes = "(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                   33vw"
                                        objectFit = { "contain" } quality = { 100 }
                                   />
                              </$ImageBox >
                              <$Info >
                               
                                   <$Price >
                                        <Caption >
                                             { numberSeparator(price) }<span>تومان</span>
                                        </Caption >
                                   
                                   </$Price >
                                   <$Sale>
                                        <div>
                                             <span>{percent}%</span>
                                        </div>
                                        <Caption >
                                             { numberSeparator(sale) }
                                        </Caption >
                                   </$Sale>
                              
                              </$Info >
                         </$Box >
                    
                    
               }
               
               {
               
               }
            
          </$Wrapper >
     
     
     );
}



const $Wrapper = styled.div`
     background          : ${ p => p.theme.greyBoxBG };
     background-size     : cover;
     height              : 100%;
     position            : relative;
     display             : flex;
     overflow            : hidden;
     align-content       : start;
     align-items         : center;
     background-size     : cover;
     background-position : top center;
     
`
const $Box = styled.div`
     height             : 100%;
     width: 100%;
     display            : grid;
     grid-template-rows : 50% 50%;
    position: relative;
`
const $ImageBox = styled.div`
     position   : absolute;
     top        : 1rem;
     right      : 0;
     width      : 100%;
     height     : 50%;
     text-align : center;

`

const $Info = styled.div`
     grid-row   : 2/3;
     margin-top : 20%;
     width: 100%;
     display    : grid;
     padding :0 1.4rem;
     align-content: start;
`
const $Price = styled.div`
     justify-self     : end;
     display: flex;
     flex-direction: column;
     align-items: end;
     p{
          font-weight: 700;
          font-size: 1.8rem;
          margin-bottom: .8rem;
          span{
               font-size: 1.2rem;
               font-weight: 100;


               }

          }




`

const $Sale=styled.div`
     display: flex;
     justify-content: space-between;
    
     p{
          font-size: 1.8rem;
          margin-bottom: .8rem;
          color        : ${ p => p.theme.textColorLight };
          font-weight: 100;
          align-self: end;
          justify-self: end;
          font-family: "IRANSansLight",sans-serif;
          position: relative;
          text-decoration-line: line-through;
          }

     div{
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
          font-size: 1.4rem;
          font-family: "IRANSansBold",sans-serif;

          color: ${ p => p.theme.white};
          background                  : ${ p => p.theme.primaryColorGradient };
          width: 4.8rem;
          height: 3rem;
          border-radius:${p => p.theme.border.borderRadius2};
          }

`


