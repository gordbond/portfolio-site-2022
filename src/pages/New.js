import React, { useEffect, useState } from 'react';
import Tiles from "../components/Tiles"
import data from "../Data";

/**
 * Home page
 * - Landing page for the app
 * @returns 
 */
export function New() {

    const [menuVisible, setMenuVisible] = useState(true);

    return (
        
        <div className="top-container">
            <div className="main-container">
                <Tiles 
                    data={data[0].imgs} 
                    menuVisible={menuVisible} 
                    setMenuVisible={setMenuVisible}
                />
            </div>
        </div>
    );
}

export default New;