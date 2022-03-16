import React, { useEffect, useState } from 'react';
import Tile from '../components/Tile'

export function Tiles({data}) {

return (
            <>
            {/* <div className="overlay"></div> */}
			<div className="tiles">
				{data.map((data) => {
					return <Tile data={data} key={data.id} />
				})}
			</div>
            </>
        );
        
}

export default Tiles;