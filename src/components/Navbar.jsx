import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { UserAuth } from "../context/AuthContext";

export default function Navbar() {
  const authUser = UserAuth();
  console.log(authUser.user.uid);
  const [showSignup, setShowSignup] = useState(true);
  const [loading, setLoading] = useState(false);
  const navList = ["Feb Trip", "March Trip", "Good Friday", "Holi"];

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    setLoading(true);
    localStorage.clear("user");
    window.location.href = "/";
    toast.info("Logged out successfully!");
    setLoading(false);
  };

  return (
    <>
      <div className="fixed flex flex-row text-white text-lg h-12 w-full text-center items-center justify-between bg-[#0C172F] m-auto shadow-[0_1px_7px_0_rgba(1, 1, 1, 0.4)] z-30">
        <div className="flex flex-row items-center justify-left ml-12">
          <a href="/" className=" text-2xl font-extrabold mr-12">
            tripAndEvents
          </a>
          {navList.map((navItem) => (
            <div className="flex mr-12" key={navItem}>
              <NavLink to={"/"}>{navItem}</NavLink>
            </div>
          ))}
        </div>

        <div className="justify-right mr-12">
          {authUser.user.uid ? (
            <a onClick={logout} className="cursor-pointer">
              Logout
            </a>
          ) : (
            showSignup && (
              <Link to={"/signup"} onClick={() => setShowSignup(false)}>
                Signup/SignIn
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}
