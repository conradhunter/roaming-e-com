import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/roaming-logo.png";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
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
        <li className="bg-black rounded-full">
          <GrInstagram className="text-4xl py-2 px-2 text-white" />
        </li>
        <li className="bg-black rounded-full">
          <FaFacebookF className="text-4xl py-2 px-2 text-white" />
        </li>
        <li className="bg-black rounded-full">
          <FaTwitter className="text-4xl py-2 px-2 text-white" />
        </li>
        <li className="bg-black rounded-full">
          <FaYoutube className="text-4xl py-2 px-2 text-white" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
