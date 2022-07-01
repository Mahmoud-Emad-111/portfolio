import React from "react";
import "./Cart.css";
const Cart=(props)=>{
    return(
        <div className="Cart">
            <img src={props.img} alt="" />
            <span>{props.head}</span>
            <span className="detalis">{props.detalis}</span>
            <button>learn more</button>
        </div>
    )
}
export default Cart;