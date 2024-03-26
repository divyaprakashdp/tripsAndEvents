import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Layout from "../src/components/Layout";
import HomePage from "./components/HomePage";
import TripDetail from "./components/TripDetail";
import Booking from "./components/Booking";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import Checkout from "./components/Checkout";

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:destination" element={<TripDetail />} />
          <Route path="/:destination/book" element={<Booking />} />

          <Route
            path="/checkout"
            element={
              <ProtectedRoutes>
                <Checkout />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </AuthContextProvider>
  // </React.StrictMode>
);
