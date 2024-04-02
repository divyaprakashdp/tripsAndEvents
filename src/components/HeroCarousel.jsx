import AutoPlay from "./AutoPlay";
import ootyImg from "../assets/ooty.jpg";
import goaImg from "../assets/goa.jpg";
import manaliImg from "../assets/manali.jpg";
import { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

export default function HeroCarousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const data = [
    {
      text: "Sale 50% off on ooty trips",
      hrefRoute: "/ooty",
      imgSrc: manaliImg,
    },
    { text: "Sale 50% off on goa trips1", hrefRoute: "/ooty", imgSrc: goaImg },
    {
      text: "Sale 50% off on ooty trips12",
      hrefRoute: "/ooty",
      imgSrc: manaliImg,
    },
    {
      text: "Sale 50% off on ooty trips13",
      hrefRoute: "/ooty",
      imgSrc: goaImg,
    },
    {
      text: "Sale 50% off on ooty trips14",
      hrefRoute: "/ooty",
      imgSrc: manaliImg,
    },
  ];

  const prevButton = () => (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white"
      onClick={handlePrev}
    >
      <FaAngleLeft />
    </button>
  );
  const nextButton = () => (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white"
      onClick={handleNext}
    >
      <FaAngleRight />
    </button>
  );
  const HeroCard = (item) =>
    item.map((itemData, idx) => (
      <a
        key={new Date()}
        href={item.hrefRoute}
        className={`block group cursor-pointer ${
          idx === imgIndex
            ? "scale-120 opacity-100 duration-500 z-30"
            : "scale-75 opacity-50 z-0"
        }`}
      >
        <div className="flex flex-row rounded-xl mr-2  items-center justify-center gap-0">
          <div>
            <p className="text-white text-xl fixed ml-4 mt-4 py-1 px-2 rounded-lg font-semibold text-end">
              Sale
            </p>
            <img
              src={itemData.imgSrc}
              alt="heroImg"
              className="z-0 rounded-lg object-cover h-full"
            />
          </div>
        </div>
      </a>
    ));

  return (
    <div className="px-12 py-6 h-auto ">
      <AutoPlay
        ComponentList={HeroCard(data)}
        extraSetting={{
          dots: true,
          beforeChange: (current, next) => setImgIndex(next),
          nextButton: nextButton,
        }}
      />
    </div>
  );
}
