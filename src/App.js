import React from "react";
import NavBar from "./components/Navbar";
// import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css"

export default function App(){
  return(
    <>
    <NavBar/>
    <Card
     img="katie_zaferes.png"
     rating="5.0"
     reviewCount={6}
     country="USA"
     title="Life Lessons With Katie Zaferes"
     price={136}/>

<Card
     img="katie_zaferes.png"
     rating="5.0"
     reviewCount={6}
     country="USA"
     title="Life Lessons With Katie Zaferes"
     price={136}/>
    </>
  )
}