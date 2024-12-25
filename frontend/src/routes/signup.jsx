import { Button } from "../compenents/button";
import { Heading } from "../compenents/heading";
import { Input } from "../compenents/input";
import { Subheading } from "./subheading";
import { BottomTxt } from "../compenents/txtbtm";
import { Navbar } from "../compenents/navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  function handelChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  }
  async function submit() {
    const { name, email, password, confirmPassword } = formData;
    const username = name;
    if (password != confirmPassword) {
      alert("confirm password is different");
      return;
    }
    console.log(formData);

    const signupdata = { name: username, email: email, password: password };
try {
  const response = await axios.post(
    "http://localhost:3000/user/signup/",
    signupdata
  );
  
 localStorage.setItem("token",response.data.token);
 
navigate("/feed")
  console.log(response);
  // alert(response.data.message);
} catch (error) {
  console.log(error)
  alert(error.response.data.message || "An error occurred");

}
   
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className=" grid grid-cols-1 justify-items-center border-b border-b-red-700 place-self-center  rounded-sm  p-4  gap-4  m-4 h-full w-2/5 ">
        <Heading label={"Signup"}></Heading>
        <Subheading label={"Create new account"}></Subheading>
        <Input
          name="email"
          onChange={function (e) {
            handelChange(e);
          }}
          placeholder={"Email"}
        ></Input>
        <Input
          name="name"
          onChange={function (e) {
            handelChange(e);
          }}
          placeholder={"Name"}
        ></Input>
        <Input
          name="password"
          onChange={function (e) {
            handelChange(e);
          }}
          placeholder={"Password"}
        ></Input>
        <Input
          name="confirmPassword"
          onChange={function (e) {
            handelChange(e);
          }}
          placeholder={"Confirm-Password"}
        ></Input>
        <Button onClick={submit} label={"Signup "}></Button>
        <BottomTxt
          label={"LogIn to  existing account"}
          link={"/signin"}
          linktxt={"LogIn"}
        ></BottomTxt>
      </div>
    </div>
  );
}
