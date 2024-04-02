import { FaCalendar, FaTag, FaWallet } from "react-icons/fa";
import { TbRating12Plus } from "react-icons/tb";
import { FaLanguage } from "react-icons/fa6";
import { MdOutlineCelebration } from "react-icons/md";
import { LuFlagTriangleRight } from "react-icons/lu";

export default function TripDetail() {
  const accordianPane = (accordianList) =>
    accordianList.map((accordian) => (
      <li
        key={accordian.topic}
        className="mb-2 rounded-lg decoration-none list-none pl-4"
      >
        <ul className="font-bold underline">{accordian.topic}</ul>
        {accordian.detailArray.map((item) => (
          <div
            key={item}
            className="flex flex-row flex-shrink-0 items-center gap-3 pl-4"
          >
            <LuFlagTriangleRight className="flex-shrink-0" />
            {item}
          </div>
        ))}
      </li>
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
          <h2 className="border-b-4 border-blue-500 shadow-md text-black text-md font-bold flex-1 py-2 px-4 focus:outline-none uppercase rounded-lg">
            About
          </h2>
          {/* <hr className="w-[60%]" /> */}
          <p className="text-left font-serif text-balance mt-4 pl-4">
            {tripDetailsObject.description.about}
          </p>
        </div>

        <div>
          <h2 className="border-b-4 border-blue-500 shadow-md text-black text-md font-bold flex-1 py-2 px-4 focus:outline-none uppercase rounded-lg">
            Itenarary
          </h2>
          {/* <hr className="w-[60%]" /> */}
          <p className="text-left font-serif text-balance mt-4">
            {accordianPane(tripDetailsObject.description.itenarary)}
          </p>
        </div>

        <div>
          <h2 className="border-b-4 border-blue-500 shadow-md text-black text-md font-bold flex-1 py-2 px-4 focus:outline-none uppercase rounded-lg">
            Itenarary
          </h2>
          <hr className="w-[60%]" />
          <p className="text-left font-serif text-balance mt-4">
            {accordianPane(tripDetailsObject.description.policy)}
          </p>
        </div>
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
