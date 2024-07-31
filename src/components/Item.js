import React, { useState } from "react";
import { millisecondsToDuration, timeAgo } from "../utils/constants";
import { FaPlay } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

const Item = ({ info, index }) => {
  const { added_at } = info;
  const { name, duration_ms } = info?.track;
  const { url } = info?.track?.album?.images[2];
  const { name: artist } = info?.track?.artists[0];
  const playButtonStyle = { color: "#57534e", fontSize: "1.3em" };
  const addButtonStyle = { color: "#ffb400", fontSize: "1.6em" };

  return (
    <div className="container mx-auto py-6 relative group">
      <div className="grid grid-cols-10  p-4 items-center cursor-default hover:bg-stone-100">
        <div className="">
          <div className=" group-hover:hidden"> {index}</div>
          <div className="flex gap-4">
            <FaPlay
              className="group-hover:block hidden"
              style={playButtonStyle}
            />
            <IoMdAddCircleOutline
              className="group-hover:block hidden"
              style={addButtonStyle}
            />
          </div>
        </div>

        <div className="col-span-4 flex items-center space-x-3 ">
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
        <div className="col-span-2 text-sm text-gray-500">
          {millisecondsToDuration(duration_ms)}
        </div>
      </div>
    </div>
  );
};

export default Item;
