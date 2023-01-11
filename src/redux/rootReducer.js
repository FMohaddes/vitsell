import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./slices/product";

// slices
// ----------------------------------------------------------------------

const rootPersistConfig = {
     key       : "root" ,
     storage ,
     keyPrefix : "redux-" ,
     whitelist : []
};
const productPersistConfig = {
     key       : "product" ,
     storage ,
     keyPrefix : "redux-" ,
     whitelist : [ "sortBy" , "checkout" ,"currentOrderId"]
};

const rootReducer = combineReducers( {
     // user: userReducer,
     product : persistReducer( productPersistConfig , productReducer )
} );

export { rootPersistConfig , rootReducer };
