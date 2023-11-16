import "./Maybach.css"

import React, { useState } from "react";


import { PiEngine } from "react-icons/pi";
import {SlCalender} from "react-icons/sl";
import {GiCarWheel} from "react-icons/gi";
import { Backdrop } from "@mui/material";






export default function Maybach() {
    return(        
        <div className="MaybachCarContainer" style={{backgroundImage: "url(./assets/mercedesBackground.jpeg)"}}> 
            <div className="MaybachHeader1">
            <h1 className="MaybachTitel">Maybach</h1>
            <div className="MaybachsDiv">
            <div className="Car2Div" >
                <div className="Car2DivInside">
                <img src="./assets/conceptCar8.jpeg" className="Car1DivImg"></img>
                </div>

                <div className="Car2DivInside2">
                <h1>Maybach S600</h1>
                <hr></hr>
                <p className="CarInfoPG1"><PiEngine/> <SlCalender/> <GiCarWheel/> </p>
                <p className="CarInfoPG2"> 530HK 2023 10KM</p>
                <button className="ViewCarButton2">3.400.000 kr</button>
                </div>
            </div>


            <div className="Car3Div">
            <div className="Car3DivInside">
                <img src="./assets/conceptCar9.jpeg" className="Car1DivImg"></img>
                </div>

                <div className="Car3DivInside2">
                <h1>Maybach S680</h1>
                <hr></hr>
                <p className="CarInfoPG1"><PiEngine/> <SlCalender/> <GiCarWheel/> </p>
                <p className="CarInfoPG2"> 612HK 2023 15KM</p>
                <button className="ViewCarButton3">7.621.425 kr</button>
                </div>
            </div>

            <div className="Car2Div">
                <div className="Car2DivInside">
                <img src="./assets/conceptCar10.jpeg" className="Car1DivImg"></img>
                </div>

                <div className="Car2DivInside2">
                <h1>Maybach S580</h1>
                <hr></hr>
                <p className="CarInfoPG1"><PiEngine/> <SlCalender/> <GiCarWheel/> </p>
                <p className="CarInfoPG2"> 503HK 2023 10KM</p>
                <button className="ViewCarButton2">5.068.342 kr</button>
                </div>
            </div>

            </div>
            </div>
        </div>
    )
}