import React from "react"
import AirBnB from "../images/airbnb_logo.png"


export default function NavBar(){
    return(
        <nav className="logo--container">
        <img src={AirBnB} className="logo" alt="Airbnb logo"/>
        </nav>
    )
}