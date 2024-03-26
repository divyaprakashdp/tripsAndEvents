export default function WhyUs() {
  const reasonList = [
    {
      reason: "reason 1",
      img: "",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque tempore sit beatae maxime repellendus dolor accusantium facilis aliquam ea nihil voluptates est consequuntur illo ducimus, earum consequatur et placeat.",
    },
    {
      reason: "reason 2",
      img: "",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque tempore sit beatae maxime repellendus dolor accusantium facilis aliquam ea nihil voluptates est consequuntur illo ducimus, earum consequatur et placeat.",
    },
    {
      reason: "reason 3",
      img: "",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque tempore sit beatae maxime repellendus dolor accusantium facilis aliquam ea nihil voluptates est consequuntur illo ducimus, earum consequatur et placeat.",
    },
    {
      reason: "reason 4",
      img: "",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque tempore sit beatae maxime repellendus dolor accusantium facilis aliquam ea nihil voluptates est consequuntur illo ducimus, earum consequatur et placeat.",
    },
  ];
  return (
    <div className="bg-slate-400 mx-12 rounded-lg">
      <h2 className="text-center text-2xl font-semibold">Why us?</h2>
      <div className="grid grid-cols-4 gap-2 py-4 mx-8">
        {reasonList.map((reasons) => (
          <div
            key={reasons.reason}
            className={`flex flex-col py-2 shadow-md text-center justify-center  duration-500 rounded-xl bg-gradient-to-r from-blue-400 to-blue-500`}
          >
            <div className="md:w-1/4 mx-4 ">{reasons.img}</div>
            <div className="md:w-2/3 mx-12 ">
              <h2 className="text-xl font-semibold mt-2 uppercase">
                {reasons.reason}
              </h2>
              <hr className="" />
              <br />
              <p className="pb-2 text-justify">{reasons.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
