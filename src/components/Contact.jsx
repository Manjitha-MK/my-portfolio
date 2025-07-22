// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className=" bg-[#f8f4f1] text-shadow-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[35px] font-serif text-amber-800 tracking-[5px] sm:text-4xl font-bold text-center mb-8">
          Get in Touch
        </h2>
        <p className="text-black text-center mb-10 px-4 sm:px-8 md:px-20 font-serif tracking-[2px]">
          Have a question, idea, or want to work together? Send me a message and
          I’ll get back to you as soon as possible.
        </p>

        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-10 bg-[#f8e0d6]  p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-white text-black border border-gray-600 focus:outline-none"
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
              className="w-full p-3 rounded-lg bg-white text-black border border-gray-600 focus:outline-none"
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
              className="w-full p-3 rounded-lg bg-white text-black border border-gray-600 focus:outline-none"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="bg-amber-900 hover:bg-amber-950 transition-colors text-white px-8 py-3 rounded-lg font-medium"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
