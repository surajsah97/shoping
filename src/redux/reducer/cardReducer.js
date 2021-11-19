import constant from "../../constant/constant";

export const cartReducer=(state={cartItem:[]},action)=>{
    switch(action.type){
        case constant.CART_ADD_ITEM:
            const item=action.payload
            const existItem=state.cartItem.find((x)=>
               ( x.product===item.Product)
            )
            if(existItem){
                return{
                    ...state,
                    cartItem:state.map(x=>x.Product===existItem.Product?item:x)
                };
            }
            else{
                return{...state,cartItem:[...state.cartItem,item]}
            }
            default:
                return state
    }
}