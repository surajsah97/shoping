import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import Product from "../product";
// import product from "../componenet/Data"
import { LoadingBox } from '../componenet/LoadingBox';
import { MassageBox } from '../componenet/MassageBox';
import Productss from '../Productss';
import {ListProduct} from '../redux/action/action';

const HomeScreen = () => {
    const dispatch=useDispatch()
    const data = useSelector(state => state.Productlist)
    console.log(data);
    const{loading,error,Product}=data
    useEffect(()=>{
       dispatch(ListProduct())
    },[dispatch])

    // const [data] = useState(Product)
    return (<div>
        {loading?<LoadingBox></LoadingBox>:
        error?<MassageBox>{error}</MassageBox>:
        <div className="raw center">
        <Productss key={Product.id} Product={Product}/> 
        {/* <ProductScreen Product={Product}/> */}
        
        </div>}
        </div>
    )
}
export default HomeScreen;