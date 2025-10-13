import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/common/ItemList";
import { clearCart, setIsCart } from "../store/slices/cartSlice";

const DELIVERY_CHARGE = 40;
const GST_PERCENT = 0.18;

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    dispatch(setIsCart(true));
    return () => {
      dispatch(setIsCart(false));
    };
  }, [dispatch]);

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum +
      Math.round(
        (item.card.info.defaultPrice ?? item.card.info.price ?? 0) / 100
      ),
    0
  );
  const gst = Math.round(subtotal * GST_PERCENT);
  const total = subtotal + DELIVERY_CHARGE + gst;

  return (
    <div className="w-full md:w-7/12 mx-auto my-8 bg-white rounded-xl shadow-lg p-6 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ItemList items={cartItems} />
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-inner">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Price Details</h3>
            <div className="flex flex-col gap-2 text-base">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>₹{DELIVERY_CHARGE}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%)</span>
                <span>₹{gst}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg text-pink-600">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            <button
              className="mt-6 w-full py-3 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition cursor-pointer"
              onClick={() => alert("Order placed!")}
            >
              Order Now
            </button>
            <button
              className=" mt-3 w-full py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition cursor-pointer"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;