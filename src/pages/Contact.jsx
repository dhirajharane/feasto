import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-pink-50 to-pink-100 py-12">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">Contact Us</h1>
        {submitted ? (
          <div className="text-green-600 text-lg text-center">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-pink-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-pink-400"
            />
            <textarea
              placeholder="Your Message"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-pink-400"
              rows={4}
            />
            <button
              type="submit"
              className="bg-pink-500 text-white font-bold py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;