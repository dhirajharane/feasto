import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import { LOGO_IMG } from "../../constants/constants";
import { filterRestaurants, resetFilter } from "../../store/slices/restaurantsSlice";
import { setIsCart } from "../../store/slices/cartSlice";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");
  const [searchText, setSearchText] = useState("");
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchText.trim() === "") {
      dispatch(resetFilter());
    } else {
      dispatch(filterRestaurants(searchText));
    }
  };

  return (
    <header className="sm:sticky top-0 z-50 bg-gradient-to-r from-pink-100 via-white to-pink-100 shadow-lg w-full">
      <div className="flex flex-row items-center justify-between px-2 sm:px-10 py-2 sm:py-4 w-full h-18 sm:h-28 gap-2 sm:gap-0">
        <Link to="/" className="flex-shrink-0">
          <img
            className="w-32 h-24 sm:w-68 sm:h-42 object-contain -ml-3 sm:-ml-9"
            src={LOGO_IMG}
            alt="logo"
          />
        </Link>
        <div className="flex items-center sm:bg-pink-50 bg-pink-100 rounded-full px-2 py-1 shadow-inner w-26 sm:w-full max-w-xs sm:max-w-md -ml-58 sm:ml-0 -mb-32 sm:mb-0">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1 border border-gray-400 bg-pink-100 px-2 sm:px-4 py-1 sm:py-2 rounded-l-full focus:outline-none text-gray-700 text-xs sm:text-base"
            placeholder="Search For Restaurant.."
          />
          <button
            className="px-2 sm:px-4 py-1 sm:py-2 bg-pink-400 text-white rounded-r-full font-semibold hover:bg-pink-500 transition text-xs sm:text-base"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="ml-1 sm:ml-2 px-2 sm:px-4 py-1 sm:py-2 hidden sm:inline bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition text-xs sm:text-base"
            onClick={() => {
              setSearchText("");
              dispatch(resetFilter());
            }}
          >
            Reset
          </button>
        </div>
        <nav className="flex flex-row items-center gap-4 sm:gap-10 w-auto mr-6 sm:mr-0">
          <ul className="flex flex-row items-center gap-4 sm:gap-10 text-xs sm:text-base font-medium sm:font-semibold">
            <li className="hidden sm:block">
              {onlineStatus ? "✅ Online" : "❌ Offline"}
            </li>
            <li>
              <Link to="/" className="hover:text-pink-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition -mr-3 sm:mr-0 ml-1 sm:ml-0">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-pink-500 transition hidden sm:block"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button
                className="relative"
                onClick={() => dispatch(setIsCart(true))}
              >
                <Link
                  to="/cart"
                  className="relative inline-flex items-center hover:text-pink-500 transition text-xs sm:text-base"
                >
                  <span>Cart 🛒</span>
                  
                  <span className="absolute -top-1 sm:-right-3 -right-2 bg-pink-500 text-white text-[8px] sm:text-xs rounded-full px-1 sm:px-2 py-0.5 leading-none">
                    {cartItems.length}
                  </span>
                </Link>
              </button>
            </li>
            <li className="hidden sm:block">
              <button
                className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition"
                onClick={() =>
                  setBtnName(btnName === "Login" ? "Logout" : "Login")
                }
              >
                {btnName}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;