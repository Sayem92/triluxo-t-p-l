import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const MyReminder = () => {
  const { user } = useContext(AuthContext);

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/myReminders/${user?.email}`
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleDeletingReminder = (_id) => {
    const agree = window.confirm(`Are you sure delete this reminder?`);

    if (agree) {
      fetch(`http://localhost:5000/reminder/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`Reminder deleted successfully`);
            refetch();
          }
        });
    }
  };

  const handleUpdateReminder = (_id) => {
    const agree = window.confirm(`Are you sure Update this reminder?`);
    const reminder = {
      status: true,
    };
    if (agree) {
      fetch(`http://localhost:5000/reminder/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reminder),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success(`Reminder update successfully`);
          refetch();
        });
    }
  };

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
      <div className="flex justify-between items-center m-5 flex-wrap">
        <h2 className="text-3xl font-semibold">My Reminders</h2>
        <div>
          <Link to="/reminderForm">
            <button className="btn btn-sm btn-success text-white mr-5">
              Add reminder
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-sm btn-info text-white">Home</button>
          </Link>
        </div>
      </div>
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
                    <button
                      onClick={() => handleUpdateReminder(reminder?._id)}
                      className="btn btn-sm btn-info text-white"
                    >
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
                  <button
                    onClick={() => handleDeletingReminder(reminder?._id)}
                    className="btn btn-sm btn-error text-white"
                  >
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
