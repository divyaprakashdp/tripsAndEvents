import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  incrementQuantityFor5plus,
  decrementQuantityFor5plus,
} from "../redux/tripBookingSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Booking() {
  // const bookingData = {
  //   name: "manali",
  //   price: 5999,
  //   datesAvailable: ["March 18-20", "March 20-27"],
  // };

  const ageList = ["< 5yrs", "> 5years"];

  const bookingData = JSON.parse(localStorage.getItem("tripDetail")).data;

  const tripCartItems = useSelector((state) => state.tripCart);
  console.log(tripCartItems);
  const dispatch = useDispatch();

  // const bookTrip = (item) => {
  //   console.log("add this to cart => ", item);
  //   dispatch(addToCart(item));
  // };

  const incrementFor5OrLess = (id, item) => {
    console.log("incrementFor5OrLess");
    dispatch(addToCart(item));
    dispatch(incrementQuantity(id));
  };

  const decrementFor5OrLess = (id) => {
    console.log("decrementFor5OrLess");
    dispatch(decrementQuantity(id));
  };

  const incrementFor5OrMore = (id, item) => {
    console.log("incrementFor5OrMore");
    dispatch(addToCart(item));
    dispatch(incrementQuantityFor5plus(id));
  };

  const decrementFor5OrMore = (id) => {
    console.log("decrementFor5OrMore");
    dispatch(decrementQuantityFor5plus(id));
  };

  const [isBookHidden, setIsBookHidden] = useState(true);
  const [dateSelected, setDateSelected] = useState(
    bookingData.datesAvailable[0]
  );

  useEffect(() => {
    localStorage.setItem("tripCart", JSON.stringify(tripCartItems));
  }, [tripCartItems]);

  useEffect(() => {
    const bool = !(
      tripCartItems.countOf5OrLess + tripCartItems.countOf5OrMore >
      0
    );
    setIsBookHidden(bool);
    console.log(
      "disable",
      tripCartItems.countOf5OrLess + tripCartItems.countOf5OrMore
    );
  }, [tripCartItems]);

  // useEffect(() => {
  //   setDateSelected(bookingData.datesAvailable[0]);
  // }, [bookingData, dateSelected]);

  const handleDateChange = (event) => {
    setDateSelected(event.target.value);
    // dispatch(
    //   addToCart({ date: dateSelected, countOf5OrLess: 0, countOf5OrMore: 0 })
    // );
  };

  return (
    <div className="pt-24 px-24 w-full items-center justify-center text-center">
      <h2 className="text-4xl font-bold text-blue-400 mt-12">
        Trip to {bookingData.name}
      </h2>
      <p className="text-lg">{bookingData.datesAvailable.join(" | ")}</p>

      <div className="flex flex-row mx-24 my-12 pb-4 text-center items-center justify-center md:gap-12  border-b-4 rounded-lg text-lg">
        <div>
          <select
            className="border-2 gap-6 px-2 py-1 rounded-2xl items-center text-center shadow-md"
            onChange={handleDateChange}
          >
            {bookingData.datesAvailable.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        {/* <Stepper label={`< 5yrs`} />
          <Stepper label={`> 5yrs`} /> */}

        {ageList.map((ageRange) => (
          <div key={ageRange} className="flex flex-row gap-2 items-center ">
            <p>{ageRange}</p>
            <div className="flex flex-row border-2 gap-6 px-2 py-1 rounded-2xl items-center text-center shadow-md">
              <div>
                <button
                  className="bg-yellow-500 rounded-full p-1"
                  onClick={() => {
                    ageRange === "< 5yrs"
                      ? decrementFor5OrLess(dateSelected, {
                          date: dateSelected,
                          price: bookingData.price,
                        })
                      : decrementFor5OrMore(dateSelected, {
                          date: dateSelected,
                          price: bookingData.price,
                        });
                  }}
                >
                  <FaMinus size={10} />
                </button>
              </div>
              <p>
                {ageRange === "< 5yrs"
                  ? tripCartItems.countOf5OrLess
                  : tripCartItems.countOf5OrMore}
              </p>
              <div>
                <button
                  className="bg-yellow-500 rounded-full p-1"
                  onClick={() => {
                    ageRange === "< 5yrs"
                      ? incrementFor5OrLess(dateSelected, {
                          date: dateSelected,
                          price: bookingData.price,
                          // count: tripCartItems.countOf5OrLess,
                        })
                      : incrementFor5OrMore(dateSelected, {
                          date: dateSelected,
                          price: bookingData.price,
                          // count: tripCartItems.countOf5OrMore,
                        });
                  }}
                >
                  <FaPlus size={10} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* <a href={`/checkout`}> */}
        <button
          className={`bg-blue-400 text-white px-4 py-2 rounded-lg hover:scale-110 duration-500 disabled:bg-gray-300`}
          disabled={isBookHidden}
        >
          Book
        </button>
        {/* </a> */}
      </div>
      {bookingData.roomSelection && <div>Rooms</div>}
    </div>
  );
}
