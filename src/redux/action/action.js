import axios from "axios";
import constant from "../../constant/constant"

export const ListProduct=()=>async(dispatch)=>{
dispatch({
    type:constant.PRODUCT_LIST_REQUEST
})
try{
const {data}=await axios.get("https://fakestoreapi.com/products");
dispatch({type:constant.PRODUCT_LIST_SUCCESS,payload:data})
}

catch(err){
    dispatch({type:constant.PRODUCT_LIST_FAIL,payload:err.massage})

}
}

export const detailProduct=(productId)=>async(dispatch)=>{
    dispatch({type:constant.PRODUCT_LIST_REQUEST,payload:productId})
    try{const {data}=await axios.get(`https://fakestoreapi.com/products/${productId}`)
    dispatch({type:constant.PRODUCT_LIST_SUCCESS,payload:data})
}


catch(err){
    dispatch({type:constant.PRODUCT_LIST_FAIL,payload:err.response&&err.response.data.massage ?err.response.data.massage:err.massage})

}
    
}