
import constant from "../../constant/constant";

export const ProductReducer=(state={loading:true,product:[]},action)=>{
    switch(action.type){
        case constant.PRODUCT_LIST_REQUEST:
            return {loading:true};
        case constant.PRODUCT_LIST_SUCCESS:
            return {loading:false, Product:action.payload}
        case constant.PRODUCT_LIST_FAIL:
            return{loading:false, error:action.payload}
        default:
            return state
    }
}
export const ProductdetailReducer=(state={loading:true,product:[]},action)=>{
    switch(action.type){
        case constant.PRODUCT_LIST_REQUEST:
            return {loading:true};
        case constant.PRODUCT_LIST_SUCCESS:
            return {loading:false, Product:action.payload}
        case constant.PRODUCT_LIST_FAIL:
            return{loading:false, error:action.payload}
        default:
            return state
    }
}
