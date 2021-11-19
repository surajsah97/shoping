import { combineReducers } from "redux";
import { cartReducer } from "./cardReducer";
import {ProductReducer,ProductdetailReducer } from "./reducer";

const Rootreducer=combineReducers({
    Productlist:ProductReducer,
    productdetail:ProductdetailReducer,
    cart:cartReducer
})
export default Rootreducer;