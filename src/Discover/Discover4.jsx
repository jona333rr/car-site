import React from "react";



import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi"




function G63(props) {
    const {scene} = useGLTF("/G63.glb");
    return <primitive object={scene} scale={0.01} {...props}/>;
}





export default function Discover4() {
    return(
        <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
        <Link  to="/Discover" style={{color: "black", background: "#fff", position: "absolute", left: "1rem", zIndex: 1, height: "1rem", width: "3rem", borderRadius: "1rem", border: "0", textAlign: "center", paddingTop: ".09rem"}}><BiArrowBack/></Link>
        <div style={{ position: "absolute", zIndex: 1, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <p style={{color: "#fff", fontSize: "3rem", fontFamily: "'Bebas Neue', sans-serif"}}>G63</p>
        <p style={{color: "#fff", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", textDecoration: "underline"}}>Price: 1.599.990 kr</p>
        </div>
                <Canvas dpr={[1,2]} shadows camera={{fov: 10}} style={{position: "absolute", background: "black"}}>
                <PresentationControls speed={2} global polar={[-0.1, Math.PI / 4]}>
                <Stage environment={"warehouse"}>
                <G63 scale={0.30} position={[0, -0.1, 0]} rotation={[0, Math.PI / -5.8, 0]}/>
                </Stage>
                </PresentationControls>
                </Canvas>
        </div>
)
}