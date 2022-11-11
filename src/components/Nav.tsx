import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/roaming-logo.png";
import {
  FaFacebookF,
  FaShoppingCart,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Nav() {
  return (
    <nav className="flex flex-col items-center border-b-2 border-b-black">
      <Link to="">
        <img src={navLogo} alt="Navigation Bar Logo" className="w-72 my-4" />
      </Link>

      <ul className="flex my-4">
        <li>
          <Link to="/" className="py-2 px-6 uppercase">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="py-2 px-6 uppercase">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/media" className="py-2 px-6 uppercase">
            Media
          </Link>
        </li>
        <li>
          <Link to="/riders" className="py-2 px-6 uppercase">
            Riders
          </Link>
        </li>
        <li>
          <Link to="/events" className="py-2 px-6 uppercase">
            Events
          </Link>
        </li>
      </ul>

      <ul className="flex items-center my-4 w-1/4 justify-evenly">
        <li className="bg-black rounded-full hover:scale-105 transition-all duration-300">
          <a href="https://www.google.com" target="_blank">
            <GrInstagram className="text-4xl py-2 px-2 text-blue-100" />
          </a>
        </li>
        <li className="bg-black rounded-full hover:scale-105 transition-all duration-300">
          <a href="https://www.google.com" target="_blank">
            <FaFacebookF className="text-4xl py-2 px-2 text-blue-100" />
          </a>
        </li>
        <li className="bg-black rounded-full hover:scale-105 transition-all duration-300">
          <a href="https://www.google.com" target="_blank">
            <FaTwitter className="text-4xl py-2 px-2 text-blue-100" />
          </a>
        </li>
        <li className="bg-black rounded-full hover:scale-105 transition-all duration-300">
          <a href="https://www.google.com" target="_blank">
            <FaYoutube className="text-4xl py-2 px-2 text-blue-100" />
          </a>
        </li>
      </ul>

      <Link to="/cart" className="absolute right-36 top-32">
        <FaShoppingCart className="text-4xl" />
      </Link>
        <span className="bg-red-500 py-1 px-2 rounded-full absolute right-32 top-28 hidden">0</span>
    </nav>
  );
}

export default Nav;
