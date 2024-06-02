import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-2/12 m-2 p-2 flex flex-col border border-black">
      <button className="m-1 p-2 border border-slate-500 text-left">
        🏠 Home
      </button>
      <Link
        className="m-1 p-2 border border-slate-500 text-left"
        to={"/profile"}
      >
        Profile
      </Link>
      <hr className="w-28 h-1 mx-auto my-4 border-0 rounded bg-gray-700" />
      <p className="text-lg text-gray-700">Your Library</p>
    </div>
  );
};

export default Sidebar;
