import "./ModelCar.css";

import React, { useEffect } from "react";

import { PiEngine } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { GiCarWheel } from "react-icons/gi";

export default function ModelCar() {
  return (
    <div className="ModelCarContainer">
      <div className="carHeader1">
        <h1 className="MercedesHeader">Mercedes</h1>
      </div>

      <div className="ModelsDiv">
        <div className="Car1Div">
          <div className="Car1DivInside">
            <img src="./assets/conceptCar2.jpg" className="Car1DivImg"></img>
          </div>

          <div className="Car1DivInside2">
            <h1>G63</h1>
            <hr></hr>
            <p className="CarInfoPG1">
              <PiEngine /> <SlCalender /> <GiCarWheel />{" "}
            </p>
            <p className="CarInfoPG2"> 571HK 2023 10KM</p>
            <button className="ViewCarButton">1.599.990 kr</button>
          </div>
        </div>

        <div className="Car1Div">
          <div className="Car1DivInside">
            <img src="./assets/conceptCar3.webp" className="Car1DivImg"></img>
          </div>

          <div className="Car1DivInside2">
            <h1>G65</h1>
            <hr></hr>
            <p className="CarInfoPG1">
              <PiEngine /> <SlCalender /> <GiCarWheel />{" "}
            </p>
            <p className="CarInfoPG2"> 570HK 2020 15KM</p>
            <button className="ViewCarButton">2.395.000 kr</button>
          </div>
        </div>

        <div className="Car1Div">
          <div className="Car1DivInside">
            <img src="./assets/conceptCar4.jpeg" className="Car1DivImg"></img>
          </div>

          <div className="Car1DivInside2">
            <h1>GLE</h1>
            <hr></hr>
            <p className="CarInfoPG1">
              <PiEngine /> <SlCalender /> <GiCarWheel />{" "}
            </p>
            <p className="CarInfoPG2"> 270HK 2022 15KM</p>
            <button className="ViewCarButton">749.000 kr</button>
          </div>
        </div>

        <div className="Car1Div">
          <div className="Car1DivInside">
            <img src="./assets/conceptCar5.jpeg" className="Car1DivImg"></img>
          </div>

          <div className="Car1DivInside2">
            <h1>C43</h1>
            <hr></hr>
            <p className="CarInfoPG1">
              <PiEngine /> <SlCalender /> <GiCarWheel />{" "}
            </p>
            <p className="CarInfoPG2"> 443HK 2017 10KM</p>
            <button className="ViewCarButton">690.000 kr</button>
          </div>
        </div>

        <div className="Car1Div">
          <div className="Car1DivInside">
            <img src="./assets/conceptCar6.jpeg" className="Car1DivImg"></img>
          </div>

          <div className="Car1DivInside2">
            <h1>GLS</h1>
            <hr></hr>
            <p className="CarInfoPG1">
              <PiEngine /> <SlCalender /> <GiCarWheel />{" "}
            </p>
            <p className="CarInfoPG2"> 380HK 2023 15KM</p>
            <button className="ViewCarButton">1.195.000 kr</button>
          </div>
        </div>

        <div className="Car1Div">
          <div className="Car1DivInside">
            <img src="./assets/conceptCar7.jpeg" className="Car1DivImg"></img>
          </div>

          <div className="Car1DivInside2">
            <h1>GLB</h1>
            <hr></hr>
            <p className="CarInfoPG1">
              <PiEngine /> <SlCalender /> <GiCarWheel />{" "}
            </p>
            <p className="CarInfoPG2"> 210HK 2023 10KM</p>
            <button className="ViewCarButton">700.000 kr</button>
          </div>
        </div>
      </div>
    </div>
  );
}
