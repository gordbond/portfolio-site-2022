import React, { useEffect, useState } from 'react';
import Profile from '../assets/profile-sitting.jpg';

/**
 * About page
 * - Bio, cv, picture
 * @returns 
 */
export function About() {

    return (
        <div className="main-container">
            <div className="bio-container">
            <h1>Gord Bond</h1>
            <br/>
            <div className="content-container">
                <div className="profile-pic-container">
                    <img src={Profile} alt="profile"></img>
                </div>
                <div className='bio'>
                <p>
                    Gord Bond’s paintings focus on exploring loose narratives describing the barrage of blunders
                    and absurd moments in the lives of the characters he creates. While these images resonate
                    with the chaos of everyday life, they also echo the process which guides Gord’s work. As an
                    artist focused on the materiality of paint, mistakes and destruction guide Gord’s practice. His
                    paintings are the result of numerous mistakes and wrong turns which get painted over, then
                    ruined again and again until the final composition presents itself. This process creates depth in
                    the paintings, allowing colour and texture to bleed through to the surface.Vestiges of past forms sit like bruises below the surface pushing to
                    break through.Despite the destructive process, there is humour and a sense of levity produced through the expressive and cartoon-like
                    approach to Gord’s painting.
                </p>
                <br/>
                <p>
                        Gord receives inspiration through a variety of visual sources, from Saturday morning cartoons
                    and pieces of clothing, to artists such Philip Guston, Eddie Martinez and Nicole Eisenman. A
                    common thread amongst these disparate sources of inspiration are the importance of colour
                    and form. Gord’s paintings are guided by the interaction of colour and form, often using them to
                    balance crowded and complex compositions.
                </p>
                <br/>
                <p>     
                    GORD BOND (b.1989, Hamilton, Ontario) Currently lives and works in Hamilton, Ontario.While
                    doing an undergraduate in Science at McMaster University, Gord’s love of drawing and painting
                    compelled him to switch majors to the Fine Arts. He received an Honours Bachelor of Arts
                    degree at McMaster University in 2012. Upon completion of his Undergraduate Degree, Gord
                    immediately applied and gained acceptance to York University to work towards his Masters in
                    Fine Art which he completed in 2014. Art Fairs: Zona Maco, Mexico City (2019). Solo exhibitions
                    include:‘Clutter, Chaos and Confusion’, Blackcat Art Space, Toronto (2018), ‘Almost Human
                    Nature’, Carnegie Gallery, Hamilton (2017), ‘Kin or Close Enough’, McMaster, Hamilton (2016), ‘Approximate People’, Nathaniel Hughson Gallery, Hamilton (2015), ‘Trying Not to Die’, AWOL
                    Gallery, Toronto (2014). Artist-in-residence: Self-imposed residency, Brooklyn, NYC (2018),
                    Eastside International LA (2017).
                </p>
                </div>
            </div>
            <br/>
            <button className="cv-btn">Download C/V</button>
            </div>

        </div>
    );
}

export default About;