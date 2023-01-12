import React from "react";
import './Portfolio.css';
import ecommerce from './../../img/ecommerce_2.png';
import dashboard from './../../img/Dashbord.png';
import nike from '../../img/nike.png';
import Box from "../Box/Box";


const Portfolio=()=>{
    return(
        <div className="portfolio">
                <span className="p-one">recent projects</span>
                <span className="p-two">portfolio</span>
                <div className="p-right">
                    <Box img={nike} head="nike store" desc="An online store for displaying and selling shoes. Beautifully designed and responsive" link="https://nike-store-c3c4.web.app/"/>
                    <Box img={dashboard} head="Dashboard_ecommbers" link="https://dashboard-app-73c0f.web.app/" desc="Dashboard Multi-page with a beautiful design, responsive and easy to use "/>
                    <Box img={ecommerce} head="Store" desc="Online store for selling products. With a beautiful and responsive design" link="https://store-5be53.web.app"/>
                    
                    
                </div>
        </div>
    )
}
export default Portfolio;