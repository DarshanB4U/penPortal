import { Button } from "../compenents/button";
import { Heading } from "../compenents/heading";
import { Input } from "../compenents/input";
import { Subheading } from "./subheading";
import { BottomTxt } from "../compenents/txtbtm";
import { Navbar } from "../compenents/navbar";

export function Signup() {
  return (
    <div>
      <Navbar></Navbar>
    <div className=" grid grid-cols-1 justify-items-center border-b border-b-red-700 place-self-center  rounded-sm  p-4  gap-4  m-4 h-full w-2/5 ">
      <Heading label={"Signup"}></Heading>
      <Subheading label={"Create new account"}></Subheading>
      <Input placeholder={"Email"}></Input>
      <Input placeholder={"Name"}></Input>
      <Input placeholder={"Password"}></Input>
      <Input placeholder={"Confirm-Password"}></Input>
      <Button label={"Signup "} ></Button>
      <BottomTxt label={"LogIn to  existing account"} link={"/signin"} linktxt={"LogIn"}></BottomTxt>


      </div>
    </div>
  );
}
