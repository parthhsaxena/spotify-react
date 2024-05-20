import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import FeaturedPlaylistCard from "./FeaturedPlaylistCard";
import SearchedPlaylistCard from "./SearchedPlaylistCard";
import { ACCESS_CODE, FEATURED_PLAYLISTS } from "../utils/constants";

const Body = () => {
  // Implementing Loader
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    loader == false ? setLoader(true) : setLoader(false);
  }, []);
  console.log(loader);

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

  // Playlists Rendering
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  useEffect(() => {
    playlist_data();
  }, []);

  const playlist_data = async () => {
    const data = await fetch(FEATURED_PLAYLISTS, {
      headers: {
        Authorization: ACCESS_CODE,
      },
    });
    const json = await data.json();
    setFeaturedPlaylists(json?.playlists?.items);
  };

  //   return featuredPlaylists.length === 0 ? (
  //     <Shimmer />
  //   ) : (
  return searchQuery.length > 0 ? (
    <div className="mx-4 my-5">
      <input
        placeholder="Search"
        type="text"
        className="w-96 shadow-sm border rounded-full px-4 py-2 bg-gray-50 ring-[3px] ring-emerald-500 ring-inset"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex flex-wrap">
        {updatedPlaylists.map((p) => (
          <SearchedPlaylistCard key={p.id} info={p} />
        ))}
      </div>
    </div>
  ) : (
    <div className="mx-4 my-5">
      <input
        placeholder="Search"
        type="text"
        className="w-96 shadow-sm border rounded-full px-4 py-2 bg-gray-50 ring-[3px] ring-emerald-500 ring-inset"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="w-10/12 mt-10 flex flex-wrap">
        {featuredPlaylists?.map((play) => {
          return <FeaturedPlaylistCard key={play.id} info={play} />;
        })}
      </div>
    </div>
  );
};

export default Body;
