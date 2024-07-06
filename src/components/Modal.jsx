import { useEffect } from "react";
import { FaCross, FaX } from "react-icons/fa6";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed inset-0 flex justify-center items-center text-center transition-colors z-10
            ${open ? "visible bg-black/20 " : "hidden"}`}
    >
      <button
        className="z-30 absolute top-[15%] right-[50%] md:top-[8%] md:right-[15%] text-gray-500 bg-red-200 hover:text-gray-900 hover:bg-red-400 rounded-full px-2 py-1"
        onClick={onClose}
      >
        <FaX />
      </button>

      <div className="object-cover"></div>

      {children}
    </div>
  );
}
