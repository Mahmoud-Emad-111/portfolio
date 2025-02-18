import React from "react";
import "./services.css";
import imogy_1 from "./../../img/glasses.png";
import imogy_2 from "./../../img/heartemoji.png";
import imogy_3 from "./../../img/humble.png";
import Cart from "../Cart/Cart";
import cv from "./../../img/Mahmoud.pdf";
import { motion } from "framer-motion";
const Services=()=>{
    const transition={duration:2, type:'spring'}
    return(

        <div className="services">
            <div className="s-left">
                <span>my awesome</span>
                <span>services</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque, nobis ad harum dolore quasi omnis.</p>
                <a href={cv} download>
                    <button style={{width:'fit-content'}}>download cv</button>

                </a>
            </div>
            <div className="s-right">
                <motion.div className="cart-one"
                    whileInView={{left:'15rem'}}
                    initial={{right:"0"}}
                    transition={transition}
                >

                    <Cart img={imogy_2} head='design' detalis='Lorem ipsum  consectetur adipisicing'/>
                </motion.div>
                <motion.div className="cart-two"
                    whileInView={{left: '-12%'}}
                    initial={{left:'-50%'}}
                    transition={transition}
                >
                    <Cart img={imogy_1} head='developer' detalis='Lorem ipsum  consectetur adipisicing'/>
                </motion.div>
                <motion.div className="cart-three"
                    whileInView={{right:"16rem"}}
                    initial={{right:"1rem"}}
                    transition={transition}
                >
                    <Cart img={imogy_3} head='ui / ux' detalis='Lorem ipsum  consectetur adipisicing'/>
                </motion.div>
            </div>
        </div>
    )
}
export default Services;