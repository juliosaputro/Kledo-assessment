import React from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faHouse,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { URL } from "../utils/api";

const Sidebar = () => {
  const { userReducer } = useSelector((s) => s);

  const navigate = useNavigate();
  const location = useLocation();

  const postData = async () => {
    try {
      const response = await axios.post(`${URL}/authentication/logout`, null, {
        headers: {
          Authorization: `Bearer ${userReducer.value.data.data.access_token}`,
        },
      });
      console.log("Response:", response.data);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="bg-gray-100 text-gray-400 h-screen w-64 left-0">
      <ul className="text-sm">
        <li className="mb-2">
          <Link
            to="/Dashboard"
            className={`flex items-center text-2xl p-3 hover:bg-blue-500 ${
              location.pathname === "/Dashboard" ? "text-blue-500" : ""
            }`}
          >
            <FontAwesomeIcon icon={faHouse} className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/Shipping"
            className={`flex items-center text-2xl p-3 hover:bg-blue-500 ${
              location.pathname !== "/Dashboard" ? "text-blue-500" : ""
            }`}
          >
            <FontAwesomeIcon icon={faTruck} className="mr-2" />
            Shipping Comps
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-0 p-4">
        <button
          className="flex items-center text-2xl p-3 hover:bg-blue-500"
          onClick={() => postData()}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
