import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AddToCart from "../redux/action/AddCartaction"
const CartScreen = (props) => {
    const productId=props.match.params.id
    console.log(props.location.search);
    const quantity=props.location.search?Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch()
    useEffect(() => {
        if(productId){
            dispatch(AddToCart(productId,quantity))
        }
        
    }, [productId,quantity])

    return (
        <div>
            <h1>Cart screen</h1>
            <p>
                ADD TO CART :ProductID:{productId} Qty:{quantity}
            </p>
            
        </div>
    )
}
export default CartScreen;