import React from "react";
import { CDN_URL } from "../assets/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, areaName } =
    resData.info;

  return (
    <div
      className="bg-white rounded-2xl shadow-lg border border-gray-200 
                 w-[30vw] sm:w-68 h-auto sm:h-93 mx-[1vw] my-2 
                 flex flex-col overflow-hidden transform transition-transform 
                 duration-200 hover:scale-105 hover:shadow-2xl hover:border-pink-400 hover:z-10 group"
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="h-[22vw] sm:h-51 w-full object-cover group-hover:brightness-90 transition"
      />
      <div className="px-3 py-2 flex flex-col gap-1 sm:gap-2 flex-1">
        <h3 className="text-[10px] sm:text-lg font-bold  text-gray-800 truncate">
          {name}
        </h3>
        <p className="text-gray-500 text-[9px] sm:text-xs truncate">
          {cuisines.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-1 sm:mt-2">
          <span className="bg-green-100 text-green-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg font-semibold text-[9px] sm:text-xs">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-700 text-[9px] sm:text-xs">
            {costForTwo}
          </span>
        </div>
        <span className="text-gray-400 text-[9px] sm:text-xs">
          {areaName}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => (props) => (
  <div className="relative">
    <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded z-10 shadow">
      PROMOTED
    </span>
    <RestaurantCard {...props} />
  </div>
);
