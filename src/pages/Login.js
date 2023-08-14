import React from "react";
import Navbar from "../components/Navbar";
import FormLogin from "../components/FormLogin";

export default function Login() {

  return (
    <div>
      <Navbar loginTo="/Login"/>
      <FormLogin  to='/profile'/>
    </div>
  );
}
