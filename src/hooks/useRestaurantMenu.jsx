import { useState, useEffect } from "react";
import { SWIGGY_MENU_BASE } from "../constants/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const swiggyUrl = SWIGGY_MENU_BASE + resId;
        const proxyUrl = "/api/swiggy?url=" + encodeURIComponent(swiggyUrl);

        const data = await fetch(proxyUrl);
        const json = await data.json();
        setResInfo(json);
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