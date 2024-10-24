import { Button } from "../compenents/button";
import { Heading } from "../compenents/heading";
import { Input } from "../compenents/input";
import { Navbar } from "../compenents/navbar";
import { BottomTxt } from "../compenents/txtbtm";
import { Subheading } from "./subheading";

export function Signin() {
  return (
    <div>
      <Navbar></Navbar>
    <div
      className="grid border-b border-b-rose-600
     grid-cols-1 justify-items-center place-self-center rounded-sm bg p-2  gap-4  m-2 w-2/5 "
    >
      
      <Heading label={"Signip"}></Heading>
      <Subheading label={"Login to your account"}></Subheading>
      <Input placeholder={"Email"}></Input>
      <Input placeholder={"Password"}></Input>
      <Button label={"Signin "}></Button>
      <BottomTxt
        label={"Create new account"}
        link={"/signup"}
        linktxt={"SignUp"}
      ></BottomTxt>
    </div>
    </div>
  );
}
