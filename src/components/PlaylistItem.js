import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Item from "./Item";
import { useAuthToken } from "../utils/refreshToken";

const PlaylistItem = () => {
  const accessToken = useAuthToken();
  const [playlistItems, setPlaylistItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const playlistItemData = async () => {
      if (!accessToken) return;

      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${location.state.id}/tracks?market=IN&limit=50`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch playlist items");
      }

      const json = await response.json();
      setPlaylistItems(json?.items || []);
    };

    playlistItemData();
  }, [location.state.id, accessToken]);

  console.log(location);
  console.log(playlistItems);
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="fixed left-0 top-0 h-full w-1/6 bg-gradient-to-b from-stone-400 to-stone-600  p-4 border border-[#9fb5a6]">
        <Sidebar />
      </div>
      <div className="fixed right-0 top-0 h-full w-5/6 bg-white shadow overflow-auto  cursor-default">
        <div className="sticky top-0 z-10 grid grid-cols-10  p-4 bg-stone-600 text-white">
          <div className="col-span-1 font-semibold">Number</div>
          <div className="col-span-4 font-semibold">Song</div>
          <div className="col-span-3 font-semibold">Added</div>
          <div className="col-span-2 font-semibold">Duration</div>
        </div>
        <div className="overflow-auto h-full">
          {playlistItems?.map((p, index) => {
            return <Item key={p.track.id} info={p} index={index + 1} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
