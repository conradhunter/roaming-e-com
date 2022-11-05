import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/roaming-logo.png";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Nav() {
  return (
    <nav className="flex flex-col items-center h-1/5 border-b-2 border-b-black">
      <img src={navLogo} alt="Navigation Bar Logo" className="w-72 my-4" />

      <ul className="flex my-4">
        <li>
          <Link to="/" className="py-2 px-6 uppercase font-light">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="py-2 px-6 uppercase font-light">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/media" className="py-2 px-6 uppercase font-light">
            Media
          </Link>
        </li>
        <li>
          <Link to="/riders" className="py-2 px-6 uppercase font-light">
            Riders
          </Link>
        </li>
        <li>
          <Link to="/" className="py-2 px-6 uppercase font-light">
            Events
          </Link>
        </li>
      </ul>

      <ul className="flex items-center my-4 w-1/4 justify-evenly">
        <li className="bg-slate-900 rounded-full">
          <GrInstagram className="text-4xl py-2 px-2 text-white" />
        </li>
        <li className="bg-slate-900 rounded-full">
          <FaFacebookF className="text-4xl py-2 px-2 text-white" />
        </li>
        <li className="bg-slate-900 rounded-full">
          <FaTwitter className="text-4xl py-2 px-2 text-white" />
        </li>
        <li className="bg-slate-900 rounded-full">
          <FaYoutube className="text-4xl py-2 px-2 text-white" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
