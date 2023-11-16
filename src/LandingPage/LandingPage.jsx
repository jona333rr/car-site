import { useEffect, useState } from "react";
import "./LandingPage.css";

import {BsListUl, BsCart2} from "react-icons/bs"
import { Button} from "@mui/material";
import {Link} from "react-router-dom"





export default function LandingPage() {



    return (
        <div className="LandingPage" style={{backgroundImage:"url(./assets/carBackground.jpeg)"}}>
            <div className="LandingMainDiv">
                    <h1 className="LandingTitel">Mercedes</h1>
            </div>

            <div className="TestDiv">
            <Link to="/order" className="LandingOrderBtn">Order<BsCart2/></Link>
                <Button href="/Discover" className="LandingModelsBtn">Shoowroom</Button>
            </div>
        </div>
    )
}