import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'

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
            <>
                <div className="col-md-6"> 
                    <Skeleton height={400}/>                    
                </div>

                <div className="ps-4 col-md-6">
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={50} width={200}/>
                    <Skeleton height={150}/>
                    <Skeleton height={50} width={250}/>

                </div>
            </>
        )
    }

    return (
        <div className="container container-detail-product">
                {
                    !loading && product?(
                    <div className='row'>
                        <div className="col-md-6"> 
                            <img style={{"objectFit":"contain"}} height="400px" width="400px" src={product.image} alt={product.title}/>
                        </div>

                        <div className="col-md-6">
                            <h4 className='text-uppercase text-black-50'>
                                {product.category}
                            </h4>
                            <h1 className='display-5'>
                                {product.title}
                            </h1>

                            <h3 className='display-6 fw-bolder my-4 '>
                                ${product.price}
                            </h3>
                            <p className='lead'>
                                {product.description}
                            </p>
                            <button  className='btn btn-outline-dark px-4 py-2 me-2'>
                                Add to Cart
                            </button>
                            <NavLink to="/cart" className='btn btn-dark px-3 py-2'>
                                Go to Cart
                            </NavLink>
                        </div>
                    </div>
                    ):(
                        <Loading/>
                    )
                }
            </div>
    )
}
