import React from "react";
import "./Floting.css"
const Floting=(props)=>{
    return(
        <div className="floting">
            <img src={props.img} alt="" />
            <span>{props.text}</span>
        </div>
    )
}
export default Floting;