import React from "react";
import './Portfolio.css';
import ecommerce from './../../img/ecommerce_2.png';
import dashboard from './../../img/Dashbord.png';
import nike from '../../img/nike.png';
import mix from '../../img/MIX.png';
import albayan from '../../img/albayan.png';
import Box from "../Box/Box";


const Portfolio=()=>{
    return(
        <div className="portfolio">
                <span className="p-one">recent projects</span>
                <span className="p-two">portfolio</span>
                <div className="p-right">
                    <Box img={nike} head="nike store" desc="An online store for displaying and selling shoes. Beautifully designed and responsive." link="https://nike-store-c3c4.web.app/"/>
<<<<<<< HEAD
                    <Box img={dashboard} head="ecommbers" link="https://dashboard-app-73c0f.web.app/" desc="Dashboard Multi-page with a beautiful design, responsive and easy to use "/>
                    <Box img={mix} head="MIX" link="https://mix-dun.vercel.app/" desc="Online store for selling products. With a beautiful and responsive design no-backend "/>
=======
                    <Box img={dashboard} head="Dashboard" link="https://dashboard-app-73c0f.web.app/" desc="Dashboard Multi-page with a beautiful design, responsive and easy to use "/>
                    <Box img={MIX} head="ecommbers" link="https://mix-dun.vercel.app/" desc="Online store for selling products. With a beautiful and responsive design no-backend "/>
>>>>>>> 08e2cbd10470e52ee9f909a4bdaf3ebfa5e627ea
                    <Box img={ecommerce} head="Store" desc="Online store for selling products. With a beautiful and responsive design" link="https://store-5be53.web.app"/>
                    <Box img={albayan} head="Al-Bayan Foundation for Academic Services" desc="Al-Bayan Foundation for Academic Services" link="https://albayanres.com/"/>
                </div>
        </div>
    )
}
export default Portfolio;
