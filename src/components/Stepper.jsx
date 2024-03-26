import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Stepper({ label, count, incrementer, decrementer }) {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-row gap-2 items-center ">
      <p>{label}</p>
      <div className="flex flex-row border-2 gap-6 px-2 py-1 rounded-2xl items-center text-center shadow-md">
        <div>
          <button
            className="bg-yellow-500 rounded-full p-1"
            onClick={() => setCounter(counter - 1)}
          >
            <FaMinus size={10} />
          </button>
        </div>
        <p>{counter}</p>
        <div>
          <button
            className="bg-yellow-500 rounded-full p-1"
            onClick={() => setCounter(counter + 1)}
          >
            <FaPlus size={10} />
          </button>
        </div>
      </div>
    </div>
  );
}
