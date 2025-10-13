import { useState} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../components/common/Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "../components/restaurants/RestaurantCategory";
import { ITEM_CATEGEORY_API } from "../constants/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex]=useState(null);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, costForTwo } =
    resInfo?.data?.cards?.[2]?.card?.card?.info ?? {};

  const { itemCards } =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card ?? {};

  const categories =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        `${ITEM_CATEGEORY_API}`
    ) ?? [];

  return (
    <div className="menu text-center bg-gray-100 p-4">
      <h1 className="font-bold mt-7 text-2xl ">{name}</h1>
      <h3 className="font-medium my-2 ">{cuisines?.join(", ")}</h3>
      <h3 className="font-light my-2">{costForTwoMessage ?? `₹${costForTwo / 100} for two`}</h3>

      {categories.map((category,index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index===showIndex ? true : false}
          setShowIndex={()=>setShowIndex(showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;