import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ACCESS_CODE } from "../utils/constants";
import Item from "./Item";

const PlaylistItem = () => {
  const [playlistItems, setPlaylistItems] = useState();
  const location = useLocation();
  console.log(location);
  console.log(playlistItems);

  const playlistItemData = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/playlists/" +
        location.state.id +
        "/tracks?market=IN&limit=50",
      {
        headers: {
          Authorization: ACCESS_CODE,
        },
      }
    );
    const json = await data.json();
    setPlaylistItems(json?.items);
  };
  useEffect(() => {
    playlistItemData();
  }, [location.state.id]);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* <div className="sticky top-1 shadow-md shadow-zinc-500 bg-gray-700 p-0.5 my-0.5 mx-24">
        <div className="flex justify-between font-medium text-slate-200 ">
          <div>
            <div className="text-sm">Title</div>
          </div>
          <div className="space-x-36 space-y-2">
            <div className="text-sm">Date Added</div>
            <div className="text-sm">Duration</div>
          </div>
        </div>
      </div> */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg cursor-default sticky top-1">
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-700 text-white  z-10">
          <div className="col-span-6 font-semibold ">Song</div>
          <div className="col-span-3 font-semibold ">Added</div>
          <div className="col-span-3 font-semibold ">Duration</div>
        </div>
      </div>
      {playlistItems?.map((p) => {
        return <Item info={p} />;
      })}
    </div>
  );
};

export default PlaylistItem;