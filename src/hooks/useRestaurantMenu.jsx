import { useState, useEffect } from "react";
import { SWIGGY_MENU_BASE, SWIGGY_PROXY_BASE } from "../constants/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const swiggyUrl = SWIGGY_MENU_BASE + resId;
        const proxyUrl = SWIGGY_PROXY_BASE + encodeURIComponent(swiggyUrl);

        const response = await fetch(proxyUrl);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            `API error: ${response.status} - ${errorData.details || errorData.error || "Unknown error"}`
          );
        }

        const json = await response.json();
        setResInfo(json);

      } catch (error) {
        console.error("Failed to fetch menu:", error);
        setResInfo(null);
      }
    };

    if (resId) {
      fetchData();
    }
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
