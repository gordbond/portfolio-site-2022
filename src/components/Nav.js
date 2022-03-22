import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from "../assets/longname.png";
/**
 * Navbar for the app. 
 * @returns 
 */

export default function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleBtnClick = () => {
        navigate("/")
    }

    useEffect(()=>{
        console.log("LOCATION: ", location.pathname)
    },[])

    return (
        <div className="header-bar">
            <nav className='navbar' role="navigation" aria-label="main navigation">
                <div className="nav-container">
                    <NavLink to="/old" activeclassname='active'>Old</NavLink>
                    <NavLink to="/new" activeclassname='active'>New</NavLink> 
                    {/* <NavLink to="/next" activeclassname='active'>Next</NavLink>             */}
                </div>
            </nav>
            {/* <h1 className="logo" onClick={handleBtnClick}>Gord Bond</h1> */}
            { location.pathname !== '/' &&
                <div className="header-logo-container">
                    <img onClick={handleBtnClick} src={Logo} className="header-logo" alt="logo"></img>
                </div>
            }
            {/* <h1 className="logo" onClick={handleBtnClick}></h1> */}
            <nav className='navbar right-side-nav' role="navigation" aria-label="main navigation">
                <div className="nav-container">
                    <NavLink to="/about" activeclassname='active'>About</NavLink>          
                </div>
            </nav>
        </div>
    )
}