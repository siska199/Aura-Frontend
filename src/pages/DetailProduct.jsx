import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import {AiTwotoneStar} from 'react-icons/ai'
import Comment from '../components/Comment'

export default function DetailProduct() {

    const [product, setProduct] =useState(false)
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        console.log(id)
        getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getProduct = async()=>{
        try {
            console.log("Oke")
            setLoading(true)
            const res = await fetch(`http://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            console.log(data)
            setProduct(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }


    const Loading = () =>{
        return(
            <div className="container-detail-product">
                <div className="container-detail-product"> 
                    <Skeleton width={500} height={400}/>                    
                </div>

                <div className="c-detail-product-text">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75}/>
                    <Skeleton height={50} width={250}/>
                    <Skeleton height={50} width={100}/>

                    <Skeleton height={150} />
                    <Skeleton height={50} width={300}/>
                </div>
            </div>
        )
    }

    return (
        <div>
                {
                    !loading && product?(
                        <div className="container-detail-product">
                            <div className="c-detail-product-img">
                                <img style={{"objectFit":"contain"}} height="400px" width="400px" src={product.image} alt={product.title}/>
                            </div>

                            <div className='c-detail-product-text'>
                                <h4 className='text-uppercase text-black-50'>
                                    {product.category}
                                </h4>
                                <h1 className='display-5'>
                                    {product.title}
                                </h1>
                                <div className="c-rating">
                                    <span className="count-rating">4 of 5</span>
                                        <AiTwotoneStar/>
                                        <AiTwotoneStar/>
                                        <AiTwotoneStar/>
                                        <AiTwotoneStar/>
                                        | <span className=""> 0 Terjual</span>

                                </div>
                                <h3 className='display-6 fw-bolder my-3'>
                                    ${product.price}
                                </h3>
                                <p className='lead desc'>
                                    {product.description}
                                </p>
                                <div>
                                    <button  className='btn btn-detail-product btn-outline-dark px-4 py-2 me-2'>
                                        Add to Cart
                                    </button>
                                    <NavLink to="/cart" className='btn  btn-detail-product btn-dark px-3 py-2'>
                                        Add to Whislist
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    ):(
                        <Loading/>
                    )
                }
                
                <div className='main-container-comments-product'>
                    <div className="c-title-comment">
                        <div className="title-section">Comment Product</div>
                    </div>

                    
                        <Comment/>
                        <Comment/>
                        <Comment/>

                </div>


            </div>
    )
}
