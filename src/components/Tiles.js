import React, { useEffect, useState } from 'react';
import Tile from '../components/Tile'

export function Tiles({data, menuVisible, setMenuVisible, newPage=false, smaller=false}) {

return (
            
			<div className="tiles">
				{data.map((data) => {
					return <Tile 
					key={data.id} 
					data={data} 
					menuVisible={menuVisible} 
					setMenuVisible={setMenuVisible}
					newPage={newPage}	
					smaller = {smaller}
					/>
				})}
			</div>
        );
        
}

export default Tiles;