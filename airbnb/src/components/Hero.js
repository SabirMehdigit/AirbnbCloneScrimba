import React from "react";
import ImgRabab from "../images/rabab.jpg"
import ImgMountain from "../images/mountain.jpg"
import ImgHik from "../images/k22.png"
import Classes from "./Hero.css";


export default function Hero(){
    return (
        <section className="hero">
            {/* <img src={ImgRabab} className="imgRabab"/> */}
            <img src={ImgHik}className="imgHik"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero--text"> Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )

}