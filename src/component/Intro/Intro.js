import React from "react";
import git_hub from './../../img/github.png';
import instagram from './../../img/instagram.png';
import linkdein from './../../img/linkedin.png';
import "./Intro.css";
import vector_1 from './../../img/Vector1.png';
import vector_2 from './../../img/Vector2.png';
import crown from './../../img/crown.png';
import Floting from "../FloatingDic/FlotingDIV";
import like from "./../../img/thumbup.png";
import imogy from "./../../img/glassesimoji.png";
import img_1 from './../../img/3.png';
const Intro=()=>{
    return(
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span>hy! i am</span>
                    <span>mahmoud emad</span>
                    <p>forntend developer with high lavel
                        of experience in web designing and 
                        development, producting the quality work

                    </p>
                </div>
                <button>
                    hire me
                </button>
                <div className="i-icone">
                    <a target="_blank" href="https://github.com/Mahmoud-Emad-111" ><img src={git_hub} alt="" /></a>
                    <a ><img src={instagram} alt="" /></a>
                    <a href="https://www.linkedin.com/in/mahmoud-emad-450311243/" target="_blank"><img src={linkdein} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={vector_1} alt="" className="cover"/>
                <img src={vector_2} alt=""  className="cover"/>
                <img src={img_1} alt=""  className="me"/>
                <div className="i-icone one" ><Floting img= {crown} text="Mahmoud Emad"/></div>
                <div className="i-icone two" ><Floting img= {like} text="Best web developr"/></div>
                <div className="i-three i-icone"><img src={imogy} alt="" /></div>
                
            </div>
        </div>

    )
}
export default Intro;