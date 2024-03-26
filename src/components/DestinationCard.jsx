export default function Destination({ imgSrc, name, price }) {
  return (
    <>
      <a href={`/${name}`} className="block group cursor-pointer">
        <div className="flex flex-col rounded-xl bg-slate-200 md:h-64 mr-2 shadow-lg shadow-slate-300/20 md:hover:scale-95 ease-in-out duration-500 ">
          <div>
            <p className="text-white text-lg fixed ml-4 mt-4 py-1 px-2 rounded-lg font-semibold bg-[#31C0F0] ">
              {name}
            </p>
            <img
              src={imgSrc}
              alt={name}
              className="z-0 h-52 w-[100%] rounded-t-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 divide-x-2 divide-black my-2 mx-4 px-2 bg-[#F5FCFE] rounded-lg text-lg text-center">
            <p>{`Rs. ${price} onwards`}</p>
            <p>Book Now</p>
          </div>
        </div>
      </a>
    </>
  );
}
