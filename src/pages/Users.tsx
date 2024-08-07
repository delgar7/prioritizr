import React from "react";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";

const handleAddUser = () => {};
const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="mt-5 flex items-center px-2 justify-between w-full bg-slate-300 dark:bg-slate-800 dark:text-gray-400">
        <h2 className="p-3 text-2xl font-bold">Users</h2>
        <button className="py-0.5 px-2">+</button>
        <TextField
          label="User"
          className="font-medium cursor-pointer"
          // value={editTitle}
          // onBlur={handleTitleChange}
          autoFocus
          // onChange={(event) => setEditTitle(event.target.value)}
          defaultValue="Small"
          size="small"
          InputLabelProps={{
            className: "dark:text-slate-500",
          }}
          InputProps={{
            classes: {
              input: "dark:text-slate-300",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Users;
