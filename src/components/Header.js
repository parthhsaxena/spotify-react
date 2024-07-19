import { useState, useEffect } from "react";
import { ACCESS_CODE } from "../utils/constants";

const Header = () => {
  // Implementing Search Feature
  const [searchQuery, setSearchQuery] = useState("");
  const [updatedPlaylists, setUpdatedPlaylists] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => getSearchData(), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchData = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/search?q=" +
        searchQuery +
        "&type=playlist&market=IN&limit=20",
      {
        headers: {
          Authorization: ACCESS_CODE,
        },
      }
    );
    const json = await data.json();
    setUpdatedPlaylists(json?.playlists?.items || []);
  };

  return (
    <div>
      <input
        placeholder="Search"
        type="text"
        className="w-96 shadow-sm border rounded-full px-4 py-2 bg-gray-50 ring-[3px] ring-emerald-500 ring-inset"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Header;
