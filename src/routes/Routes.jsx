import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Register from "../components/form/Register";
import Login from "../components/form/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

]);
