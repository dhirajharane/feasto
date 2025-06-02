import React from "react";
import { CDN_URL } from "../assets/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, areaName } =
    resData.info;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 w-68 h-93 m-8 flex flex-col overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:border-pink-400 hover:z-10 group">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="h-51 w-full object-cover group-hover:brightness-90 transition"
      />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-xs truncate">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg font-semibold text-xs">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-700 text-xs">{costForTwo}</span>
        </div>
        <span className="text-gray-400 text-xs mt-1">{areaName}</span>
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