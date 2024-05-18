import React from "react";

const SearchedPlaylistCard = ({ info }) => {
  const { name, images } = info;
  const { url } = images[0];
  return (
    <div className="m-2 p-2 w-48 shadow-md hover:bg-slate-200 cursor-pointer">
      <img src={url} />
      <ul>
        <li className="font-semibold text-slate-800">{name}</li>
      </ul>
    </div>
  );
};

export default SearchedPlaylistCard;
