import React, { useEffect, useState } from 'react';
import Tile from '../components/Tile'

export function Tiles({data, menuVisible, setMenuVisible}) {

return (
            
			<div className="tiles">
				{data.map((data) => {
					return <Tile 
					key={data.id} 
					data={data} 
					menuVisible={menuVisible} 
					setMenuVisible={setMenuVisible}/>
				})}
			</div>
        );
        
}

export default Tiles;