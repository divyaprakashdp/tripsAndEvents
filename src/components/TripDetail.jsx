import { FaCalendar, FaTag, FaWallet } from "react-icons/fa";
import ootyImg from "../assets/ooty.jpg";
import { TbRating12Plus } from "react-icons/tb";
import { FaLanguage } from "react-icons/fa6";
import { MdOutlineCelebration } from "react-icons/md";
import { useState } from "react";
import { LuFlagTriangleRight } from "react-icons/lu";

export default function TripDetail() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
  };

  const descriptionPaneWithScroll = (details) => {
    return (
      <div className="h-96 overflow-y-auto scroll-ml-4">
        <p className="text-left text-lg font-serif text-balance ">{details}</p>
      </div>
    );
  };

  const accordianPane = (accordianList) =>
    accordianList.map((accordian) => (
      <details key={accordian.topic} className="cursor-pointer mb-2 rounded-lg">
        <summary className="font-bold">{accordian.topic}</summary>
        {accordian.detailArray.map((item) => (
          <div
            key={item}
            className="flex flex-row flex-shrink-0 items-center gap-3 "
          >
            <LuFlagTriangleRight className="flex-shrink-0" />
            {item}
          </div>
        ))}
      </details>
    ));

  let tripDetailsObject = JSON.parse(localStorage.getItem("tripDetail"));
  console.log(`trip details => ${tripDetailsObject.data.datesAvailable}`);

  tripDetailsObject = tripDetailsObject.data;

  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div className="flex flex-col mt-24 ml-24 gap-6 w-[60%]">
        <img
          src={tripDetailsObject.image}
          alt=""
          className="h-96 object-cover rounded-lg shadow-lg shadow-blue-200"
          // srcSet=""
        />

        <div>
          {Object.keys(tripDetailsObject.description).map((tabLabel, index) => (
            <button
              key={index}
              className={`${
                selectedTab === index
                  ? "border-blue-500 shadow-md"
                  : "text-blue-500"
              } text-black text-md font-bold flex-1 py-2 px-4 border-transparent focus:outline-none uppercase rounded-lg border-b-4`}
              onClick={() => handleTabChange(index)}
            >
              {tabLabel}
            </button>
          ))}
          <hr className="w-[60%]" />
        </div>

        {Object.values(tripDetailsObject.description).map(
          (sections, tabIndex) => (
            <div
              key={tabIndex}
              style={{ display: selectedTab === tabIndex ? "block" : "none" }}
              className="ml-4 mr-10 mt-1"
            >
              {Array.isArray(sections)
                ? // <div>{sections[0]?.day}</div>
                  accordianPane(sections)
                : descriptionPaneWithScroll(sections)}
            </div>
          )
        )}
      </div>

      <div className="flex flex-col mx-12 mb-12 md:mt-24 md:mr-24 w-[80%] md:w-[30%] h-[50%] px-6 py-4 gap-4">
        {/* booktripcard todo - separate this later and make use of map */}
        <div className="flex flex-col border-[1px]  border-b-8 border-blue-400 shadow-lg shadow-blue-200 rounded-lg mb-12  h-[50%] px-6 py-4 gap-4">
          <h2 className="text-xl font-bold">{tripDetailsObject.name}</h2>
          <hr />
          <div className="flex flex-row gap-4 text-md font-mono items-center">
            <FaTag className="flex-shrink-0" />
            <p>{tripDetailsObject.tag}</p>
          </div>
          <div className="flex flex-row gap-4 text-md font-mono items-center">
            {/* small ui defect of icon resizing when array size is big */}
            <FaCalendar className="flex-shrink-0" />
            <p>{tripDetailsObject.datesAvailable.join(" | ")}</p>
          </div>
          <div className="flex flex-row gap-4 text-xl font-mono font-extrabold items-center">
            <FaWallet />
            <p>&#8377;{tripDetailsObject.price}</p>
            <a href={`/${tripDetailsObject.name}/book`}>
              {/* this button can be reused */}
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:scale-110 duration-500">
                Book Now
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col border-[1px]  border-b-8 border-blue-400 shadow-lg shadow-blue-200 rounded-lg mb-12  h-[50%] px-6 py-4 gap-4">
          <h2 className="text-xl font-bold">Trip Guide</h2>
          <hr />
          <div className="flex flex-row gap-4 text-md font-mono items-center">
            <TbRating12Plus size={20} />
            <div>
              <p className="font-extralight text-gray-400 text-sm">For Age</p>
              <p>{tripDetailsObject.tag}</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 text-md font-mono items-center">
            {/* small ui defect of icon resizing when array size is big */}
            <FaLanguage />
            <div>
              <p className="font-extralight text-gray-400 text-sm">Language</p>
              <p>English, Hindi, Punjabi</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 text-md font-mono items-center">
            <MdOutlineCelebration />
            <div>
              <p className="font-extralight text-gray-400 text-sm">
                Celebration
              </p>
              <p>Fun Times Ahead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
