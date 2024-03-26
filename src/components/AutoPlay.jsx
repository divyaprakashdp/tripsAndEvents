import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaArrowRight } from "react-icons/fa";

// const NextArrow = ({ onClick }) => (
//   <div
//     className="bg-red-500 w-[2%] rounded-full p-1 items-center justify-center before:items-center before:justify-center before:flex-row"
//     onClick={onClick}
//   >
//     <FaArrowRight />
//   </div>
// );

function AutoPlay({ ComponentList, extraSetting }) {
  const settings = {
    ...extraSetting,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    speed: 300,
    useCSS: true,
    centerPadding: 0,
    centerMode: true,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
    // nextArrow: <NextArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{ComponentList}</Slider>
    </div>
  );
}

export default AutoPlay;
