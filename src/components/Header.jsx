"use client";

import Link from "next/link";
import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Welcome</div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>

            <li className="services">
              <Link href="/tutorial/">Tutorial</Link>
            </li>

            <li>
              <Link href="/blogs/">Blogs</Link>
            </li>
            <li className="contact">
              <Link href="/notes/">Notes</Link>
            </li>
            <li className="contact">
              <Link href="/contact/">Contact</Link>
            </li>
            <li className="contact">
              <Link href="/login/">Login</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
