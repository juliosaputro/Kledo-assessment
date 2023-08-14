import React from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import Content from "../../components/Content";

export default function Dashboard() {
  const { userReducer } = useSelector((s) => s);

  return (
    <div>
      <NavbarAdmin />
      <div className="flex">
        <Sidebar />
        <Content>
          <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-3xl border-2 border-gray-200 w-full max-w-3xl h-1/2 text-center">
            <p className="text-3xl font-bold text-gray-500 mb-4">
              Selamat Datang
            </p>
            <p className="text-2xl font-semibold text-gray-300">{userReducer.value.data.user.name}</p>
          </div>
        </Content>
      </div>
    </div>
  );
}
