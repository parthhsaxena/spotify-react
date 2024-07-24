import React, { useState } from "react";
import { millisecondsToDuration, timeAgo } from "../utils/constants";

const Item = ({ info, index }) => {
  const { added_at } = info;
  const { name, duration_ms } = info?.track;
  const { url } = info?.track?.album?.images[2];
  const { name: artist } = info?.track?.artists[0];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6 p-2 items-center cursor-default hover:bg-gray-100">
        <div className="col-span-1 flex items-center space-x-4 ">{index}</div>
        <div className="col-span-5 flex items-center space-x-4 ">
          <img
            className="w-12 h-12 border border-black"
            src={url}
            alt="thumb"
          />
          <div>
            <div className="font-semibold text-lg">{name}</div>
            <div className="font-light text-sm text-gray-500">{artist}</div>
          </div>
        </div>
        <div className="col-span-3 text-sm text-gray-500">
          {timeAgo(added_at)}
        </div>
        <div className="col-span-3 text-sm text-gray-500">
          {millisecondsToDuration(duration_ms)}
        </div>
      </div>
    </div>
  );
};

export default Item;
