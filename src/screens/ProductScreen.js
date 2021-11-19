import { Link, useHistory } from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import Rating from '../componenet/Rating';
import Product from "../product"
import { useDispatch, useSelector } from 'react-redux';
import { LoadingBox } from '../componenet/LoadingBox';
import { MassageBox } from '../componenet/MassageBox';
import { detailProduct } from '../redux/action/action';
export const ProductScreen = (props) => {
    // const history=useHistory()
    const dispatch=useDispatch()
    const productid=props.match.params.id
    const a=productid.replace('"',"")
    console.log(a.replace('"',""));
    const [quantity, setquantity] = useState(1)
    const productdetail = useSelector(state => state.productdetail)
    const {loading,error,Product}=productdetail
    console.log(productdetail);
    useEffect(()=>{
        dispatch(detailProduct(a.replace('"',"")))
     },[dispatch,productid])

     const handleAddtocard=()=>{
         props.history.push(`/cart/${productid}?qty=${quantity}`)
     }
 
    console.log(Product);
    return (
        <div>
        {loading?<LoadingBox></LoadingBox>:
        error?<MassageBox>{error}</MassageBox>:
        <div className="raw center">
            <div>
            <a href="/">Back to home</a>
            <div className="raw top">
                <div className="col-2">
                    <img className="large" src={Product.image} alt="product"/>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>
                            {Product.title}</h1>
                        </li>
                        <li><Rating prod={Product.rating.rate}/></li>
                        <li>Price:{Product.Price}</li>
                        <li> Discription: {Product.description}</li>
                    </ul>

                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                            <div className="raw">
                            <div className="price">
                                    Price
                                </div>
                                <div className="price">
                                    {Product.price}
                                </div>
                                </div></li>
                            <li>
                            <div className="raw">
                                
                                    Status
                                
                                    <div>
                                    {Product.rating.count>0?<div><span className="success">IN STOCK</span>
                                   
                                   <li><div>Qty</div><div><select value={quantity} onChange={(event)=>{setquantity(event.target.value)}}>
                                      { [...Array(Product.rating.count).keys()].map((x)=>(<option key={x+1} value={x+1}>{x+1}</option>))}
                                       </select></div></li><li> <button onClick={handleAddtocard} className="primary block"> Add To Cart</button></li></div>:
                                    <span className="error">OUT OF STOCK</span>}
                                    </div>
                                
                                </div>
                            </li>
                            


                        </ul>
                    </div>

                </div>


            </div>
        </div>
        </div>

        }
        </div>
        
    )}

 export default ProductScreen;