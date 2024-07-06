import AutoPlay from "./AutoPlay";
import pastTripData from "../assets/pastTripData.js";
import HeroCarousel from "./HeroCarousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdZoomIn } from "react-icons/md";
import Modal from "./Modal.jsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Gallery() {
  const tripName = useParams();
  const [imgIndex, setImgIndex] = useState(0);
  const [openImage, setOpenImage] = useState(false);

  const imageList = pastTripData
    .filter((item) => item.name === tripName.destination)
    .map((imgObject) => imgObject.imageSrcList);

  console.log(imageList[0][1]);

  const imgWrapperDiv = () =>
    imageList[0].map((item, index) => (
      <div
        className={`flex flex-col gap-4 transition duration-300 ${
          index === imgIndex ? "w-96 h-96" : "w-20"
        }`}
        key={index}
        onClick={() => setImgIndex(index)}
      >
        <div
          className={`z-10 absolute top-44 bg-blue-200 rounded-full p-1 ${
            index === imgIndex || "hidden"
          }`}
          onClick={() => setOpenImage(true)}
        >
          <MdZoomIn size={20} />
        </div>

        <img
          src={item}
          className="z-0 w-96 h-96 object-cover rounded-3xl cursor-pointer"
        />
        <Modal open={openImage} onClose={() => setOpenImage(false)}>
          {
            <img
              src={imageList[0][imgIndex]}
              className="z-20 w-[70%] h-[90%] mt-12 object-cover rounded-3xl"
            />
          }
        </Modal>
      </div>
    ));

  //   const handleZoomIn = (image) => {
  //     setOpenImage(true);
  //     return (

  //     );
  //   };

  return (
    <div
      className={`flex flex-row gap-4 h-screen items-center justify-center bg-[url('${imageList[0][1]}')]`}
    >
      <FaArrowLeft />
      {imgWrapperDiv()}
      <FaArrowRight />

      {/* <AutoPlay
        ComponentList={imgWrapperDiv()}
        extraSetting={{
          dots: true,
          beforeChange: (current, next) => setImgIndex(next),
        }}
      /> */}
    </div>
  );
}
