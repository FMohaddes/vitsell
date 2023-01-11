import { filter , map , sum , uniqBy } from "lodash";
import { createSlice } from "@reduxjs/toolkit";
// utils

// ----------------------------------------------------------------------

const initialState = {
     isLoading               : false ,
     isLoadingCurrentProduct : false ,
     error                   : false ,
     products                : [] ,
     currentProduct          : {} ,
     product                 : null ,
     currentOrderId          : null ,
     sortBy                  : null ,
     filters                 : {
          gender     : [] ,
          category   : "All" ,
          colors     : [] ,
          priceRange : "" ,
          rating     : ""
     } ,
     checkout                : {
          activeStep : 0 ,
          cart       : [] ,
          subtotal   : 0 ,
          total      : 0 ,
          discount   : 0 ,
          shipping   : 0 ,
          billing    : null
     }
};

const slice = createSlice( {
     name     : "product" ,
     initialState ,
     reducers : {
          // START LOADING
          startLoading( state ) {
               state.isLoading = true;
          } ,
          
          // HAS ERROR
          hasError( state , action ) {
               state.isLoading = false;
               state.error = action.payload;
          } ,
          
          setCurrentProduct( state , action ) {
               state.isLoading = false;
               state.currentProduct = action.payload;
          } ,
          setProducts( state , action ) {
               state.isLoading = false;
               state.products = action.payload;
          } ,
          setCurrentOrderId( state , action ) {
               state.isLoading = false;
               state.currentOrderId = action.payload;
          } ,
          
          
          // CHECKOUT
          getCart( state , action ) {
               const cart = action.payload;
               
               const subtotal = sum( cart.map( ( product ) => product.price * product.quantity ) );
               const discount = cart.length === 0 ? 0 : state.checkout.discount;
               const shipping = cart.length === 0 ? 0 : state.checkout.shipping;
               const billing = cart.length === 0 ? null : state.checkout.billing;
               
               state.checkout.cart = cart;
               state.checkout.discount = discount;
               state.checkout.shipping = shipping;
               state.checkout.billing = billing;
               state.checkout.subtotal = subtotal;
               state.checkout.total = discount ? subtotal - discount : subtotal;
          } ,
          
          addCart( state , action ) {
               const product = action.payload;
               const isEmptyCart = state.checkout.cart.length === 0;
               
               if ( isEmptyCart ) {
                    state.checkout.cart = [ ...state.checkout.cart , product ];
               } else {
                    state.checkout.cart = map( state.checkout.cart , ( _product ) => {
                         const isExisted = _product.id === product.id;
                         if ( isExisted ) {
                              return {
                                   ..._product ,
                                   quantity : _product.quantity + product.quantity
                              };
                         }
                         return _product;
                    } );
               }
               state.checkout.cart = uniqBy( [ ...state.checkout.cart , product ] , "id" );
          } ,
          
          deleteCart( state , action ) {
               const updateCart = filter( state.checkout.cart , ( item ) => item.id !== action.payload );
               
               state.checkout.cart = updateCart;
          } ,
          
          resetCart( state ) {
               state.checkout.activeStep = 0;
               state.checkout.cart = [];
               state.checkout.total = 0;
               state.checkout.subtotal = 0;
               state.checkout.discount = 0;
               state.checkout.shipping = 0;
               state.checkout.billing = null;
          } ,
          
          onBackStep( state ) {
               state.checkout.activeStep -= 1;
          } ,
          
          onNextStep( state ) {
               state.checkout.activeStep += 1;
          } ,
          
          onGotoStep( state , action ) {
               const goToStep = action.payload;
               state.checkout.activeStep = goToStep;
          } ,
          
          increaseQuantity( state , action ) {
               const productId = action.payload;
               const updateCart = map( state.checkout.cart , ( product ) => {
                    if ( product.id === productId ) {
                         return {
                              ...product ,
                              quantity : product.quantity + 1
                         };
                    }
                    return product;
               } );
               
               state.checkout.cart = updateCart;
          } ,
          
          decreaseQuantity( state , action ) {
               const productId = action.payload;
               const updateCart = map( state.checkout.cart , ( product ) => {
                    if ( product.id === productId ) {
                         return {
                              ...product ,
                              quantity : product.quantity - 1
                         };
                    }
                    return product;
               } );
               
               state.checkout.cart = updateCart;
          } ,
          
          // createBilling(state, action) {
          //   state.checkout.billing = action.payload;
          // },
          
          // applyDiscount(state, action) {
          //   const discount = action.payload;
          //   state.checkout.discount = discount;
          //   state.checkout.total = state.checkout.subtotal - discount;
          // },
          
          // applyShipping(state, action) {
          //   const shipping = action.payload;
          //   state.checkout.shipping = shipping;
          //   state.checkout.total = state.checkout.subtotal - state.checkout.discount + shipping;
          // }
     }
} );

// Reducer
export default slice.reducer;

// Actions
export const {
                  setCurrentProduct ,
                  setProducts ,
                  getCart ,
                  addCart ,
                  resetCart ,
                  onGotoStep ,
                  onBackStep ,
                  onNextStep ,
                  deleteCart ,
                  deleteProduct ,
                  createBilling ,
                  applyShipping ,
                  applyDiscount ,
                  filterProducts ,
                  sortByProducts ,
                  setCurrentOrderId ,
                  increaseQuantity ,
                  decreaseQuantity
             } = slice.actions;

