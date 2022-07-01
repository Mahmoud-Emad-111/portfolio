import React from "react";
import './Box.css';
import Arrow from "@iconscout/react-unicons/icons/uil-corner-up-left-alt";
const Box=(props)=>{
    return(
        <div className="box">
            <img src={props.img} alt="" />
            <div className="box-text">
                <h4>{props.head}</h4>
                <p>{props.desc}</p>
            </div>
            <div className="info">
                <a href={props.link} target="_blank"><span>view project</span></a>
                <span><Arrow/></span>
            </div>
        </div>
    )
}
export default Box;