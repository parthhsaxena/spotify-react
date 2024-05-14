import React from "react";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
