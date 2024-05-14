import React from "react";

const FeaturedPlaylistCard = ({ info }) => {
  const { name, description, images } = info;
  const { url } = images[0];
  console.log(url);
  return (
    <div className="m-2 p-2 w-48 shadow-md hover:bg-slate-200">
      <img src={url} alt="album-art" />
      <ul>
        <li className="font-semibold">{name}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default FeaturedPlaylistCard;
