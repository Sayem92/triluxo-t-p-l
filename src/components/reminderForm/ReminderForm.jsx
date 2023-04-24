import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const ReminderForm = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddReminder = (data) => {
    const saveData = {
      ...data,
      email: user?.email,
    };

    console.log(saveData);

     // sava information to the database----------
     fetch(`/addReminder`, {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(saveData)
    })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast.success(`${data.title} reminder save successful`);
            // navigate('/myReminders');
        })
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

            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReminderForm;