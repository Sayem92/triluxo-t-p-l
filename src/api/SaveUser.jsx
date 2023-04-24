import toast from "react-hot-toast";

export const userInfoSave = (name, email) => {
  const user = {
    name,
    email,
  };

  fetch(`https://triluxo-t-p-l-server.vercel.app/user/:${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("save user", data);
      toast.success("Save user data!");
    });
};
