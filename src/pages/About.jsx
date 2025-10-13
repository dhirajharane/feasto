import React from "react";

const About = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-pink-100 to-pink-50 py-12">
    <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">About Feasto 🍽️</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to <span className="font-semibold text-pink-500">Feasto</span>!<br />
        We are passionate about bringing delicious food from your favorite restaurants right to your doorstep.
      </p>
      <div className="flex flex-col gap-3 text-gray-600 text-base mb-6">
        <span>🍕 Curated restaurant selection</span>
        <span>🚀 Fast and reliable delivery</span>
        <span>💖 Customer-first support</span>
      </div>
      <p className="text-gray-500">
        Made with <span className="text-pink-400">♥</span> by foodies, for foodies.
      </p>
    </div>
  </div>
);

export default About;