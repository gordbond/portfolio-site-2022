import React, { useEffect, useState } from 'react';

/**
 * Home page
 * - Landing page for the app
 * @returns 
 */
export function Hero() {

    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>I am John Doe</h1>
                <p>And I'm a Photographer</p>
            </div>
        </div>
    );
}

export default Hero;