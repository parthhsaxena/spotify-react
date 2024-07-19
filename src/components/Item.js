import React, { useState } from "react";
import { millisecondsToDuration, timeAgo } from "../utils/constants";

const Item = ({ info }) => {
  const { added_at } = info;
  const { name, duration_ms } = info?.track;
  const { url } = info?.track?.album?.images[2];
  const { name: artist } = info?.track?.artists[0];
  // info?.track?.id == GETTING TRACK ID
  return (
    // <div>
    //   <ul className="p-2 my-1 mx-24">
    //     <li className="p-1 cursor-default shadow-lg shadow-slate-400 border border-slate-400 bg-sky-300 hover:bg-sky-500">
    //       <ul className="flex justify-between">
    //         <div className="flex space-x-4 space-y-2">
    //           <img className="border border-black" src={url} alt="thumb" />
    //           <ul>
    //             <li className="font-semibold text-lg">{name}</li>
    //             <li className="font-light text-sm">{artist}</li>
    //           </ul>
    //         </div>
    //         <div className="flex space-x-36">
    //           <li className="text-sm">{timeAgo(added_at)}</li>
    //           <li className="text-sm">{millisecondsToDuration(duration_ms)}</li>
    //         </div>
    //       </ul>
    //     </li>
    //   </ul>
    // </div>
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6 p-2 items-center cursor-default hover:bg-gray-100">
        <div className="col-span-6 flex items-center space-x-4 ">
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
