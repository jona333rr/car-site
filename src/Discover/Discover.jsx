import React from "react";

import "./Discover.css";
import { Button } from "@mui/material";



export default function Discover() {
    return(
        <div className="DiscoverContainer">
            <div className="DiscoverMainDiv1">
                <h1 className="MercedesHeaderDiscover">Mercedes</h1>
                <div className="MerBtnDiv">
                <Button href="/Discover/GLS/3D" variant="contained" className="Mercedes3DButton">SUV</Button>
                <Button href="/Discover/G-Class/3D" variant="contained" className="Mercedes3DButton">G-Wagon</Button>
                </div>
            </div>

            <div className="DiscoverMainDiv2">
                <h1 className="MaybachHeaderDiscover">Maybach</h1>
                <div className="MayBtnDiv">
                <Button href="/Discover/Maybach/3D" variant="contained"  className="Maybach3DButton">View more!</Button>
                </div>
            </div>
            
            <div className="DiscoverMainDiv3">
                <h1 className="AMGHeaderDiscover">AMG</h1>
                <div className="AMGBtnDiv">
                <Button href="/Discover/AMG/3D" variant="contained" className="AMG3DButton">View more!</Button>
                </div>
            </div>
            
        </div>
)
}