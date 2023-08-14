import React from "react";
import axios from "axios";
import { URL } from "../../utils/api";
import { useForm } from "react-hook-form";
import NavbarAdmin from "../../components/NavbarAdmin";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Content from "../../components/Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DetailShipping() {
  const { userReducer } = useSelector((s) => s);
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = location.state || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postData = async (data) => {
    try {
      const response = await axios.put(
        `${URL}/finance/shippingComps/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${userReducer.value.data.data.access_token}`,
          },
        }
      );
      console.log("Response:", response.data.data.user);
      navigate("/Shipping");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteData = async () => {
    try {
      const response = await axios.delete(
        `${URL}/finance/shippingComps/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userReducer.value.data.data.access_token}`,
          },
        }
      );
      console.log("Response:", response.data.data.user);
      navigate("/Shipping");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="flex">
        <Sidebar />
        <Content>
          <div className="flex-1 justify-center text-black max-w-full h-full">
            <div className="flex">
              <p className="uppercase text-2xl font-bold mx-2">
                Edit Shipping Comps
              </p>
              <FontAwesomeIcon
                icon={faTrash}
                className="mr-2 text-red-500 cursor-pointer"
                size="2x"
                onClick={() => deleteData()}
              />
            </div>
            <form
              className="h-full"
              onSubmit={handleSubmit((data) => postData(data))}
            >
              <div className="mt-5 mb-5">
                <label className="block text-base font-semibold text-gray-500 mb-2">
                  Nama
                </label>
                <input
                  {...register("name", { required: "Nama harus diisi" })}
                  type="text"
                  className=" p-2 border border-black rounded-lg focus:outline-none focus:border-blue-500"
                />
                <p className="text-red-500">{errors.nama?.message}</p>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className=" w-24 p-2 bg-blue-500 text-white text-base font-semibold rounded-xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onSubmit={handleSubmit((data) => postData(data))}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </Content>
      </div>
    </div>
  );
}
