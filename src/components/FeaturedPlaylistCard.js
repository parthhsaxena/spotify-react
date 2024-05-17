import React from "react";

const FeaturedPlaylistCard = ({ info }) => {
  const { name, description, images } = info;
  const { url } = images[0];
  return (
    <div className="m-2 p-2 w-48 shadow-md hover:bg-slate-200 cursor-pointer">
      <img src={url} alt="album-art" />
      <ul>
        <li className="font-semibold text-slate-800">{name}</li>
        <li className="text-sm text-slate-600 pt-2">{description}</li>
      </ul>
      {/* <button className="hover:bg-green-800 h-20 w-20" /> */}
    </div>
  );
};

export default FeaturedPlaylistCard;
