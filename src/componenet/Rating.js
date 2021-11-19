import React from 'react'

const Rating = ({prod}) => {
    return (<>
        <div className="rating">
                <span>
                    <i className="fa fa-star"></i>
                </span>
                <span>
                    <i className="fa fa-star"></i>
                </span><span>
                    <i className="fa fa-star"></i>
                </span><span>
                    <i className="fa fa-star"></i>
                </span><span>
                    <i className="fa fa-star"></i>
                </span>

                <span> {prod.Rating} Reviews</span>
            </div></>
    )
}
 export default Rating;