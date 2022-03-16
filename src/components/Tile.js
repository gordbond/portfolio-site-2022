import React, { useEffect, useState } from 'react';


export function Tile({data}) {

	// constructor(props) {
	// 		super(props);
	// 		this.state = {
	// 			open: false,
	// 			mouseOver: false
	// 		};
	// 		// Bind properties to class instance
	// 		this._clickHandler = this._clickHandler.bind(this);
	// 		this._mouseEnter = this._mouseEnter.bind(this);
	// 		this._mouseLeave = this._mouseLeave.bind(this);
	// 	}
	// 	// Event handlers to modify state values

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
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '0',
                marginTop: '-31vw',
                marginLeft: '-31vw',
                boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
                transform: 'none',
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