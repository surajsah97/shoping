import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './componenet/Rating';

const Productss = (props) => {
    const {Product}=props
    console.log(Product);
    return (<>
        {Product.map((prod)=>{
            return(
        <div key={prod.id} className="card">
        <a href={`/product/"${prod.id}"`} Products={prod}><img className="medium" src={prod.image} alt="product"/></a>
        <div className="card-body">
 
            <a href={`product/${prod.id}`}>
                <h2>{prod.title}</h2>
            </a>
            {/* <Rating prod={prod.rating.rate}/> */}
            {<span>
                    <i className="fa fa-star"></i>
                </span>}
            <div className="price">
                {prod.price}
            </div>
            <div className="discription">
                {prod.description}
            </div>
        </div>
    </div>
        )})}
        </>
    )
}
export default Productss;