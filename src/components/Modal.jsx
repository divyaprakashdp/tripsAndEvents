import { FaCross, FaX } from "react-icons/fa6";

export default function Modal({ open, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center text-center transition-colors text-black z-10
            ${open ? "visible bg-black/70 " : "hidden"}`}
    >
      <button
        className="absolute top-[15%] right-[50%] md:top-[25%] md:right-[35%] text-gray-500 bg-red-200 hover:text-gray-900 hover:bg-red-400 rounded-full px-2 py-1"
        onClick={onClose}
      >
        <FaX />
      </button>

      <div className="items-center"></div>

      {children}
    </div>
  );
}
