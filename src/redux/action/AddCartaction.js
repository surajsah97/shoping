import axios from "axios"
import constant from "../../constant/constant";

const AddToCart=(productId,quantity)=>async(dispatch,getState)=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products/${productId}`);
   
    dispatch({
        type:constant.CART_ADD_ITEM,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            count:data.rating.count,
            Product:data.id,
            quantity
        }
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
export default AddToCart;