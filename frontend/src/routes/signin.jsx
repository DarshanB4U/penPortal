import { useState } from "react";
import { Button } from "../components/button";
import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { Navbar } from "../components/navbar";
import { BottomTxt } from "../components/txtbtm";
import { Subheading } from "./subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signinData = {
    email,
    password,
  };

  async function submit() {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signin/",
        signinData
      );

      const token = response.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      navigate("/feed");
    } catch (error) {
      console.log(error);

      alert("unable to login user");
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="grid border-b border-b-rose-700
     grid-cols-1 justify-items-center place-self-center rounded-sm bg p-2  gap-4  m-2 w-2/5 "
      >
        <Heading label={"Signin"}></Heading>
        <Subheading label={"Login to your account"}></Subheading>
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder={"Email"}
        ></Input>
        <Input
          onChange={function (e) {
            setPassword(e.target.value);
          }}
          placeholder={"Password"}
          type="password"
        ></Input>
        <Button onClick={submit} label={"Signin "}></Button>
        <BottomTxt
          label={"Create new account"}
          link={"/signup"}
          linktxt={"SignUp"}
        ></BottomTxt>
      </div>
    </div>
  );
}
