import React from "react";
import welcomeImage from "./images/shopping-welcome.jpg";
import "./HomePage.css";
function HomePage(){
    return (
        <div className="Home-container">
            <h1 className="Animate-welcome">Hello, welcome to PaTuPa shopping</h1>
            <img src={welcomeImage} alt="shopping welcome" className="Home-image"/>
            <p className="Home-description">Buy good's from PaTuPa shopping for free of charge (No tax)</p>
        </div>
    )
}

export default HomePage;