import Sidebar from "./Sidebar";
import Browse from "./Browse";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="fixed left-0 top-0 h-full w-1/6 bg-gradient-to-b from-stone-400 to-stone-600  p-4 ">
          <Sidebar />
        </div>
        <div className="fixed bg-stone-100 right-0 top-0 h-full w-5/6  shadow overflow-auto  cursor-default">
          <Outlet />
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
