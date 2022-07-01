import React from "react";
import './Footer.css'
import wave from "./../../img/wave.png";

const Footer=()=>{
    return(
        <div className="footer">
            <img src={wave} alt="" />

            <div className="f-content">
                <div className="f-coal">

                    <span>mahmoud.devops@gmail.com</span>
                    <span>01220458853</span>
                </div>
                <div className="f-icone">
                
                </div>
            </div>
        </div>
    )
}
export default Footer;