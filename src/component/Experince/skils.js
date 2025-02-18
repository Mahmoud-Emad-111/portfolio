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
                {circle_skil('Next js')}
                {circle_skil('json')}
                {circle_skil('js oop')}
                {circle_skil('scss')}
                {circle_skil('php')}
                {circle_skil('my-sql')}
                {circle_skil('laravel')}
                {circle_skil('Api')}
                {circle_skil('Solid')}
                {circle_skil('CCNA')}
                {circle_skil('Redux')}



        </div>
    )
}
export default Skils;