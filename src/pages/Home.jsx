import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard, { withPromotedLabel } from "../components/restaurants/RestaurantCard";
import RestaurantCardsShimmer from "../components/common/Shimmer";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { addRestaurants, filterTopRated, resetFilter } from "../store/slices/restaurantsSlice";
import { SWIGGY_ALL_RESTAURANTS } from "../constants/constants";

const Home = () => {
  const dispatch = useDispatch();
  const allRestaurants = useSelector((store) => store.restaurants.all);
  const filteredRestaurants = useSelector((store) => store.restaurants.filtered);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    if (allRestaurants.length === 0) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
        const proxyUrl = `/api/swiggy?url=${encodeURIComponent(SWIGGY_ALL_RESTAURANTS)}`;
        const response = await fetch(proxyUrl);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API error: ${response.status} - ${errorData.details || errorData.error}`);
        }

        const json = await response.json();
        const properData = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        dispatch(addRestaurants(properData));

    } catch (error) {
        console.error("Failed to fetch restaurants:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h3>Looks like you are offline. Please check your internet connection.</h3>;
  }

  return filteredRestaurants.length === 0 && allRestaurants.length === 0 ? (
    <RestaurantCardsShimmer />
  ) : (
    <div className="body min-h-[80vh] bg-pink-50 py-8">
      <div className="filter flex items-center flex-wrap sm:ml-4 ml-68 sm:mt-3 -mt-4 mb-6 gap-4">
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

export default Home;