
# 🍽️ Feasto - Modern Food Delivery React App

Feasto is a beautifully crafted, feature-rich food delivery web application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. It delivers a seamless user experience for browsing restaurants, filtering, viewing menus, managing carts, and placing orders—all with top-notch design and performance.

---

## 🚀 Features

✨ **Restaurant Listing**

> Explore a curated list of restaurants with animated cards and smooth hover effects.

🔍 **Search & Filter**

> Search restaurants in real-time and filter top-rated ones instantly.

📋 **Restaurant Menu**

> Browse full menus with categories and a shimmer loading UI for better UX.

🛒 **Cart Management**

> Add or remove items, see subtotal, taxes (GST), and delivery charges.

🔔 **Popup Notifications**

> Instant feedback when you interact with the cart.

📱 **Responsive & Clean UI**

> Built with Tailwind CSS for a modern, mobile-friendly interface.

📄 **About & Contact Pages**

> Professionally styled pages with forms and subtle animations.

⚠️ **Error Handling**

> Friendly offline detection and 404/error components.

🧪 **Testing Support**

> Unit tests for essential components included.

---

## 🖼️ Screenshots

| Home Page | Menu Page | Cart Page | About Page |
|-----------|-----------|-----------|------------|
| ![Home](https://i.postimg.cc/J4BZtCG1/home.png) | ![Menu](https://i.postimg.cc/fbX0TcLB/menu.png) | ![Cart](https://i.postimg.cc/vTDYDyhb/cart.png) | ![About](https://i.postimg.cc/2yLsPSTb/about.png) |

## 🗂 Project Structure

```
MY-FOOD-APP/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── appStore.jsx              # Redux store
│   │   ├── cartSlice.js              # Cart slice
│   │   ├── constants.js              # Constants and CDN links
│   │   ├── logos.png                 # Logo asset
│   │   ├── restaurantsSlice.js       # Restaurant data slice
│   │   ├── useOnlineStatus.jsx       # Internet connection hook
│   │   ├── useRestaurantMenu.jsx     # Hook for fetching menus
│   │   └── UserContext.jsx           # Global context
│
│   ├── components/
│   │   ├── __tests__/                # Component tests
│   │   ├── About.jsx                 # About page
│   │   ├── Body.jsx                  # Main layout
│   │   ├── Cart.jsx                  # Cart page
│   │   ├── Contact.jsx               # Contact form
│   │   ├── Error.jsx                 # Error handling
│   │   ├── Header.jsx                # Navbar
│   │   ├── ItemList.jsx              # List of menu items
│   │   ├── RestaurantCard.jsx        # Restaurant preview card
│   │   ├── RestaurantCategory.jsx    # Expandable menu category
│   │   ├── RestaurantMenu.jsx        # Full menu page
│   │   └── Shimmer.jsx               # Skeleton loader
│
│   ├── App.jsx                       # Root app component
│   ├── index.js                      # React entry point
│   └── index.css                     # Tailwind base styles
│
├── setupTests.js                     # Jest setup
├── .gitignore
├── babel.config.js
├── eslint.config.js
├── index.html
```

---

## ⚙️ Tech Stack

* **Frontend**: React, React Router DOM, Tailwind CSS
* **State Management**: Redux Toolkit
* **Testing**: Jest, React Testing Library
* **APIs**: Swiggy Public APIs
* **UI/UX**: Tailwind, custom animations, and transitions

---

## 🛠️ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/feasto.git
cd feasto

# 2. Install dependencies
npm install

# 3. Start the development server
npm start

# App runs on:
http://localhost:3000

```
<br>
💡 Tip: To avoid CORS errors when running this project locally, use the Chrome extension "Allow CORS". Without it, the app might not function properly.

---


## 🧪 Running Tests

```bash
npm test
```

---

## 📚 Usage Guide

* **Browse Restaurants**: View all restaurants on the homepage.
* **Search/Filter**: Use the search bar or filter top-rated ones.
* **View Menu**: Click any restaurant to see the full menu.
* **Add to Cart**: Select items, see price breakdown, then checkout.
* **About/Contact**: Learn about the app or submit a contact form.

---

## 🌐 Environment & Configuration

* API endpoints and CDN URLs are stored in `src/assets/constants.js`.
* No sensitive information is stored in the repository.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

* Fork the project
* Create a new branch
* Submit a pull request

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

* Swiggy Public APIs
* Tailwind CSS
* Redux Toolkit
* React

Made with ❤️ by **Dhiraj Harane**
