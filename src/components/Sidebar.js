import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="m-1 p-2 grid gap-y-[31rem]">
      <div className="grid grid-cols-1">
        <label className="text-slate-100 mb-3 mt-5 font-semibold text-3xl text-left">
          Library
        </label>
        <Link to={"/"}>
          <button className="text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700 hover:text-[#1DB954] text-left">
            Browse
          </button>
        </Link>
        <button className="text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#1DB954] text-left">
          Songs
        </button>
        <button className="text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#1DB954] text-left">
          Artists
        </button>
        <label className="text-slate-100 font-semibold mt-5 mb-3 text-3xl text-left">
          My music
        </label>
        <button className="text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#1DB954] text-left">
          Recently played
        </button>
        <button className="text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#1DB954] text-left">
          Favourite songs
        </button>
        <div className="grid -bottom-full"></div>
      </div>
      <div>
        <Link to={"/login"}>
          <button className="font-bold text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#1DB954] text-left">
            Login
          </button>
        </Link>
      </div>
      {/* <button className="m-1 p-2 border border-slate-500 text-left">
        🏠 Home
      </button>
      <Link className="m-1 p-2 border border-slate-500 text-left" to={"/login"}>
        Profile
      </Link>
      <hr className="w-28 h-1 mx-auto my-4 border-0 rounded bg-gray-700" />
      <p className="text-lg text-gray-700">Your Library</p> */}
    </div>
  );
};

export default Sidebar;
