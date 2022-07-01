import React from "react";
import './Skils.css';
import { motion } from "framer-motion";
const transition={duration:3 , type:'spring'};
const circle_skil=(skil)=>{
    return(
        <motion.div className="more"
            whileInView={{transform:'rotate(0deg)'}}
            initial={{transform:'rotate(180deg)'}}
            transition={transition}
        >
            <span className="skil">
                {skil}

            </span>
        </motion.div>
    )
}
const Skils=()=>{
    return(
        <div className="experince">
                {circle_skil('html 5')}
                {circle_skil('css 3')}
                {circle_skil('js')}
                {circle_skil('react js')}
                {circle_skil('json')}
                {circle_skil('js oop')}
                {circle_skil('scss')}



        </div>
    )
}
export default Skils;