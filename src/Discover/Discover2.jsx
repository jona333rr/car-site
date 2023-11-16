import React from "react";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

import {BiArrowBack} from "react-icons/bi"
import { Link } from "react-router-dom";



function Maybach(props) {
    const {scene} = useGLTF("/maybach.glb");
    return <primitive object={scene} scale={0.01} {...props}/>;
}


export default function Discover2() {
    return(
        <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
        <Link to="/Discover" style={{color: "black", background: "#fff", position: "absolute", left: "1rem", zIndex: 1, height: "1rem", width: "3rem", borderRadius: "1rem", border: "0", textAlign: "center", paddingTop: ".09rem"}}><BiArrowBack/></Link>
        <div style={{ position: "absolute", zIndex: 1, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <p style={{color: "#fff", fontSize: "3rem", fontFamily: "'Bebas Neue', sans-serif"}}>Maybach s680</p>
        <p style={{color: "#fff", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", textDecoration: "underline"}}>Price: 7.621.425 kr</p>
        </div>
                <Canvas dpr={[1,2]} camera={{fov: 40}} style={{position: "absolute", background: "black"}}>
                <PresentationControls speed={2} global polar={[-0.1, Math.PI / 4]}>
                <Stage environment={"sunset"}>
                <Maybach scale={0.2} position={[3, -0.55, 0]} rotation={[0, Math.PI / 2.6, 0]}/>
                </Stage>
                </PresentationControls>
                </Canvas>
        </div>
)
}