import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ACCESS_CODE } from "../utils/constants";
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
      <div className="bg-white shadow overflow-hidden sm:rounded-lg cursor-default sticky top-1">
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-700 text-white z-10">
          <div className="col-span-1 font-semibold ">#</div>
          <div className="col-span-5 font-semibold ">Song</div>
          <div className="col-span-3 font-semibold ">Added</div>
          <div className="col-span-3 font-semibold ">Duration</div>
        </div>
      </div>
      {playlistItems?.map((p, index) => {
        return <Item key={p.track.id} info={p} index={index + 1} />;
      })}
    </div>
  );
};

export default PlaylistItem;
