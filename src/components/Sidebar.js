import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="m-1 p-2 grid gap-y-[31rem]">
      <div className="grid grid-cols-1">
        <label className="text-slate-100 mb-3 mt-5 font-semibold text-3xl text-left">
          Library
        </label>
        <Link to={"/"}>
          <button className="text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700 hover:text-[#ffb400] text-left">
            Browse
          </button>
        </Link>
        <Link to={"/songs"}>
          <button className="text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#ffb400] text-left">
            Songs
          </button>
        </Link>
        <button className="text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#ffb400] text-left">
          Artists
        </button>
        <label className="text-slate-100 font-semibold mt-5 mb-3 text-3xl text-left">
          My music
        </label>
        <button className="text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#ffb400] text-left">
          Recently played
        </button>
        <button className="text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#ffb400] text-left">
          Favourite songs
        </button>
        <div className="grid -bottom-full"></div>
      </div>
      <div>
        {/* Need to add a condition here so that Login text changes to Logout when user data is present in redux-store */}
        {}
        <Link to={"/login"}>
          <button className="font-bold text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#ffb400] text-left">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
