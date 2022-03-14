import React, { useEffect, useState } from 'react';
import Hero from "../components/Hero";
import HeroImg from "../assets/tiger.png"
import { useNavigate } from "react-router-dom";
import Logo from "../assets/White Logo.png";
/**
 * Home page
 * - Landing page for the app
 * @returns 
 */
export function Home() {

    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate("/new")
    }

    return (
        <div class="hero-image">
            <img src={HeroImg} alt="hero"></img>
            <div className="hero-text">
                {/* <h1 className="hero-text-header">Gord Bond</h1> */}
                <div className="logo-container">
                    <img src={Logo} className="logo" alt="logo"></img>
                </div>
                <p className="hero-link" onClick={handleBtnClick}>Availble work</p>
            </div>
            
        </div>
    );
}

export default Home;