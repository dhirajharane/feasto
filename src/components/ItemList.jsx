import React, { useState } from "react";
import { CDN_URL } from "../assets/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../assets/cartSlice";

const ItemList = ({ items }) => {
  const isCart = useSelector((store) => store.cart.isCart);
  const dispatch = useDispatch();
  const [popup, setPopup] = useState("");

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setPopup(`${item.card.info.name} added to cart!`);
    setTimeout(() => setPopup(""), 2000);
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  return (
    <div className="space-y-4 relative">
      {popup && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 text-lg font-semibold transition-all animate-bounce">
          {popup}
        </div>
      )}
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="flex justify-between items-start w-full md:w-10/12 bg-white p-6 mx-auto rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow text-left"
          >
            {/* Left side: title, price, description */}
            <div className="flex flex-col space-y-2 max-w-xl">
              <span className="block sm:font-semibold font-medium text-gray-800 sm:text-lg text-sm">
                {item.card.info.name}
              </span>
              <span className="text-gray-900 sm:font-semibold font-medium sm:text-base text-sm">
                ₹
                {Math.round(
                  (item.card.info.defaultPrice ??
                    item.card.info.price ??
                    0) / 100
                )}
              </span>
              <p className="text-gray-600 sm:text-sm text-[11px] leading-relaxed">
                {item.card.info.description}
              </p>
            </div>
            {/* Right side: image box */}
            <div className="relative sm:w-26 sm:h-24 w-16 h-19 flex flex-col items-center ml-4 sm:ml-0">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-22 h-24 object-cover rounded-xl border border-gray-200 mb-2"
                alt={item.card.info.name}
              />
              {isCart ? (
                <button
                  className="sm:font-bold font-medium -mt-7 bg-white text-red-500 sm:text-sm text-xs border border-gray-300 sm:px-4 px-3 py-1 rounded-lg cursor-pointer hover:shadow-sm"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove
                </button>
              ) : (
                <button
                  className="-mt-6 sm:font-bold font-medium bg-green-500 text-white text-sm border border-green-600 px-4 py-1 rounded-lg cursor-pointer hover:bg-green-600 hover:shadow-sm"
                  onClick={() => handleAddItem(item)}
                >
                  ADD+
                </button>
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;