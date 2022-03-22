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
    const handlePaintingListbtn = () => {
        console.log("Download painting list")
    }

    return (
        
        <div className="top-container-new">
            <div className="main-container">
                <Tiles 
                    data={data[0].imgs} 
                    menuVisible={menuVisible} 
                    setMenuVisible={setMenuVisible}
                    newPage={true}
                />
            </div>
            {menuVisible &&
            <div className="btn-container">
                <button className="cv-btn" onClick={handlePaintingListbtn}>Download Painting List</button>
            </div>
            }
            
        </div>
    );
}

export default New;