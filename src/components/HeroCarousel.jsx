import AutoPlay from "./AutoPlay";
import ootyImg from "../assets/ooty.jpg";
import goaImg from "../assets/goa.jpg";
import manaliImg from "../assets/manali.jpg";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function HeroCarousel() {
  const [imgIndex, setImgIndex] = useState(0);
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

  const HeroCard = (item) =>
    item.map((itemData, idx) => (
      <a
        key={new Date()}
        href={item.hrefRoute}
        className={`block group cursor-pointer ${
          idx === imgIndex
            ? "scale-130 opacity-100 duration-500 z-30"
            : "scale-75 opacity-50"
        }`}
      >
        <div className="flex flex-row rounded-xl md:h-120 mr-2 shadow-lg shadow-slate-300/20  items-center justify-center gap-0">
          <div>
            <p className="text-white text-xl fixed ml-4 mt-4 py-1 px-2 rounded-lg font-semibold text-end">
              Sale
            </p>
            <img
              src={itemData.imgSrc}
              alt="heroImg"
              className="z-0 h-120 w-120 rounded-lg object-cover"
            />
          </div>
        </div>
      </a>
    ));

  return (
    <div className="px-12 py-6 h-120">
      <AutoPlay
        ComponentList={HeroCard(data)}
        extraSetting={{
          dots: true,
          beforeChange: (current, next) => setImgIndex(next),
        }}
      />
    </div>
  );
}
