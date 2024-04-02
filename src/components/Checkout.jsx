import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const tripCartItems = useSelector((state) => state.tripCart);
  const tripDetails = useSelector((state) => state.tripDetail).data;
  console.log(tripDetails);

  // useEffect(() => {
  //   localStorage.setItem("tripCart", JSON.stringify(tripCartItems));
  // }, [tripCartItems]);

  return (
    <div className="flex flex-col w-[60%] h-screen items-center justify-center m-auto">
      <div className="flex flex-col items-center justify-center m-auto shadow-lg shadow-blue-200 p-12 rounded-lg border-b-8 border-blue-500 uppercase gap-8">
        <h2 className="text-2xl font-semibold underline">Order Summary</h2>
        <table className="table-auto border-2 text-lg m-4 shadow-lg shadow-blue-200">
          <thead>
            <tr className="border-2">
              <th className="border-2">ITEM</th>
              <th className="border-2">Trip Date</th>
              <th className="border-2">QTY</th>
              <th className="border-2">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 p-4">
                {tripDetails.tag} to {tripDetails.name}
              </td>
              <td className="border-2 p-4">{tripCartItems.date}</td>
              <td className="border-2 p-4">
                <p>kids x {tripCartItems.countOf5OrLess}</p>
                <p>grownup x {tripCartItems.countOf5OrMore}</p>
              </td>
              <td className="border-2 p-4">
                &#8377;
                {tripCartItems.totalAmount}
              </td>
            </tr>
          </tbody>
        </table>
        <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:scale-110 duration-500 uppercase shadow-lg">
          Continue
        </button>
      </div>
    </div>
  );
}
