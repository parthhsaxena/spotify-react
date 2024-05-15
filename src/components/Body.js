import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import FeaturedPlaylistCard from "./FeaturedPlaylistCard";
import { ACCESS_CODE, FEATURED_PLAYLISTS } from "../utils/constants";

const Body = () => {
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

  return featuredPlaylists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-10/12 mt-10 flex flex-wrap">
      {featuredPlaylists?.map((play) => {
        return <FeaturedPlaylistCard key={play.id} info={play} />;
      })}
    </div>
  );
};

export default Body;
