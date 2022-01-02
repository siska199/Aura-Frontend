/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect,useState} from 'react'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jfif'
import banner3 from '../assets/banner3.jpg'

import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsArrowRightCircle} from 'react-icons/bs'


export default function Coursel() {

    const banner = [banner1,banner2,banner3]
    const [arrow, setArrow]=useState(true)
    const [index,setIndex] = useState(0)
    useEffect(()=>{
        let isMounted = true;
        const handleArrow = () => {
          if (isMounted) {
            handleWidthSize()
          }
        };

        
        window.addEventListener("resize", handleArrow);

        return () => {
          isMounted = false;
        };
    },[])



    const handleWidthSize= ()=>{
        if (window.innerWidth >830) {
            setArrow(true);
          } else {
              setIndex(1)
              setArrow(false);
          }
    }

    const leftArrow = ()=>{
        let i = index-1
        if(index==0){
            i = banner.length-1
        }
       setIndex(i)
    }
    const rightArrow = ()=>{
        let i = index+1
        if(index==banner.length-1){
            i = 0
        }
        setIndex(i)
    }
    return (
        <div className='container-banner'>
                <div style={{backgroundImage: `url(${banner[index]})`,"backgroundPosition":"10% 0%"}} className="img-banner">
                </div>

            <div className='container-hero-text'>
                <h1>ONLINE</h1>
                <h2>SHOPPING</h2>
                <h5>EXPLORE YOUR KOREAN STYLE WITH AURA</h5>
                <button className='btn btn-dark btn-banner'>Let's Start</button>
            </div>
            {
                arrow&&<>
                    <BsArrowLeftCircle onClick={()=>leftArrow()} className='left-arrow'/>
                    <BsArrowRightCircle onClick={()=>rightArrow()} className='right-arrow'/>
                </>
            }


        </div>

    )
}
