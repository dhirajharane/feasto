import React from "react";

// For restaurant cards in Body
export const RestaurantCardsShimmer = () => (
  <div className="flex flex-wrap justify-center mt-8">
    {Array(8)
      .fill("")
      .map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 animate-pulse rounded-2xl w-60 h-96 m-4"
        ></div>
      ))}
  </div>
);

// For menu page (full-width columns)
export const ItemListShimmer = () => (
  <div className="flex flex-col gap-6 w-full md:w-8/12 mx-auto mt-8">
    {Array(5)
      .fill("")
      .map((_, i) => (
        <div
          key={i}
          className="h-28 w-full bg-gray-200 rounded-2xl animate-pulse"
        ></div>
      ))}
  </div>
);

export default RestaurantCardsShimmer;