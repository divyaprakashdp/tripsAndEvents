import { FaCalendar, FaTag, FaWallet } from "react-icons/fa";
import ootyImg from "../assets/ooty.jpg";
import { TbRating12Plus } from "react-icons/tb";
import { FaLanguage } from "react-icons/fa6";
import { MdOutlineCelebration } from "react-icons/md";

export default function TripDetail() {
  const tripDetailsObject = {
    name: "Ooty",
    image: ootyImg,
    startingPrice: 4999,
    price: 5999,
    tag: "Weekend Trip",
    datesAvailable: ["March 18-20", "March 20-27"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim id, voluptate repellat odio deserunt culpa sunt expedita, incidunt iure accusantium minus necessitatibus labore qui aliquid dolorem aspernatur doloribus possimus. Libero, sunt ipsam! Odio libero quo perferendis adipisci suscipit nam asperiores deserunt officia voluptates aperiam. Illo enim sint beatae soluta dolore ipsam consectetur, vero aspernatur repellat rerum, odio hic cumque minima modi ducimus, deleniti quisquam autem sequi quas illum laborum. Vitae quod expedita obcaecati facere. Eveniet debitis deserunt aliquam vero labore, laboriosam, sit commodi praesentium quibusdam fugit, in eius quis repellendus? Deserunt ea adipisci id ad ducimus aliquam velit fugiat harum ullam! Placeat error maxime vero modi iure aperiam, architecto est nihil voluptatem nulla reprehenderit culpa quaerat provident nam corporis, alias sint suscipit harum nisi minima asperiores blanditiis? Laborum omnis laboriosam blanditiis, quaerat voluptas deserunt a dolore quae facilis nam, quia ab sequi? Labore temporibus facere voluptatibus dolorum omnis libero quam, obcaecati quisquam soluta enim laudantium? Similique commodi odio quam non quia, saepe autem consectetur vel quaerat blanditiis molestiae laboriosam magnam doloremque temporibus praesentium deleniti odit vero. Quasi ex iure nisi id, voluptates dolorem nam molestiae temporibus laborum, accusamus dicta maiores harum blanditiis ducimus neque tempore unde a alias sequi?",
  };
  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div className="flex flex-col mt-24 ml-24 gap-6 w-[60%]">
        <img
          src={tripDetailsObject.image}
          alt=""
          className="h-128 rounded-lg shadow-lg shadow-blue-200"
          srcSet="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1710932293%2Fydwc9y4fujxql01q9jlz.jpg 560w, https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_600/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1710932293%2Fydwc9y4fujxql01q9jlz.jpg 600w, https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_750/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1710932293%2Fydwc9y4fujxql01q9jlz.jpg 750w, https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1710932293%2Fydwc9y4fujxql01q9jlz.jpg 800w, "
        />

        <div>
          <h2 className="text-lg font-bold">About</h2>
          <hr className="w-[60%]" />
          <p className="text-left font-serif text-balance ">
            {tripDetailsObject.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col mx-12 mb-12 md:mt-24 md:mr-24 w-[80%] md:w-[30%] h-[50%] px-6 py-4 gap-4">
        {/* booktripcard todo - separate this later and make use of map */}
        <div className="flex flex-col border-[1px]  border-b-8 border-blue-400 shadow-lg shadow-blue-200 rounded-lg mb-12  h-[50%] px-6 py-4 gap-4">
          <h2 className="text-xl font-bold">{tripDetailsObject.name}</h2>
          <hr />
          <div className="flex flex-row gap-4 text-md font-mono items-center">
            <FaTag />
            <p>{tripDetailsObject.tag}</p>
          </div>
          <div className="flex flex-row gap-4 text-md font-mono items-center">
            {/* small ui defect of icon resizing when array size is big */}
            <FaCalendar />
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
