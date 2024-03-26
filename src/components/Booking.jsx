import { useState } from "react";
import Modal from "./Modal";
import Signup from "./Signup";
import Stepper from "./Stepper";
import { UserAuth } from "../context/AuthContext";

export default function Booking() {
  const data = {
    name: "Ooty",
    price: 5999,
    datesAvailable: ["March 18-20", "March 20-27"],
  };

  const { user } = UserAuth();

  //   const [openSignin, setOpenSignin] = useState(false);
  const [countOf5Orless, setcountOf5Orless] = useState(0);
  const [countOf5OrMore, setCountOf5OrMore] = useState(0);

  return (
    <div className="pt-24 px-24 w-full items-center justify-center text-center">
      <h2 className="text-4xl font-bold text-blue-400 mt-12">
        Trip to {data.name}
      </h2>
      <p className="text-lg">{data.datesAvailable.join(" | ")}</p>
      {data.datesAvailable.map((tripDate) => (
        <div
          key={tripDate}
          className="flex flex-row mx-24 my-12 pb-4 text-center items-center justify-center md:gap-12  border-b-4 rounded-lg text-lg"
        >
          <div>{tripDate}</div>
          <Stepper
            label={`< 5yrs`}
            count={countOf5Orless}
            incrementer={() => setcountOf5Orless(countOf5Orless + 1)}
            decrementer={() => setcountOf5Orless(countOf5Orless - 1)}
          />
          <Stepper
            label={`> 5yrs`}
            count={countOf5OrMore}
            incrementer={() => setCountOf5OrMore(countOf5Orless + 1)}
            decrementer={() => setCountOf5OrMore(countOf5Orless - 1)}
          />
          <a href={`/checkout`}>
            <button
              className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:scale-110 duration-500"
              //     onClick={() => setOpenSignin(true)}
            >
              Book
            </button>
          </a>

          {/* {user && (
            <Modal open={openSignin} onClose={() => setOpenSignin(false)}>
              {<Signup />}
            </Modal>
          )} */}
        </div>
      ))}
    </div>
  );
}
