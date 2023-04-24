import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../provider/AuthProvider";

const MyReminder = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      try {
        const res = await fetch(`myReminder/${user?.email}`);
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });



  if (isLoading) {
    return <Loading></Loading>;
  }

  if (!data?.length) {
    return (
      <div className="p-4 mt-6">
        <h1 className="text-3xl text-yellow-500">
          No Reminder Available!.
          <span className="text-blue-500 underline">
            <Link to="/reminderForm"> Please added any Reminder</Link>
          </span>
        </h1>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <h2 className="text-3xl font-semibold ml-8 mb-4">My Reminders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Status</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((reminder, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{reminder?.title}</td>
                <td>
                  {!reminder?.status && (
                    //    modal use
                    <button className="btn btn-sm btn-info text-white">
                      Not Complete
                    </button>
                  )}
                  {reminder?.status && (
                    <button className="btn btn-sm btn-success text-white">
                      Complete
                    </button>
                  )}
                </td>
                <td>{reminder?.date}</td>
                <td>{reminder?.time}</td>
                <td>
                  <button className="btn btn-sm btn-warning text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReminder;
