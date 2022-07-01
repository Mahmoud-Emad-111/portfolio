import React from "react";
import './Box.css';
import Arrow from "@iconscout/react-unicons/icons/uil-corner-up-left-alt";
const Box=(props)=>{
    return(
        <div className="box">
            <img src={props.img} alt="" />
            <div className="box-text">
                <h4>{props.head}</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, optio ad!</p>
            </div>
            <div className="info">
                <span>view project</span>
                <span><Arrow/></span>
            </div>
        </div>
    )
}
export default Box;