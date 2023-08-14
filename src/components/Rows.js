import React from "react";

export default function Rows({title='',value=''}) {
  return (
    <div className="mb-5">
      <h1 className="block text-2xl font-bold text-gray-400 mb-2">{title}</h1>
      <text className="block text-xl font-bold text-black mb-2">
       {value}
      </text>
    </div>
  );
}
