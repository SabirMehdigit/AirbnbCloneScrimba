import React from "react";
import Star from "../images/star.png";
import Classes from "./Card.css"
export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLDOUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props. coverImg} className="card--image" />
            <div className="card--stats">
                <img src={Star} className="card--star" />
                <span className="gray"> {props .stats.rating}</span>
                <span className="gray">({props.stats.itereviewCount}) . </span>
                <span className="gray">{props. location} </span>

            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><strong>From ${props.price}</strong> /Person</p>
        </div>
    )
}
