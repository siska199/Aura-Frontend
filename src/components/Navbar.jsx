import {Navbar, Container, Nav} from 'react-bootstrap'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {IoPersonAdd} from 'react-icons/io5'
import {IoLogIn} from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import {IoSearch} from 'react-icons/io5'
import {BsFillHandbagFill} from 'react-icons/bs'
import {BsFillSuitHeartFill} from 'react-icons/bs'
export default function NavbarComponent() {
    const [login, setLogin] = useState(false)
    let history = useHistory()
    return (
        <Navbar sticky="top" className='bg-white py-3 shadow-lg' expand="lg">
            <Container>
                <NavLink className="nav-brand" to="/">
                    <Nav.Item onClick={()=> window.scrollTo(0, 0)}  >
                        Aura
                    </Nav.Item>
                </NavLink>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="m-auto my-2 my-lg-0 "
                    navbarScroll
                >
                    <div className='container-navbar-center'>
                        <div onClick={()=>history.push('/chart-list')} className='icon-bag-container me-4'>
                            <BsFillHandbagFill color="black" className="icon-bag"/>
                            <span className='counter-bag'>0</span>
                        </div>
                        <div className="container-search">
                            <IoSearch className="search-icon" size="30px"/>
                            <input placeholder='Search product'/>
                        </div>
                        <BsFillSuitHeartFill onClick={()=>history.push('/whishlist')} color="black" className="icon-heart ms-3"/>
                    </div>
                </Nav>

                <div className=''>
                    <button onClick={()=>history.push('/login')} className='btn btn-outline-dark me-3 btn-auth'><IoLogIn size="22px" /> Login</button>
                    <button onClick={()=>history.push('/register')} className='btn btn-outline-dark btn-auth'><IoPersonAdd/> Register</button>
                </div>
                {
                    login&&
                    <div>
                        <button >Chart</button>
                        <button>Logout</button>
                    </div>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
