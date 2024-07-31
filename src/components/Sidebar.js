import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  // Logout functionality
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error");
      });
  };

  const userEmail = useSelector((state) => state.user?.email);

  return (
    <div className="m-1 p-2 flex flex-col justify-between h-full">
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
        {/* tapping on this button should empty store data */}
        {userEmail ? (
          <button
            className="font-bold text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:bg-stone-700  hover:text-[#ffb400] text-left"
            onClick={handleSignOut}
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="font-bold text-slate-100 rounded-full w-fit m-1 px-5 py-2 hover:text-[#ffb400] text-left">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
