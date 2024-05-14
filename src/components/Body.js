import React, { useEffect, useState } from "react";
import FeaturedPlaylistCard from "./FeaturedPlaylistCard";

const Body = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState("");

  useEffect(() => {
    playlist_data();
  }, []);

  const playlist_data = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers: {
          Authorization:
            "Bearer  BQDmIGk4ZpBUYmPg7uUIrqK2SIhpku4KGt-fXpDUUTP592zzGXxvWPaje-bPjb9mjJTZcon9i3gGn4wsciank6wDB0h2qB3D4fa0dMXCOfR2pZXplBU",
        },
      }
    );
    const json = await data.json();
    setFeaturedPlaylists(json?.playlists?.items);
    // console.log(featuredPlaylists);
  };

  return (
    <div className="w-10/12 mt-10 flex flex-wrap">
      {featuredPlaylists?.map((p) => {
        return <FeaturedPlaylistCard info={p} />;
      })}
    </div>
  );
};

export default Body;
