import { useState, useEffect } from "react";

const SWIGGY_MENU_BASE =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const swiggyUrl = SWIGGY_MENU_BASE + resId;

        // Use a public CORS proxy
        const proxyUrl = "https://cors-anywhere.herokuapp.com/" + swiggyUrl;

        const response = await fetch(proxyUrl);
        const data = await response.json();

        setResInfo(data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
        setResInfo(null);
      }
    };

    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
