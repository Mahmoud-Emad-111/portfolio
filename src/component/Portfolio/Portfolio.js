import React from "react";
import './Portfolio.css';
import ecommerce from './../../img/ecommerce_2.png';
import dashboard from './../../img/Dashbord.png';
import landing from './../../img/template.png';
import Box from "../Box/Box";


const Portfolio=()=>{
    return(
        <div className="portfolio">
                <span className="p-one">recent projects</span>
                <span className="p-two">portfolio</span>
                <div className="p-right">
                    <Box img={dashboard} head="Dashboard_ecommbers" link="https://dashboard-app-73c0f.web.app/" desc="Dashboard Multi-page with a beautiful design, responsive and easy to use "/>
                    <Box img={ecommerce} head="Store" desc="Online store for selling products. With a beautiful and responsive design" link="https://store-5be53.web.app"/>
                    <Box img={landing} head="landing page" desc="landing page is very beautifully designed and responsive (html___css)" link="https://mahmoud-emad-111.github.io/template_html_css/"/>
                    
                    
                </div>
        </div>
    )
}
export default Portfolio;