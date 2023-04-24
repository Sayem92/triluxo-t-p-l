import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Register from "../components/form/Register";
import Login from "../components/form/Login";
import HowToWork from "../components/home/HowToWork";
import ReminderForm from "../components/reminderForm/ReminderForm";

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
  {
    path: "/learn-more",
    element: <HowToWork></HowToWork>,
  },
  {
    path: "/reminderForm",
    element: <ReminderForm></ReminderForm>,
  },

]);
