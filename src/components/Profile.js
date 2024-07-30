import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
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

  return (
    <div className="flex justify-center">
      {/* tapping on this button should take us back to home screen and empty store data */}
      <button
        onClick={handleSignOut}
        className="m-2 p-2 border border-slate-500 text-left text-lg font-semibold"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
