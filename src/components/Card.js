import React from "react";
import Katie from "../images/katie_zaferes.png"
import Star from "../images/star.png"

export default function Card(){
    return(
        <div className="card">
          
                <img src={Katie} alt="Katie Zaferes" className="movie-image"/>
            <p> <img src={Star} alt="Rating" className="star"/> 5.0<span>(6).USA</span></p>
            <p>Life Lessons With Katie Zaferes</p>
            <p>From $136<span>/person</span></p>
       
        </div>
    )
}