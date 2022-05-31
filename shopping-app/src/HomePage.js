import React from "react";
import Prototypes from 'prop-types';
import welcomeImage from "./images/shopping-welcome.jpg";
import "./HomePage.css";
    function HomePage({popularItems}){
    return (
        <div className="Home-container">
            <h1 className="Animate-welcome">Hello, welcome to PaTuPa shopping</h1>
            <img src={welcomeImage} alt="shopping welcome" className="Home-image"/>
            <p className="Home-description">Buy good's from PaTuPa shopping for free of charge (No tax)</p>
            <h2>Popular Items</h2>
            <div className="popularItems-container">
                {
                    popularItems.map(item => 
                        <div className="popularItem">
                            <img className="popularItem-image" src={item.house} alt={item.name}/>
                            <div className="popularItem-title">
                                {item.name}
                            </div>
                            <div className="popularItem-description">
                                {item.description}
                            </div>
                            <div className="popularItem-price">${item.price}</div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}
HomePage.Prototypes = {
    popularItems : Prototypes.array.isRequired,
}
export default HomePage;