import React from "react"
import Hero_Images from "../images/hero.png"

export default function Hero(){
    return(
        < div className="hero--section">
        <div className="hero--container">
        <img src={Hero_Images} className="hero--image" alt="Hero Images"/>
        </div>
        <h1  className="hero--heading">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
        </div>
    )
}