import { filter , map , sum , uniqBy } from "lodash";
import { createSlice } from "@reduxjs/toolkit";
// utils

// ----------------------------------------------------------------------

const initialState = {
     isLoading               : false ,
     isLoadingCurrentProduct : false ,
     error                   : false ,
};

const slice = createSlice( {
     name     : "product" ,
     initialState ,
     reducers : {
     
     }
} );

// Reducer
export default slice.reducer;

// Actions
export const {
             
             
             } = slice.actions;

