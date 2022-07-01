import React from "react";
import './Portfolio.css';
import ecommerce from './../../img/ecommerce.png';
import side_bar from './../../img/sidebar.png';
import music_app from './../../img/musicapp.png';
import hoc from './../../img/hoc.png';
import dash from "./../../img/Dashbord.png"
import Box from "../Box/Box";


const Portfolio=()=>{
    return(
        <div className="portfolio">
                <span className="p-one">recent projects</span>
                <span className="p-two">portfolio</span>
                <div className="p-right">
                    <Box img={ecommerce} head="ecommerce"/>
                    <Box img={side_bar} head="side_bar"/>
                    <Box img={music_app} head="music_app"/>
                    <Box img={hoc} head="hoc"/>
                    
                    
                </div>
        </div>
    )
}
export default Portfolio;