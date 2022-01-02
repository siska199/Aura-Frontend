import Card from "./Card";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import React, {useState, useEffect} from 'react'
import {FaArrowRight} from 'react-icons/fa'
export default function Products({latest,apiProducts}) {
    const categoriesList = ['All', 'Konsumsi', 'Pembersih']
    const [categories, setCategories] = useState(categoriesList)
    const [products, setProducts] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async()=>{
        try {
            setLoading(true)
            const res = await fetch(apiProducts)
            const data = await res.json()
            console.log(data)
            if(latest){
                setProducts(data.slice(0,8))
            }else{
                setProducts(data)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const number = [0,1,2,3,4,5,6,7]
    const Loading = ()=>{
        return(
            <div className="container-product">
                {
                    number.map(n=>(
                        <div className="col-md-3 px-4 mb-4">
                            <Skeleton height={350} />
                            <Skeleton height={30} />
                            <Skeleton height={30} />
                            <Skeleton height={30} />
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            <div className="container mt-5 text-center">
                <div className="row ">
                    <h1 className="py-2 title">Our Lat<span style={{color:"rgb(153, 113, 113)"}}>est Products</span></h1>
                </div>
            </div>
            <div style={{paddingTop:"10px",marginBottom:"30px"}} className="text-center container">

                {
                    categories && !latest &&                    
                     <>
                        {
                            categories.map((cat,i)=>(
                                <button key={i} className="btn btn-dark me-2 btn-category">
                                    {cat}
                                </button>
                            ))
                        }
                    </>
                }
            </div>
            
            {
                !loading && products?(
                    <div className="container-product">
                        {
                            products.map((product,i)=>(
                                <Card key={i} data={product}/>
                            ))
                        }
                    </div>
                ):(
                    <Loading/>
                )
            }

        </div>
    )
}
