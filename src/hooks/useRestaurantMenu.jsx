import { useState, useEffect } from "react";
import { SWIGGY_MENU_BASE } from "../constants/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const swiggyUrl = SWIGGY_MENU_BASE + resId;
        const proxyUrl = "/api/swiggy?url=" + encodeURIComponent(swiggyUrl);

        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        
        // Only try to parse the text if it's not empty
        if (text) {
          const json = JSON.parse(text);
          setResInfo(json);
        } else {
          console.warn("Received empty response from the API.");
          setResInfo(null); // Or handle as you see fit
        }

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