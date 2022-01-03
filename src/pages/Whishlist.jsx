import React, {useEffect,useState} from 'react'
import WhislistItem from '../components/WhislistItem'
import '../css/pages/Whishlist.css'

export default function Whishlist() {
    const [products,setProducts] =useState(false) 
    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        try {
            const res = await fetch('http://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
            console.log("Data: ", data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="main-container-whishlist">
            <div className="c-title-whishlist">
                <div className="title-whishlist">Whishlist Products</div>
            </div>
            {
                products && products.map((data,i)=>(
                    <WhislistItem key={i} data={data}/>
                ))
            }
        </div>
    )
}
