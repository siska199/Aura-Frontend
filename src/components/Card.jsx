import { NavLink } from "react-router-dom";
import {AiTwotoneStar} from 'react-icons/ai'
import {FaShoppingBag} from 'react-icons/fa'
export default function Card({data}) {
    return (
            <div  className="card-product  h-100 p-3">
                <img className="card-img-top img-product-small"  src={data.image} alt="" />

                <div className="search-container">
                    <button className="btn btn-warning btn-search">See More</button>
                </div>

                <div className="card-detail mt-4">
                    <div className="title-card text-overflow">
                            {data.title}
                    </div>
                    <div className="up-detail">
                        <div className="price fw-3">
                            0 Terjual
                        </div>

                        <div className="">
                            <AiTwotoneStar/>
                            <AiTwotoneStar/>
                            <AiTwotoneStar/>
                            <AiTwotoneStar/>
                        </div>
                    </div>

                    <div className="down-detail">
                        <div>
                            Rp. 230K
                        </div>
                        <button className="btn btn-dark btn-card-cart mt-2">Add To Cart <FaShoppingBag color="white"/> </button>

                    </div>

                </div>

            </div>       
    )
}
