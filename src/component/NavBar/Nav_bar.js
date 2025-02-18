import React from "react";
import "./Nav_bar.css";
import Inst from '@iconscout/react-unicons/icons/uil-instagram';
import Toggle from "../Toggle/Toggle";
const Nav_bar=(props)=>{
    return(
        <div className="nav_bar">
            <div className="n-left">
                <div className="n-name">mahmoud</div>
                <Toggle change_mood={props.change_mood} mood={props.mood}/>
            </div>
            <div className="n-right">
                <ul>
                    {/* <li>home</li>
                    <li>services</li>
                    <li>Skils</li>
                    <li>portfolio</li>
                    <li>testimonials</li> */}
                </ul>
                <button>
                    contact us
                </button>
            </div>

        </div>
    )
}
export default Nav_bar;