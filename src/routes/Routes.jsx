import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Register from "../components/form/Register";
import Login from "../components/form/Login";
import HowToWork from "../components/home/HowToWork";
import ReminderForm from "../components/reminder/reminderForm/ReminderForm";
import MyReminder from "../components/reminder/myReminder/MyReminder";
import ErrorPage from "../errorPage/ErrorPage";

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
  {
    path: "/myReminder",
    element: <MyReminder></MyReminder>,
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },



]);
