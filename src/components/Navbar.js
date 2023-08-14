import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ loginTo = "" }) {
  const location = useLocation();
  return (
    <nav className="bg-blue-500 h-14 px-4">
      <div className="max-w-full h-full mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-xl">
          <text className="uppercase text-2xl">kledo test</text>
        </div>
        <ul className="h-full flex justify-between space-x-4 ">
          <li>
            <Link
              to="/profile"
              className={`h-full flex justify-between items-center text-white text-xl p-4 space-x-4 ${
                location.pathname === "/profile" ? "bg-black" : ""
              }`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to={loginTo}
              className={`h-full flex justify-between items-center text-white text-xl p-4 space-x-4 ${
                location.pathname === { loginTo } ? "bg-black" : ""
              }`}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
