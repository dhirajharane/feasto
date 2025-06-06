import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Decode the base Swiggy URL from MENU_API, append resId, then encode again for the proxy
        const baseUrl = decodeURIComponent(MENU_API);
        const fullSwiggyUrl = baseUrl + resId;
        const proxyUrl = "/api/swiggy?url=" + encodeURIComponent(fullSwiggyUrl);

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