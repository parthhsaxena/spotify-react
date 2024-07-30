import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import FeaturedPlaylistCard from "./FeaturedPlaylistCard";
import SearchedPlaylistCard from "./SearchedPlaylistCard";
import { FEATURED_PLAYLISTS } from "../utils/constants";
import { useAuthToken } from "../utils/refreshToken";

const Browse = () => {
  const accessToken = useAuthToken();

  // Implementing Loader
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    loader == false ? setLoader(true) : setLoader(false);
  }, []);

  // Implementing Search Feature
  const [searchQuery, setSearchQuery] = useState("");
  const [updatedPlaylists, setUpdatedPlaylists] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        getSearchData();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchData = async () => {
    if (!accessToken) return;

    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        searchQuery
      )}&type=playlist&market=IN&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch search data");
    }

    const json = await response.json();
    setUpdatedPlaylists(json?.playlists?.items || []);
  };

  // Playlists Rendering
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (!accessToken) return;

      const response = await fetch(FEATURED_PLAYLISTS, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch playlists");
      }

      const json = await response.json();
      setFeaturedPlaylists(json?.playlists?.items);
    };

    fetchPlaylists();
  }, [accessToken]);

  //   return featuredPlaylists.length === 0 ? (
  //     <Shimmer />
  //   ) : (
  return searchQuery.length > 0 ? (
    <div className="mx-5 my-5">
      <input
        placeholder="Search"
        type="text"
        className="w-96 shadow-sm border rounded-full px-4 py-2 ml-3 bg-gray-50 ring-[2px] ring-stone-700 ring-inset"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex flex-wrap">
        {updatedPlaylists.map((p) => (
          <SearchedPlaylistCard key={p.id} info={p} />
        ))}
      </div>
    </div>
  ) : (
    <div className="mx-5 my-5">
      <input
        placeholder="Search"
        type="text"
        className="w-96 shadow-sm border rounded-full px-4 py-2 ml-3 bg-gray-50 ring-[2px] ring-stone-700 ring-inset"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex flex-wrap">
        {featuredPlaylists.map((play) => (
          <FeaturedPlaylistCard key={play.id} info={play} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
