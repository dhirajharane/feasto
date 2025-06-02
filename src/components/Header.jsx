import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../assets/useOnlineStatus";
import { useSelector, useDispatch } from "react-redux";
import { LOGO_IMG } from "../assets/constants";
import { filterRestaurants, resetFilter } from "../assets/restaurantsSlice";
import { setIsCart } from "../assets/cartSlice";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnName, setbtnName] = useState("Login");
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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-100 via-white to-pink-100 shadow-lg w-full ">
      <div className="flex items-center justify-between px-10 py-4 max-w-full h-28">
        <div className="flex items-center gap-8 w-1/2">
          <Link to="/">
            <img
              className="w-68 h-42"
              src={LOGO_IMG}
              alt="logo"
            />
          </Link>
          <div className="flex items-center bg-pink-50 rounded-full px-3 py-2 shadow-inner w-full max-w-lg ml-20">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 border border-gray-400 bg-pink-100 px-4 py-2 rounded-l-full focus:outline-none text-gray-700"
              placeholder="Search For Restaurant.."
            />
            <button
              className="px-4 py-2.5 bg-pink-400 text-white rounded-r-full font-semibold hover:bg-pink-500 transition"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="ml-2 px-4 py-2.5 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition"
              onClick={() => {
                setSearchText("");
                dispatch(resetFilter());
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <nav className="w-1/2 flex justify-end">
          <ul className="flex items-center gap-10 text-base font-semibold">
            <li>{onlineStatus ? "✅ Online" : "❌ Offline"}</li>
            <li>
              <Link to="/" className="hover:text-pink-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500 transition">
                Contact
              </Link>
            </li>

            <li>
              <button
                className="relative"
                onClick={() => dispatch(setIsCart(true))}
              >
                <Link to="/cart" className="hover:text-pink-500 transition">
                  Cart 🛒
                  <span className="absolute -top-2 -right-4 bg-pink-500 text-white text-xs rounded-full px-2 py-0.5">
                    {cartItems.length}
                  </span>
                </Link>
              </button>
            </li>
            <li>
              <button
                className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition"
                onClick={() =>
                  setbtnName(btnName === "Login" ? "Logout" : "Login")
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
