import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
