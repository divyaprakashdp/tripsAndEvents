// import { Link } from 'react-router-dom'
// import myContext from '../../context/data/myContext';
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Loader from "./Loader";

function Login() {
  const location = useLocation();
  // console.log(location.state);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInWithCredentials, user } = UserAuth();
  const [loading, setLoading] = useState(false);

  //     const context = useContext(Aut)
  //     const { loading,setLoading} = context

  const signin = async () => {
    setLoading(true);
    try {
      await signInWithCredentials(email, password);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Signin Successful!");
      if (location.state?.from) {
        navigate(location.state?.from);
      } else {
        navigate("/");
      }
      // window.location.href = "/";
      setLoading(false);
      return <Navigate to="/" state={{ prev: location.pathname }} />;
    } catch (error) {
      toast.error("Sigin Failed");
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            onClick={signin}
            // onKeyPress={(e) => (e.keyCode === 13 ? signin : "")}
            className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account{" "}
            <Link className=" text-yellow-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
