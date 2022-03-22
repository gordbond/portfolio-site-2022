import React, { useEffect, useState } from 'react';
import Tiles from "../components/Tiles"
import data from "../Data";
/**
 * Home page
 * - Landing page for the app
 * @returns 
 */
export function Old() {

    const [menuVisible, setMenuVisible] = useState(true);
    const [selectedSeries, setSelectedSeries] = useState(data[0])

    const handleSelectSeries = (i) => {
        setSelectedSeries(data[i])
    }

    useEffect(() => {
        console.log(selectedSeries)
    }, [selectedSeries])

    return (
        
        <div className="top-container">
            {menuVisible &&
            <div className="side-menu">
                <ul>
                {
                data.map((series,i) => {
                    return <li 
                        key={i} 
                        className={`series-menu-item`} 
                        onClick={()=>handleSelectSeries(i)} 
                        style={series.seriesName === selectedSeries.seriesName ? {textDecoration: "underline"} : {textDecoration: "none"}}
                        value={series.seriesName}>{series.seriesName}
                        </li>
                })
                }
                </ul>
            </div>
            }
            <div className="main-container">
                <Tiles 
                    data={selectedSeries.imgs} 
                    menuVisible={menuVisible} 
                    setMenuVisible={setMenuVisible}
                    />
                    
            </div>
        </div>
    );
}

export default Old;