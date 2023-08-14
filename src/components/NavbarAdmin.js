import React from "react";
import { url_image } from "../utils/api";
import { useSelector } from "react-redux";

export default function NavabarAdmin() {
  const { userReducer } = useSelector((s) => s);
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-full h-full mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-xl">
          <text className="uppercase text-2xl">kledo test admin</text>
        </div>
        <div className="flex items-center w-auto">
          <img src={url_image} className="w-10 h-10 rounded-full" />
          <p className="text-white text-lg font-medium mx-4">
            {userReducer.value.data.user.name}
          </p>
        </div>
      </div>
    </nav>
  );
}
