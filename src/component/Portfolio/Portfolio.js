import React from "react";
import './Portfolio.css';
import ecommerce from './../../img/ecommerce_2.png';
import dashboard from './../../img/Dashbord.png';
import nike from '../../img/nike.png';
import mix from '../../img/MIX.png';
import albayan from '../../img/albayan.png';
import Box from "../Box/Box";
import Eduiline from '../../img/Eduiline.png';
import Awfar from '../../img/awfar.png';
import AwfarApp from '../../img/Awfar App.jpg';
import Die from '../../img/Die.png';
const Portfolio=()=>{
    return(
         <div className="portfolio">
                <span className="p-one">recent projects</span>
                <span className="p-two">portfolio</span>
                <div className="p-right">
                    <Box img={Die} head="dielegende" desc="At Dielegende, we turn ideas into cutting-edge software that powers innovation and growth." link="https://dielegende.net/"/> 
                    <Box img={AwfarApp} head="Awfar App" desc="" link="https://play.google.com/store/apps/details?id=com.awfarcar.client"/> 
                    <Box img={Awfar} head="Awfar" desc="the service using an electronic application that will help you and connect you with drivers to finally complete the process of paying the move with ease." link="https://awfarcar.com/"/> 
                    <Box img={Eduiline} head="Eduline" desc="Educational advice for educational content. Beautifully designed and responsive." link="https://pasmaacademie.com/ar"/> 
                    <Box img={nike} head="nike store" desc="An online store for displaying and selling shoes. Beautifully designed and responsive." link="https://nike-store-c3c4.web.app/"/> 
                    {/* <Box img={dashboard} head="ecommbers (Not completed)" link="https://dashboard-app-73c0f.web.app/" desc="Dashboard Multi-page with a beautiful design, responsive and easy to use "/> */}
                    <Box img={mix} head="MIX (Not completed)" link="https://mix-dun.vercel.app/" desc="Online store for selling products. With a beautiful and responsive design no-backend "/>
                    <Box img={dashboard} head="Dashboard" link="https://dashboard-app-73c0f.web.app/" desc="Dashboard Multi-page with a beautiful design, responsive and easy to use "/>
                    <Box img={ecommerce} head="Store (Not completed)" desc="Online store for selling products. With a beautiful and responsive design" link="https://store-5be53.web.app"/>
                    <Box img={albayan} head="Al-Bayan Foundation for Academic Services" desc="Al-Bayan Foundation for Academic Services" link="https://albayanres.com/"/>
                </div>
        </div>
    )
}
export default Portfolio;
