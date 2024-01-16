import React from "react";
import { IMG_URL } from "../utils/constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FoodBanner({ item }) {
    console.log(item);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
    <div className="flex ">
      
        <img className="w-24 mx-3" src={`${IMG_URL}${item.imageId}`}></img>
    
    </div>
    </Slider>
  );
}
