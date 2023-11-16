import React from "react";


import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi"


function GLS(props) {
    const {scene} = useGLTF("/GLS.glb");
    return <primitive object={scene} scale={0.01} {...props}/>;
}



export default function Discover3() {
    return(
        <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
        <Link  to="/Discover" style={{color: "black", background: "#fff", position: "absolute", left: "1rem", zIndex: 1, height: "1rem", width: "3rem", borderRadius: "1rem", border: "0", textAlign: "center", paddingTop: ".09rem"}}><BiArrowBack/></Link>
        <div style={{ position: "absolute", zIndex: 1, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <p style={{color: "#fff", fontSize: "3rem", fontFamily: "'Bebas Neue', sans-serif"}}>GLS</p>
        <p style={{color: "#fff", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", textDecoration: "underline"}}>Price: 1.195.000 kr</p>
        </div>
                <Canvas dpr={[1,2]} camera={{fov: 10}} style={{position: "absolute", background: "black"}}>
                <PresentationControls speed={2} global polar={[-0.1, Math.PI / 4]}>
                <Stage environment={"sunset"}>
                <GLS scale={0.003} position={[1, 0, 0]}/>
                </Stage>
                </PresentationControls>
                </Canvas>
        </div>
)
}