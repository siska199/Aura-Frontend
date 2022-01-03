import React from 'react'
import {Col} from 'react-bootstrap'
import {BiTrash} from 'react-icons/bi'
import {BsFillSuitHeartFill} from 'react-icons/bs'

export default function CartItem({data}) {
    return (

        <div className="row table-item">
            <Col xl={6} md={4} sm={4} xs={4}>
                <div className="item-product-table ">
                    <div className=''>
                        <img className="img-item-table me-3" src={data.image} alt=""/>
                    </div>
                    <div className="product-column-text">
                        <div className="title-product-column">{data.title}</div>
                        <div style={{fontSize:"12px"}} className=""> {data.category}</div>
                        <div className="product-table-button my-3 text-black-50">
                            <div className="me-3 icon-table-product">
                               <BiTrash /> Remove item
                            </div>
                            <div className="icon-table-product">
                                <BsFillSuitHeartFill /> Add to favorite
                            </div>
                        </div>
                    </div>

                </div>
            </Col>
            <Col  xl={1} md={2} sm={2} xs={2}>
                Color
            </Col>
            <Col xl={1} md={2} sm={2} xs={2}>
                Size
            </Col>
            <Col xl={2} md={2} sm={2} xs={2}>
                Amount
            </Col>
            <Col xl={2} md={2} sm={2} xs={2}>
                ${data.price}
            </Col>
        </div>
    )
}

