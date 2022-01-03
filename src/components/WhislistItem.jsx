import React from 'react'
import {IoCloseCircle} from 'react-icons/io5'
export default function WhislistItem({data}) {
    return (
        <div className="card-whishlist">
            <div className="c-img-whishlist me-4">
                <img className="img-whishlist" src={data.image} alt="" />
                <div className="remove-whishlist">
                    <IoCloseCircle color="black" size="30px"/>
                </div>
            </div>

            <div className="c-text-whishlist">
                <div className="display-6" style={{fontSize:"20px",fontWeight:"500"}}>{data.title}</div>
                <div>${data.price}</div>
                <div style={{fontSize:"18px"}}>Stock: 10</div>
            </div>
        </div>
    )
}
