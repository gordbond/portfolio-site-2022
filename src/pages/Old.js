import React, { useEffect, useState } from 'react';
import Tiles from "../components/Tiles"
import data from "../Data";
/**
 * Home page
 * - Landing page for the app
 * @returns 
 */
export function Old() {

    return (
        <div className="main-container">
            <Tiles data={data} />
        </div>
    );
}

export default Old;