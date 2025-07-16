// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-center mb-10 px-4 sm:px-8 md:px-20">
          Have a question, idea, or want to work together? Send me a message and
          I’ll get back to you as soon as possible.
        </p>

        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-10 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-8 py-3 rounded-lg font-medium"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
