import styled from "styled-components";
import { useState } from "react";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
// import required modules
import { Swiper , SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Caption , H3 } from "../../../styles/global";
import NewsCard from "../../cards/newsCard";

export default function News() {
     const [state , setPosts]=useState([
          {
               title : "Export and import of kitchenware " ,
               info  : " BY ADMIN/ ON 11 SEP, 2022" ,
               src   : "/images/cover-geo.jpg" ,
               imageContent   : "/images/geography.jpg" ,
               id   : "354647" ,
               
               text  : "The fact that local costs for disposable containers are relatively low, in comparison to those in other countries, has long been a source of worry for the firms that provide them. This is also true of the amount that is required to satisfy the needs of customers in other countries.Naturally, it is important to point out that before engaging in any activities connected to the export of this kind of goods, the appropriate consultations should be conducted with individuals who have adequate competence in the area of shipping items to other nations.You have the option of setting the sending mechanism to the most basic level imaginable. On the other hand, in general, the export of disposable containers has the potential to bring a significant amount of foreign cash into the nation. You may pick these plastic containers and accessories for export to other nations and make a very excellent income by doing so if the manufacturing facility is extremely busy. This is one method that you can benefit from the factory’s vast activity.\n" +
                    "Today, a large number of manufacturers are engaged in the production of disposable plastic containers for export, and these manufacturers are working hard to establish best practices for the production of goods that are destined for sale in international markets.A great number of makers of containers designed for single use have been successful in selling their wares in marketplaces located in other nations. The number 392410 is the Harmonized System Code (HS Code) that World Customs uses to identify plastic cookware.",
               text2  : "                      \"Today, a large number of manufacturers are engaged in the production of disposable plastic containers for export, and these manufacturers are working hard to establish best practices for the production of goods that are destined for sale in international markets.A great number of makers of containers designed for single use have been successful in selling their wares in marketplaces located in other nations. The number 392410 is the Harmonized System Code (HS Code) that World Customs uses to identify plastic cookware.\",\n",
               
          },         {
               title : "Export and import of kitchenware " ,
               info  : " BY ADMIN/ ON 11 SEP, 2022" ,
               src   : "/images/cover2.jpg" ,
               id   : "354622" ,
               text  : "The suppliers with greatest potential to export 392410 Table/kitchenware, of plastics to World are China, Turkey and United States. Dominican Republic  . has closest export links with World. China has the highest supply capacity in 392410 Table/kitchenware, of plastics.  \n" +
                    "\n" +
                    " China shows the largest absolute difference between potential and actual exports in value terms, leaving room to realize additional exports worth $2.8 bn. ",
               
          },
          {
               title : " What’s your opinion about BPA or bisphenol A? " ,
               info  : " BY ADMIN/ ON 13 SEP, 2022" ,
               src   : "/images/cover4.jpg" ,
               id   : "354692" ,
               text  :"Are you an apposite of BPA or an indifferent person? To answer these questions, first you must know what exactly is BPA ? Follow Vista Group and learn more about BPA.\n" +
                    "\n" +
                    " What Is BPA?\n" +
                    "BPA  or bisphenol A is a chemical that is added to many commercial products, including food containers and hygiene products. These days, BPA-containing plastics are commonly used in food containers, baby bottles, and other items. BPA is also used to make epoxy resins, which are spread on the inner lining of canned food containers to keep the metal from corroding and breaking. Bisphenol A is a synthetic compound found in many plastics, as well as in the lining of canned food containers.\n" +
                    "\n" +
                    "In the past couple decades, research on BPA has exploded. A slew of studies document negative reproductive, developmental, and metabolic effects in a menagerie of wildlife — rhesus monkeys, zebrafish, nematodes, and mice. Even human studies have linked bisphenol A to a range of health issues. The compound has since become so ubiquitous that of the 2,517 people tested in the\n" +
                    "\n" +
                    ".It’s worth noting that many BPA-free products have merely replaced\n" +
                    "\n" +
                    "Centers for Disease Control and Prevention’s 2003-2004 National Health and Nutrition Examination Survey, 93 percent had detectable levels of bisphenol A in their urine. Mounting public pressure pushed companies to move away from BPA, leading to an influx of products touting their “BPA-free” status.\n" +
                    "\n" +
                    "What products contain BPA?\n" +
                    "After answering the question ” what is BPA ?”, it’s may be interesting for you to know the  which products contain BPA. Common products that may contain bisphenol A include:\n" +
                    "\n" +
                    "Items packaged in plastic containers\n" +
                    "\n" +
                    "Canned foods\n" +
                    "Toiletries\n" +
                    "Feminine hygiene products\n" +
                    "Thermal printer receipts\n" +
                    "CDs and DVDs\n" +
                    "Household electronics\n" +
                    "Eyeglass lenses\n" +
                    "Sports equipment\n" +
                    "Dental filling sealants\n" +
                    "The BPA Controversy\n" +
                    "Given the information above, many people wonder whether bisphenol A should be banned. Its use has already been restricted in the EU, Canada, China, and Malaysia — particularly in products for babies and young children.\n" +
                    "\n" +
                    "What’s the Approach?\n" +
                    ":It is difficult to avoid BPA because it is so prevalent in the environment, but some tips can help to minimize exposure\n" +
                    "\n" +
                    "check for a BPA-free label on foods and packaging\n" +
                    "buy and store foods in glass jars, not plastic\n" +
                    "use fresh, frozen, or dried products, not canned\n" +
                    "avoid microwaving foods in plastic containers\n" +
                    "do not wash plastic containers in the dishwasher or use harsh detergents on them\n" +
                    "choose wooden toys instead of plastic\n" +
                    "breast feed infants as far as possible, instead of bottle feeding\n" +
                    "BPA in different countries\n" +
                    ".Different countries have considered different approach about BPA. what are these approaches ?! follow us\n" +
                    "\n" +
                    "EUROPEAN UNION (EU) – NEW BPA MIGRATION LIMIT\n" +
                    "The toxicity profile of BPA has been studied in the EU for many years. In 2016, following new scientific data, bisphenol A was reclassified as reprotoxic category 1B, from reprotoxic category 2, by ATP-9 to Regulation (EC) 1272/2008 on ‘Classification, Labelling and Packaging of Substances and Mixtures (CLP Regulation) and its use in thermal paper was restricted by completely new entry 66 under Annex XVII of REACH. In 2017, the BPA migration limit in toys for young children, or other toys that are intended to be placed in the mouth, was strengthened 2.5-fold – from 0.1 mg/L to 0.04 mg/L – and, in February 2018, a new piece of legislation was published to expand the existing law on FCM that strengthened the bisphenol A migration limit by 12-fold, from 0.6 mg/kg to 0.05 mg/kg.",
          
          },
     
     ])
     
     
     return (
          <>
               <$Wrapper >
                    <$TextBox >
                         <Caption > Latest News.</Caption >
                         <H3 > LEARN FROM Vista</H3 >
                    </$TextBox >
                    
                    <$Items >
                         <Swiper
                              pagination = { {
                                   dynamicBullets : true ,
                              } }
                              modules = { [ Autoplay ] }
                              spaceBetween = { 30 }
                              // centeredSlides={true}
                              autoplay = { {
                                   delay                : 2500 ,
                                   disableOnInteraction : false ,
                              } }
                              breakpoints = { {
                                   "@0.00" : {
                                        slidesPerView : 1 ,
                                        spaceBetween  : 10 ,
                                   } ,
                                   "@0.75" : {
                                        slidesPerView : 2 ,
                                        spaceBetween  : 20 ,
                                   } ,
                                   "@1.00" : {
                                        slidesPerView : 2 ,
                                        spaceBetween  : 30 ,
                                   } ,
                                   "@1.50" : {
                                        slidesPerView : 3 ,
                                        spaceBetween  : 40 ,
                                   } ,
                              } }
                              // navigation={true}
                              className = "mySwiper" >
                              {
                                   state.map( ( { id , ...otherprops } ) => (
                                        <SwiperSlide >
                                             <NewsCard key = { id } id = { id }
                                                  { ...otherprops }/>
                                        </SwiperSlide >
                                   
                                   ) )
                              }
                         </Swiper >
                    </$Items >
               </$Wrapper >
          </>
     )
}

const $Wrapper = styled.section`
     grid-column    : 1/-1;
     display        : flex;
     flex-direction : column;
     padding        : 0 9% 0 10%;

`


const $TextBox = styled.div`
     display      : grid;
     grid-row-gap : 2.4rem;
     text-align   : left;
     width        : 70%;

     > * {
          :nth-child(1) {
               font-size     : 3.2rem;
               color         : ${ p => p.theme.secondaryColorMain };
               margin-bottom : -.4rem;
               }

          :nth-child(3) {

               color : ${ p => p.theme.black };
               }
          }

     h3 {
          line-height : 135%;
          color       : ${ p => p.theme.black };
          font-weight : 700;
          font-size   : 4.8rem;
          }
`
const $Items = styled.section`
     position    : relative;
     grid-column : 1/-1;
     margin-top  : 4.8rem;
     width       : 100%;

     .swiper {
          width  : 100%;
          height : 100%;
          padding-right: 1%;
          }

     .swiper-slide {
          text-align : center;
          user-select: text;

          }



`