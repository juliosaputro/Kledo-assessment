import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { URL } from "../utils/api";
import { useDispatch } from "react-redux";
import { updateUserReducer } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";

export default function FormLogin({to='/profile'}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      useEffect(() => {
        dispatch(updateUserReducer([]));
      }, []);
    
      const postData = async (data) => {
        try {
          const response = await axios.post(`${URL}/authentication/login`, data);
          console.log("Response:", response.data);
          dispatch(updateUserReducer(response.data));
          navigate(`${to}`);
        } catch (error) {
          console.error("Error:", error);
        }
      };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
    <h2 className="text-5xl font-bold mb-6">Login</h2>

    <div className="bg-gray-100 p-8 rounded-3xl border-2 border-gray-200 w-full max-w-3xl h-2/5">
      <form
        className="h-full"
        onSubmit={handleSubmit((data) => postData(data))}
      >
        <div className="mb-5">
          <label className="block text-2xl font-semibold text-gray-500 mb-2">Email</label>
          <input
            {...register("email", { required: "This is required" })}
            type="email"
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <text>{errors.email?.message}</text>
        </div>
        <div className="mb-5">
          <label className="block text-2xl font-semibold text-gray-500 mb-2">Password</label>
          <input
            {...register("password", { required: "This is required" })}
            type="password"
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <text>{errors.password?.message}</text>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-1/2 bg-blue-500 text-white text-2xl font-semibold py-4 px-4 rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            onSubmit={handleSubmit((data) => postData(data))}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
