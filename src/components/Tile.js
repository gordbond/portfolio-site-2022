import React, { useEffect, useState } from 'react';


export function Tile({data}) {

	const toggleMouseOver = (e) => {
		e.preventDefault();
        setMouseOver(v=>!v);
    }
    const [open, setOpen] = useState(false)
    const [mouseOver, setMouseOver] = useState(false)

	const clickHandler = (e) => {
		e.preventDefault();
        setOpen(v => !v);
	}


		// Modify styles based on state values
		let tileStyle = {};
		let headerStyle = {};
		let zoom = {};
        if (open) {
            tileStyle = {
                width: '62vw',
                display: 'block',
                margin: '30px auto',
                boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
                transform: 'none',
                zIndex: '100'
            };
        } else {
            tileStyle = {
                width: '18vw',
                height: '18vw',
                backgroundImage: `url("${data.image}")`,
            };
        }

		return (
			<div className="tile">
                {open ?
                <>
                <div className="overlay">
                    <div className="tile-img-container">  
                        <img
                            onMouseEnter={toggleMouseOver}
                            onMouseLeave={toggleMouseOver}
                            onClick={clickHandler}
                            src={data.image}
                            alt={data.name}
                            style={tileStyle}
                        />
                        
                    </div>
                    <div className="caption">
                        <p>{data.name}</p>
                    </div>
                </div>
                
                
                </>
                :
                <div className="tile-container">
                    <div 
                        className="sq-tile" 
                        style={tileStyle}
                        onMouseEnter={toggleMouseOver}
                        onMouseLeave={toggleMouseOver}
                        onClick={clickHandler}
                        >
                    </div> 
                </div>
                }
			</div>
		);
        
}

export default Tile;