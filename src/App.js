import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";
import Profile from "./components/Profile";
import PlaylistItem from "./components/PlaylistItem";

function App() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/items",
      element: <PlaylistItem />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // This part will be executed whenever user SignIn or SignUp
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // This part will be executed whenever user SignOut
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
}

export default App;
