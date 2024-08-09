import React, { useState } from "react";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import { useUsers } from "../context/UsersContext";

const Users: React.FC = () => {
  const { users, addUser } = useUsers();
  const [newUser, setNewUser] = useState<string>("");

  const handleAddUser = () => {
    if (newUser.trim() !== "" && !users.includes(newUser.trim())) {
      addUser(newUser.trim());
      setNewUser("");
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-5 flex items-center px-2 justify-between w-full bg-slate-300 dark:bg-slate-800 dark:text-gray-400">
        <h2 className="p-3 text-2xl font-bold">Users</h2>
        <TextField
          label="User"
          className="font-medium cursor-pointer"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
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
        <button className="py-0.5 px-2" onClick={handleAddUser}>
          +
        </button>
      </div>
      <div>
        <h3 className="mt-4 p-3 text-xl dark:text-slate-300">Current users:</h3>
        <ul>
          {users.map((user) => (
            <li className="p-3 dark:text-slate-300" key={user}>
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
