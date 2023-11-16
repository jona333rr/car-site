import React, { useState } from "react";
import Fade from 'react-reveal/Fade';

import {AiOutlineArrowRight} from "react-icons/ai"

import "./Order.css";

import { Canvas } from "@react-three/fiber";
import { Loader, PresentationControls } from "@react-three/drei";
import { Stage } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";


function Maybach(props) {
    const {scene} = useGLTF("/maybach.glb");
    return <primitive object={scene} scale={0.01} {...props}/>;
}

function AMGGT(props) {
    const {scene} = useGLTF("/amgGT.glb");
    return <primitive object={scene} scale={0.01} {...props}/>;
}

function GLS(props) {
    const {scene} = useGLTF("/GLS.glb");
    return <primitive object={scene} scale={0.01} {...props}/>;
}

function G63(props) {
    const {scene} = useGLTF("/G63.glb");
    return <primitive object={scene} scale={0.01} {...props}/>;
}


function randomMonth() {
    var amountMonth = Math.floor((Math.random() * 7) + 1);
    var Months = " - Months"
    document.getElementById("demo").innerHTML = amountMonth + Months;
}


export default function Order() {

    const [show, setShow] = useState(false);

    const [show1, setShow1] = useState(false);

    const [show2, setShow2] = useState(false);

    const [show3, setShow3] = useState(false);


    const [selectedColor, setSelectedColor] = useState(null);


    const colorClicked = (color) => {
        setSelectedColor(color);
      };


    const [colPrice, setColPrice] = useState(false);
    const [colPrice2, setColPrice2] = useState(false); 
    const [colPrice3, setColPrice3] = useState(false); 
    const [colPrice4, setColPrice4] = useState(false); 


    const [wheelPrice, setWheelPrice] = useState(false);
    const [wheelPrice2, setWheelPrice2] = useState(false);
      



    const [selectedCar, setSelectedCar] = useState(null);
    const [selectedCol, setSelectedCol] = useState(null);
    const [selectedWheel, setSelectedWheel] = useState(null);



    const [carPrice, setCarPrice] = useState(0);
    const [colorPrice, setColorPrice] = useState(0);
    const [wheelP, setWheelP] = useState(0);



    let maybachPrice = 7621425;
    let amgGTPrice = 3988528;
    let glsPrice = 700000;
    let g63Price = 1599990;

    let buyRed = 22000;
    let buyBlack = 15000;
    let buyBlue = 26000;
    let buyWhite = 0;

    let stWheel = 25000;
    let comWheel = 30000;

    const handleWheelSelection = (wheel, price) => {
        setSelectedWheel(wheel);
        setWheelP(price);

        if (selectedWheel === "StWheel") stWheel = 25000;
        else if (selectedWheel === "ComWheel") comWheel = 30000;
    }


    const handleCarSelection = (car, price) => {
        setSelectedCar(car);
        setCarPrice(price);

        if (selectedCar === "S680") maybachPrice = 7621425;
        else if (selectedCar === "SL63") amgGTPrice = 3988528;
        else if (selectedCar === "GLS") glsPrice = 700000;
        else if (selectedCar === "G63") g63Price = 1599990;
    };

    const handleColorSelection = (color, price) => {
        setSelectedCol(color);
        setColorPrice(price);

        if (selectedCol === "Red") buyRed = 22000;
        else if ( selectedCol === "Black") buyBlack = 15000;
        else if (selectedCol === "Blue") buyBlue = 26000;
        else if (selectedCol === "White") buyWhite = 0;
    }

    const calculateTotalPrice = () => {
        return carPrice + colorPrice + wheelP;
    }





    return(
        <div className="OrderContainer">
  
                 <div className="OrderCarDiv">

                        <h1 className="ViewDesModel" style={{color: "#fff"}}>View desired model in 3D!</h1>


                            {show && (
                                                <Canvas dpr={[1,2]} camera={{fov: 40}} style={{position: "absolute", background: "black"}}>
                                                <PresentationControls speed={2} global polar={[-0.1, Math.PI / 4]}>
                                                <Stage environment={"sunset"}>
                                                <Maybach scale={0.2} position={[3, -0.55, 0]} rotation={[0, Math.PI / 2.6, 0]}/>
                                                </Stage>
                                                </PresentationControls>
                                                </Canvas>
                            )}


                            {show1 && (
                                                <Canvas dpr={[1,2]} camera={{fov: 10}} style={{position: "absolute", background: "black"}}>
                                                <PresentationControls speed={2} global polar={[-0.1, Math.PI / 4]}>
                                                <Stage environment={"sunset"}>
                                                <AMGGT scale={0.30} position={[-2, 0, 0]} rotation={[0, Math.PI / 2.6, 0]}/>
                                                </Stage>
                                                </PresentationControls>
                                                </Canvas>
                            )}


                            {show2 && (
                                                <Canvas dpr={[1,2]} camera={{fov: 10}} style={{position: "absolute", background: "black"}}>
                                                <PresentationControls speed={2} global polar={[-0.1, Math.PI / 4]}>
                                                <Stage environment={"sunset"}>
                                                <GLS scale={0.003} position={[1, 0, 0]}/>
                                                </Stage>
                                                </PresentationControls>
                                                </Canvas>
                            )}

                            {show3 && (
                                                <Canvas dpr={[1,2]} shadows camera={{fov: 10}} style={{position: "absolute", background: "black"}}>
                                                <PresentationControls speed={2} global polar={[-0.1, Math.PI / 4]}>
                                                <Stage environment={"warehouse"}>
                                                <G63 scale={0.30} position={[0, -0.1, 0]} rotation={[0, Math.PI / -5.8, 0]}/>
                                                </Stage>
                                                </PresentationControls>
                                                </Canvas>
                            )}


                            <div className="CheckoutForm">
                                <div style={{width: "13rem", flexDirection: "row", display: "flex", gap: "1rem", alignItems: "center"}}>
                                <h1 className="TotalDelivery" style={{color: "white"}}>Total :</h1>
                                <p className="TotalDeliveryP" style={{color: "white"}}>{calculateTotalPrice()} kr.</p>
                                </div>

                                <div style={{width: "13rem", flexDirection: "row", display: "flex", gap: "1rem", alignItems: "center"}}>
                                <h1 className="TotalDelivery" style={{color: "white"}}>Delivery:</h1>
                                <p className="TotalDeliveryP" style={{color: "white"}} id="demo"></p>
                                </div>
                            </div>
            </div>
                    




            <div className="OrderCarChange">
            <h1 className="OrderCarChangeTitel">Mercedes</h1>


            {show && (
                    <div className="OrderCarInfo">
                        <h1 style={{fontSize: "3rem"}}>Maybach S 680</h1>
                        
                        <div style={{display: "flex", flexDirection: "row", gap: "2rem", justifyContent: "center", marginTop: "0.7rem"}}>
                        <h1 style={{fontSize: "1.5rem"}}>0 - 100</h1>
                        <h1 style={{fontSize: "1.5rem"}}>HK</h1>
                        <h1 style={{fontSize: "1.5rem"}}>Top-Speed</h1>
                        </div>

                        <div style={{display: "flex", flexDirection: "row", gap: "4rem", justifyContent: "center", marginTop: "0.5rem"}}>
                        <p>3.9s</p>
                        <p>612</p>
                        <p>250 kmph</p>
                        </div>
                        <hr style={{ width: "20rem"}}/>


                        
                    </div>
            )}

            {show1 && (
                    <div className="OrderCarInfo">
                        <h1 style={{fontSize: "3rem"}}>SL 63 AMG</h1>
                        
                        <div style={{display: "flex", flexDirection: "row", gap: "2rem", justifyContent: "center", marginTop: "0.7rem"}}>
                        <h1 style={{fontSize: "1.5rem"}}>0 - 100</h1>
                        <h1 style={{fontSize: "1.5rem"}}>HK</h1>
                        <h1 style={{fontSize: "1.5rem"}}>Top-Speed</h1>
                        </div>

                        <div style={{display: "flex", flexDirection: "row", gap: "4rem", justifyContent: "center", marginTop: "0.5rem"}}>
                        <p>3.6s</p>
                        <p>585</p>
                        <p>315 kmph</p>
                        </div>
                        <hr style={{ width: "20rem"}}/>
                    </div>
            )}

            {show2 && (
                    <div className="OrderCarInfo">
                        <h1 style={{fontSize: "3rem"}}>GLS</h1>
                        
                        <div style={{display: "flex", flexDirection: "row", gap: "2rem", justifyContent: "center", marginTop: "0.7rem"}}>
                        <h1 style={{fontSize: "1.5rem"}}>0 - 100</h1>
                        <h1 style={{fontSize: "1.5rem"}}>HK</h1>
                        <h1 style={{fontSize: "1.5rem"}}>Top-Speed</h1>
                        </div>

                        <div style={{display: "flex", flexDirection: "row", gap: "4rem", justifyContent: "center", marginTop: "0.5rem"}}>
                        <p>7.0s</p>
                        <p>272</p>
                        <p>227 kmph</p>
                        </div>
                        <hr style={{ width: "20rem"}}/>
                    </div>
            )}
            
            {show3 && (
                    <div className="OrderCarInfo">
                        <h1 style={{fontSize: "3rem"}}>G63</h1>
                        
                        <div style={{display: "flex", flexDirection: "row", gap: "2rem", justifyContent: "center", marginTop: "0.7rem"}}>
                        <h1 style={{fontSize: "1.5rem"}}>0 - 100</h1>
                        <h1 style={{fontSize: "1.5rem"}}>HK</h1>
                        <h1 style={{fontSize: "1.5rem"}}>Top-Speed</h1>
                        </div>

                        <div style={{display: "flex", flexDirection: "row", gap: "4rem", justifyContent: "center", marginTop: "0.5rem"}}>
                        <p>4.2s</p>
                        <p>571</p>
                        <p>220 kmph</p>
                        </div>
                        <hr style={{ width: "20rem"}}/>
                    </div>
            )}



                <div className="OrderVariantBtns">
                <Fade>
                <button className="SelectCarVariant" onClick={() => {randomMonth(); setSelectedCar("S680"); handleCarSelection("S680", 7621425); setShow(!show); setShow1(false); setShow2(false); setShow3(false);}}>S680 - 7.621.425 kr.</button>
                <button className="SelectCarVariant" onClick={() => {randomMonth(); setSelectedCar("SL63"); handleCarSelection("SL63", 3988528); setShow1(!show1); setShow(false); setShow2(false); setShow3(false);}}>SL 63 - 3.988.528 kr.</button>
                <button className="SelectCarVariant" onClick={() => {randomMonth(); setSelectedCar("GLS"); handleCarSelection("GLS", 700000); setShow2(!show2); setShow(false); setShow1(false); setShow3(false);}}>GLS - 700.000 kr.</button>
                <button className="SelectCarVariant" onClick={() => {randomMonth(); setSelectedCar("G63"); handleCarSelection("G63", 1599990); setShow3(!show3); setShow(false); setShow1(false); setShow2(false);}}>G63 - 1.599.990 kr.</button>
                </Fade>
                </div>




                <h1 style={{marginTop: "20rem"}} className="VehicleColorTitel">Color for the vehicle:</h1>
                <hr style={{width: "18rem"}}/>




                <div className="ChangeColorDiv">
                <Fade>
                    <button className={`ChangeColorRed ${selectedColor === 'red' ? 'clicked' : ''}`} onClick={() => { setSelectedCol("Red"); handleColorSelection("Red", 22000); colorClicked('red'); setColPrice(!colPrice); setColPrice2(false); setColPrice3(false); setColPrice4(false)}}></button>
                    <button className={`ChangeColorBlack ${selectedColor === 'black' ? 'clicked' : ''}`} onClick={() => {setSelectedCol("Black"); handleColorSelection("Black", 15000); colorClicked('black'); setColPrice2(!colPrice2); setColPrice(false); setColPrice3(false); setColPrice4(false)}}></button>
                    <button className={`ChangeColorBlue ${selectedColor === 'blue' ? 'clicked' : ''}`} onClick={() => {setSelectedCol("Blue"); handleColorSelection("Blue", 26000); colorClicked('blue'); setColPrice3(!colPrice3); setColPrice2(false); setColPrice(false); setColPrice4(false)}}></button>
                    <button className={`ChangeColorWhite ${selectedColor === 'white' ? 'clicked' : ''}`} onClick={() => {setSelectedCol("White"); handleColorSelection("White", 0); colorClicked('white'); setColPrice4(!colPrice4); setColPrice2(false); setColPrice3(false); setColPrice(false)}}></button>
                </Fade>
                </div>

                {colPrice && (
                    <p className="ColorPriceP">Wine Red - 22.000 kr</p>
                )}

                {colPrice2 && (
                    <p className="ColorPriceP">Black - 15.000 kr</p>
                )}

                {colPrice3 && (
                    <p className="ColorPriceP">AMG Navy Blue - 26.000 kr</p>
                )}

                {colPrice4 && (
                    <p className="ColorPriceP">Standard White - Free</p>
                )}


                <Fade>
                <h1 style={{marginTop: "10rem"}} className="VehicleColorTitel">Choose desired wheels:</h1>
                <hr style={{width: "19.5rem"}}/>


                <div className="ChangeWheelsDiv">
                    <button className="StdWheel" onClick={() => { setSelectedWheel("StWheel"); handleWheelSelection("StWheel", 25000); setWheelPrice(!wheelPrice); setWheelPrice2(false)}}> <img src="./assets/StdWheel.png" className="StdWheelImg"></img> </button>
                    <button className="ComfWheel" onClick={() => { setSelectedWheel("ComWheel"); handleWheelSelection("ComWheel", 30000); setWheelPrice2(!wheelPrice2); setWheelPrice(false)}}> <img src="./assets/ComfWheel.png" className="ComfWheelImg"></img> </button>
                </div>
                </Fade>

                

                {wheelPrice && (
                    <p className="ColorPriceP">20″ wheels - 25.000 kr</p>
                )}

                {wheelPrice2 && (
                    <p className="ColorPriceP">21″ wheels - 30.000 kr</p>
                )}

                

                <div className="DoneOrder">
                    <button className="DoneOrderBtn">Order now <AiOutlineArrowRight style={{fontSize: "1.5rem"}}/></button>
                </div>


 
            </div>

        </div>
    )




}

