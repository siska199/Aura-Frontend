import React from 'react'
import cat1 from '../assets/Dress.jfif'
import cat2 from '../assets/Jacket.png'
import cat3 from '../assets/T-Shirt.jfif'
import cat4 from '../assets/hoodie.jfif'

export default function Categories() {

    const categories = [{
        img : cat1,
        h1 : 'Dress',
        p: 'Consequuntur ex quo, dolore, modi quis cum minus dolor nihil architecto soluta blanditiis quod.'
    },{
        img : cat2,
        h1 : 'Jacket',
        p: 'Consequuntur ex quo, dolore, modi quis cum minus dolor nihil architecto soluta blanditiis quod.'

    },{
        img : cat3,
        h1 : 'T-Shirt',
        p: 'Consequuntur ex quo, dolore, modi quis cum minus dolor nihil architecto soluta blanditiis quod.'
    },{
        img : cat4,
        h1 : 'Hoodie',
        p: 'Consequuntur ex quo, dolore, modi quis cum minus dolor nihil architecto soluta blanditiis quod.'
    }]

    return (
        <div className='main-container-cat'>
            <div className='container-title text-center my-4'>
                <h1 className="py-2 title pb-5">Our Cat<span style={{color:"rgb(153, 113, 113)"}}>egories</span></h1>
            </div>

            <div className='container-fluid container-card-cat'>

                {
                    categories.map((cat,i)=>(
                        <div className='card-cat mb-5'>
                            <div className="card-cat-img">
                                <img src={cat.img} alt=""/>
                            </div>
                            <div className='card-cat-text'>
                                <h1>{cat.h1}</h1>
                                <p className='lead text-center'>{cat.p}</p>
                                <button className='btn btn-explore-cat mt-2'>Explore Now</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
