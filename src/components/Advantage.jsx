import React from 'react'
import {FaTruckMoving} from 'react-icons/fa'
import {MdOutlinePayment} from 'react-icons/md'
import {BsFillGiftFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
export default function Advantage() {
    
    const advatages = [{
        icon : <FaTruckMoving size="30px"/>,
        title :'Free Shipping',
        detail:'Orders over 100k'
    },{
        icon : <MdOutlinePayment size="30px"/>,
        title:'Secure Payment',
        detail:'100% Secure Payment'
    },{
        icon : <BsFillGiftFill size="30px"/>,
        title:'Gift Certificae',
        detail:'Buy now 100k to 500k'
    },{
        icon : <FaUserAlt size="30px"/>,
        title:'24/7 Support',
        detail:'Ready Support'
    }]

    return (
        <div className='container-fluid container-advantage '>
            {
                advatages.map((ad,i)=>(
                    <div key={i} className="card-advantage border">
                        <div className='ca-icon'>{ad.icon}</div>
                        <div className='ca-title'>{ad.title}</div>
                        <div className='ca-detail'>{ad.detail}</div>
                    </div>
                ))
            }

        </div>
    )
}

