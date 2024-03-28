import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const tripCartItems = useSelector((state) => state.tripCart);
  console.log(tripCartItems);

  useEffect(() => {
    localStorage.setItem("tripCart", JSON.stringify(tripCartItems));
  }, [tripCartItems]);

  return (
    <div className="pt-12">Booking a trip to {tripCartItems[0].name} </div>
  );
}
