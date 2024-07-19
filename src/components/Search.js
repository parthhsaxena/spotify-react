import React, { useEffect, useState } from "react";
import { ACCESS_CODE, SEARCH_DATA } from "../utils/constants";
import SearchedPlaylistCard from "./SearchedPlaylistCard";

const Search = () => {
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
    <div className="mx-4 my-5">
      <input
        placeholder="Search"
        type="text"
        className="w-96 shadow-sm border rounded-full px-4 py-2 bg-gray-50 ring-[3px] ring-emerald-500 ring-inset"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex flex-wrap">
        {updatedPlaylists.map((p) => (
          <SearchedPlaylistCard key={p.name} info={p} />
        ))}
      </div>
    </div>
  );
};

export default Search;
