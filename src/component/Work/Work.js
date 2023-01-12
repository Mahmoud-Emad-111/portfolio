import React from "react";
import './Work.css';
import Upwork from "./../../img/Upwork.png";
import amazon from "./../../img/amazon.png";
import facebook from "./../../img/Facebook.png";
import fiverr from "./../../img/fiverr.png";
import Shopify from "./../../img/Shopify.png";
import { motion } from "framer-motion";
const transition={duration:2, type:'spring'}

const Works=()=>{
    return(
        <div className="works">
            <div className="awesome">
                <span className="w-head-title">Works for all these</span>
                <span className="w-head-title">Brands / clients </span>
                <span>
                    Lorem Ipsum Consectetur Adipisicing
                    <br/>
                    Lorem Ipsum  Adipisicing
                    <br/>
                    Lorem Ipsum Consectetur Adipisicing
                    <br/>
                    Lorem Ipsum Consectetur 
                </span>
                <button>hire me</button>
            </div>
            <div className="w-right">
                <motion.div className="min_circle"
                    whileInView={{transform:'rotate(0deg)'}}
                    initial={{transform:'rotate(90deg)'}}
                    transition={transition}
                >
                    <div className="s_circle one">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="s_circle two">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="s_circle three">
                        <img src={fiverr} alt="" />
                    </div>
                    <div className="s_circle four">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="s_circle five">
                        <img src={facebook} alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Works;