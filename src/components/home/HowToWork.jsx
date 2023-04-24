import React from "react";

const HowToWork = () => {
  return (
    <div>
      <section className="p-6 bg-gray-800 text-gray-100">
        <div className="container mx-auto">
          <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-violet-400">
            How it works
          </span>
          <h2 className="text-5xl font-bold text-center text-gray-50">
            A reminder can life easy
          </h2>
          <div className="grid gap-6 my-16 lg:grid-cols-3">
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">
                1
              </div>
              <p className="text-2xl font-semibold">
                Create an account and sign in
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">
                2
              </div>
              <p className="text-2xl font-semibold">
                Add a new reminder with a description, due date and time, and
                notification preferences
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">
                3
              </div>
              <p className="text-2xl font-semibold">
                View all your reminders on the dashboard
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">
                4
              </div>
              <p className="text-2xl font-semibold">
                Mark completed reminders as done{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToWork;
