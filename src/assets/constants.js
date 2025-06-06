import logos from "./logos.png";
export const LOGO_IMG = logos;

const VERCEL_PROXY = "/api/swiggy?url=";

export const MENU_API =
  VERCEL_PROXY +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
  );

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

export const ALL_RESTAURANTS_API =
  VERCEL_PROXY +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING#"
  );

export const ITEM_CATEGEORY_API =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";