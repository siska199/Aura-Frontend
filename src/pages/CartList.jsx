import {useEffect,useState} from 'react'
import CartItem from '../components/CartItem'
import {Col} from 'react-bootstrap'
export default function CartList() {
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
        <div className="main-container-cartlist">
            <div className="c-title-shopping-cart">
                <div className="title-section">Shopping cart items</div>
            </div>
            <div className="c-cartlist">
                <div className="table-product-items">
                    <HeaderTable />
                    {
                        products && products.map((data,i)=>(
                            <div key={i}>
                                <CartItem data={data}/>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
                <div className="c-summary-cartlist">
                    <div className="summary-cartlist bg-light">
                        <h5 className="display-6">Summary</h5>
                        <hr/>
                        <div className="c-item-summary">
                            <p>Total Products: </p>
                            <p>Rp 200K</p>
                        </div>

                        <div className="c-item-summary">
                            <p>Shipping costs: </p> 
                            <p>Free</p>
                        </div>

                        <div className="c-item-summary-discount mb-5">
                            <div className="fw-bolder my-2">Add promo code</div>
                            <div className="c-inp-discount">
                                <input className="inp-discount" />
                                <button className="btn btn-dark">Add Promo</button>
                            </div>
                        </div>
                        <hr/>

                        <div className="c-item-summary fw-bolder">
                            <p>Total: </p>
                            <p>Rp 500K</p>
                        </div>

                        <button className="btn btn-dark btn-checkout">CHECKOUT</button>

                    </div>
                </div>
            </div>
        </div>
    )
}


const HeaderTable = ()=>{
    return(
        <div style={{fontSize:"18px"}} className='row fw-bolder mb-4'>
            <Col xl={6} md={4} sm={4} xs={4}>
                Product
            </Col>
            <Col xl={1} md={2} sm={2} xs={2}>
                Color
            </Col>
            <Col xl={1} md={2} sm={2} xs={2}>
                Size
            </Col>
            <Col xl={2} md={2} sm={2} xs={2}>
                Amount
            </Col>
            <Col xl={2} md={2} sm={2} xs={2}>
                Price
            </Col>
        </div>
    )
}