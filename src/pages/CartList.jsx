import {useEffect,useState} from 'react'

export default function CartList() {
    const [data,setData] =useState(false)
    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        try {
            const res = await fetch('http://fakestoreapi.com/products')
            const data = await res.json()
            console.log("Data: ", data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {
                data && 
                <>

                </>
            }
        </div>
    )
}
