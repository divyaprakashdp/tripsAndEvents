import AutoPlay from "./AutoPlay";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";

export default function Testimonials() {
  const testimonialsText = [
    {
      username: "John Doe",
      img: person1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque tempore sit beatae maxime repellendus dolor accusantium facilis aliquam ea nihil voluptates est consequuntur illo ducimus, earum consequatur et placeat.",
    },
    {
      username: "John Doe",
      img: person2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque tempore sit beatae maxime repellendus dolor accusantium facilis aliquam ea nihil voluptates est consequuntur illo ducimus, earum consequatur et placeat.",
    },
    {
      username: "Sal Moe",
      img: person3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque tempore sit beatae maxime repellendus dolor accusantium facilis aliquam ea nihil voluptates est consequuntur illo ducimus, earum consequatur et placeat.",
    },
    {
      username: "Val Doe",
      img: person4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque tempore sit beatae maxime repellendus dolor accusantium facilis aliquam ea nihil voluptates est consequuntur illo ducimus, earum consequatur et placeat.",
    },
    {
      username: "Dave Doe",
      img: person5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque tempore sit beatae maxime repellendus dolor accusantium facilis aliquam ea nihil voluptates est consequuntur illo ducimus, earum consequatur et placeat.",
    },
  ];

  const testimonialDiv = (testimonialsText) =>
    testimonialsText.map((testimonial) => (
      <div
        key={testimonial.username}
        className={`flex flex-col py-2 shadow-md text-center items-center justify-center  duration-500 w-22 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 gap-4 mr-4 mt-12`}
      >
        <div className="md:w-1/4 mx-4 items-center justify-center">
          <img
            src={testimonial.img}
            alt=""
            className="rounded-full w-24 h-24 objet-cover"
          />
        </div>
        <div className="md:w-3/4 m-12 ">
          <h2 className="text-xl font-semibold mt-2 uppercase">
            {testimonial.username}
          </h2>
          <hr className="" />
          <br />
          <p className="pb-8 text-justify">{testimonial.text}</p>
        </div>
      </div>
    ));
  return (
    <div className="w-[80%] mx-24 mt-12">
      <h2 className="text-center text-xl font-semibold">Testimonials</h2>
      <AutoPlay
        ComponentList={testimonialDiv(testimonialsText)}
        extraSetting={{
          autoplay: true,
          speed: 6000,
          autoplaySpeed: 6000,
          cssEase: "linear",
          infinite: true,
        }}
      />
    </div>
  );
}
