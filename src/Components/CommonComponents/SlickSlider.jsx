import React, { Component } from "react";
import Slider from "react-slick";
import TestimonialCart from "./TestimonialCart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div
      style={{
        border: "1px solid red",
        height: "300px",
        backgroundColor: "lightgrey",
      }}
    >
      <Slider {...settings}>
        <div>
          <TestimonialCart />
        </div>
        <div>
          <TestimonialCart />
        </div>
        <div>
          <TestimonialCart />
        </div>
        <div>
          <TestimonialCart />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
