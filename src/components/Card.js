import React from "react";


export default function Card(props){
    return(
        <div className="card">
          
            <img src={`../images/${props.img}`} alt="Katie Zaferes" className="movie-image"/>
            <p> <img src="/images/star.png" alt="Rating" className="star"/> {props.rating}<span>({props.reviewCount}).{props.country}</span></p>
            <p>{props.title}</p>
            <p>From ${props.price} <span>/person</span></p>
       
        </div>
    )
}