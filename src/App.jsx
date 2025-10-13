import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Layout
import AppLayout from "./AppLayout.jsx";

// Import Pages
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Cart from "./components/Cart.jsx";

/**
 * App Component with Routing
 */
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurants/:resId" element={<RestaurantMenu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
