import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
import pict from '../assets/comments/avatar1.png'
export default function Comment() {
    return (
        <div className="card-comment-product">
            <div className="c-prof-user-comment">
                <img className="prof-user-comment" src={pict} alt=""/>
            </div>
            <div>
                <div style={{fontWeight:"600"}}>
                    Siska
                </div>
                <div>
                    <AiTwotoneStar/>
                    <AiTwotoneStar/>
                    <AiTwotoneStar/>
                    <AiTwotoneStar/>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat sapiente saepe commodi, earum delectus ipsa totam dolore ipsam, repellendus excepturi itaque laboriosam, eius dicta maiores velit qui iusto nulla?
                </div>
            </div>
        </div>
    )
}
