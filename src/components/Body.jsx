import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import RestaurantCardsShimmer from "./Shimmer";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../assets/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurants, filterTopRated, resetFilter } from "../assets/restaurantsSlice";
import { SWIGGY_ALL_RESTAURANTS } from "../assets/constants";

const Body = () => {
  const dispatch = useDispatch();
  const allRestaurants = useSelector((store) => store.restaurants.all);
  const filteredRestaurants = useSelector((store) => store.restaurants.filtered);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    if (allRestaurants.length === 0) {
      fetchData();
    }
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const proxyUrl = "/api/swiggy?url=" + encodeURIComponent(SWIGGY_ALL_RESTAURANTS);
    const data = await fetch(proxyUrl);
    const json = await data.json();
    const properData =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    dispatch(addRestaurants(properData));
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h3>Looks like you are offline. Please check your internet connection.</h3>;
  }

  return filteredRestaurants.length === 0 ? (
    <RestaurantCardsShimmer />
  ) : (
    <div className="body min-h-[80vh] bg-pink-50 py-8">
      <div className="filter flex items-center flex-wrap sm:ml-4 ml-54 sm:mt-3 -mt-4 mb-6 gap-4">
        <button
          className="filter-btn sm:px-4 sm:py-2 px-2 py-1 bg-pink-200 rounded-lg cursor-pointer hover:bg-pink-300 hover:shadow-md transition duration-200 sm:font-semibold text-xs sm:text-lg font-medium"
          onClick={() => dispatch(filterTopRated())}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn px-4 py-2 hidden sm:inline bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 hover:shadow-md transition duration-200 font-semibold"
          onClick={() => dispatch(resetFilter())}
        >
          Reset
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;