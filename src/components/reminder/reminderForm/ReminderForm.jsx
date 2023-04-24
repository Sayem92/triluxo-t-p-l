import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { LoaderSpin } from "../../../loading/Loader";

const ReminderForm = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    isLoading,
  } = useForm();

  const navigate = useNavigate();

  const handleAddReminder = (data) => {
    const saveData = {
      ...data,
      email: user?.email,
    };

    // sava information to the database----------
    fetch(`https://triluxo-t-p-l-server.vercel.app/addReminder`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${data.title} reminder save successful`);
        navigate("/myReminder");
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit(handleAddReminder)}>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter Title"
                {...register("title", {
                  required: "Please enter title name",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.title && (
                <p className="text-red-600">{errors.title.message}</p>
              )}
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    {...register("date", {
                      required: "Please select a date",
                    })}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.date && (
                    <p className="text-red-600">{errors.date.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    {...register("time", {
                      required: "Please select a time",
                    })}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.time && (
                    <p className="text-red-600">{errors.time.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center ">
              <button
                type="submit"
                className="hover:shadow-form rounded-md btn-success py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                {isLoading ? <LoaderSpin /> : "Create a Reminder"}
              </button>
              <Link to="/myReminder">
                <button className="hover:shadow-form rounded-md btn-info  px-8 text-center text-base font-semibold text-white outline-none btn-sm">
                  My Reminders
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReminderForm;
