import React  from "react";
import  "./Testimonils.css";
import profile_1 from './../../img/profile1.jpg';
import profile_2 from './../../img/profile2.jpg';
import profile_3 from './../../img/profile3.jpg';
import profile_4 from './../../img/profile4.jpg';
import profile_5 from './../../img/profile5.jpg';
import profile_6 from './../../img/profile6.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from "swiper";


const Testimonils=()=>{
    const clints=[
        {img:profile_1, test:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ducimus, numquam tempore voluptatem aut doloribus qui dolore, quae obcaecati'},
        {img:profile_2, test:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ducimus, numquam tempore voluptatem aut doloribus qui dolore, quae obcaecati'},
        {img:profile_3, test:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ducimus, numquam tempore voluptatem aut doloribus qui dolore, quae obcaecati'},
        {img:profile_4, test:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ducimus, numquam tempore voluptatem aut doloribus qui dolore, quae obcaecati'},
        {img:profile_5, test:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ducimus, numquam tempore voluptatem aut doloribus qui dolore, quae obcaecati'},
        {img:profile_6, test:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ducimus, numquam tempore voluptatem aut doloribus qui dolore, quae obcaecati'},

    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
        autoplaySpeed:7000,
    };
  

    return(
        <div className="testimonils">
            <div className="t-heading">
                    <span> clints always get <span className="t-sp">exceptional work</span> from me...</span>
            </div>
            <Slider {...settings}>

                {clints.map(clint=>{
                    return(
                    
                        <div className="t-slide" key={Math.random()}>

                            <img src={clint.img} alt="" />
                            <span>{clint.test}</span>
                        </div>
                    

                    )
                })}
            </Slider>
            
        </div>
    )
}
export default Testimonils;