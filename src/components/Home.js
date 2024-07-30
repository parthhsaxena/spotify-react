import Sidebar from "./Sidebar";
import Browse from "./Browse";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="fixed left-0 top-0 h-full w-1/6 bg-gradient-to-b from-stone-400 to-stone-600  p-4 border border-[#9fb5a6]">
          <Sidebar />
        </div>
        <div className="fixed right-0 top-0 h-full w-5/6  shadow overflow-auto  cursor-default">
          <Browse />
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
