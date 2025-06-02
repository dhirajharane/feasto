import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${MENU_API}${resId}`);
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