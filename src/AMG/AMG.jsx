import "./AMG.css";

import React, { useState } from "react";

import { PiEngine } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { GiCarWheel } from "react-icons/gi";
import { Backdrop } from "@mui/material";

export default function AMG() {
  return (
    <div
      className="AMGCarContainer"
      style={{ backgroundImage: "url(./assets/mercedesBackground.jpeg)" }}
    >
      <div className="AMGHeader1">
        <h1 className="AMGTitel">AMG</h1>
        <div className="AMGsDiv">
          <div className="Car4Div">
            <div className="Car4DivInside">
              <img
                src="./assets/conceptCar11.avif"
                className="Car1DivImg"
              ></img>
            </div>

            <div className="Car2DivInside2">
              <h1>AMG GT 63</h1>
              <hr></hr>
              <p className="CarInfoPG1">
                <PiEngine /> <SlCalender /> <GiCarWheel />{" "}
              </p>
              <p className="CarInfoPG2"> 585HK 2023 5KM</p>
              <button className="ViewCarButton4">3.839.999 kr</button>
            </div>
          </div>

          <div className="Car4Div">
            <div className="Car4DivInside">
              <img
                src="./assets/conceptCar12.jpeg"
                className="Car1DivImg"
              ></img>
            </div>

            <div className="Car2DivInside2">
              <h1>SL 63 4MATIC+</h1>
              <hr></hr>
              <p className="CarInfoPG1">
                <PiEngine /> <SlCalender /> <GiCarWheel />{" "}
              </p>
              <p className="CarInfoPG2"> 585HK 2023 10KM</p>
              <button className="ViewCarButton4">3.988.528 kr</button>
            </div>
          </div>

          <div className="Car4Div">
            <div className="Car4DivInside">
              <img
                src="./assets/conceptCar13.jpeg"
                className="Car1DivImg"
              ></img>
            </div>

            <div className="Car2DivInside2">
              <h1>CLA 45 S 4MATIC+</h1>
              <hr></hr>
              <p className="CarInfoPG1">
                <PiEngine /> <SlCalender /> <GiCarWheel />{" "}
              </p>
              <p className="CarInfoPG2"> 421HK 2023 5KM</p>
              <button className="ViewCarButton4">1.117.909 kr</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
