import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Browse from "./components/Browse";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";
import Profile from "./components/Profile";
import PlaylistItem from "./components/PlaylistItem";
import Songs from "./components/Songs";

function App() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Browse />,
        },
        {
          path: "/items",
          element: <PlaylistItem />,
        },
        {
          path: "/songs",
          element: <Songs />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
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
