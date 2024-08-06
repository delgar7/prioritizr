import React from "react";
import Header from "../components/Header";

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="mt-5 flex items-center px-2 justify-between w-full bg-slate-300 dark:bg-slate-800 dark:text-gray-400">
        <h2 className="p-3 text-2xl font-bold">Users</h2>
        <button className="py-0.5 px-2">+</button>
      </div>
    </div>
  );
};

export default Users;
