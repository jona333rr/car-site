import { useState } from "react";
import "./NavBar.css";
import { Button } from "@mui/material";



export default function NavBar() {

    const [drop, setDrop] = useState(false);

    


    return (
        <div className="NavBarContainer">
            <div className="NavBarButtons1">
                <Button href="/" className="HomeBtn">Home</Button>

                <Button className="ModelsBtn" onClick={() => setDrop(!drop)}>Models</Button>


                {drop && (
                    <div className="dropDownModels">
                        <Button className="ModelsBtn" href="/Mercedes">Mercedes</ Button>
                        <Button className="ModelsBtn" href="/Maybach">Maybach</ Button>
                        <Button className="ModelsBtnAMG" href="/AMG">AMG</Button>
                        </div>
                )}

                <Button href="/Discover" className="ShowroomBtn">Online-Showroom</Button>

            </div>



        </div>
    )
}