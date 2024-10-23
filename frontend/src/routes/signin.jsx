import { Button } from "../compenents/button";
import { Heading } from "../compenents/heading";
import { Input } from "../compenents/input";
import { BottomTxt } from "../compenents/txtbtm";
import { Subheading } from "./subheading";


export function Signin() {
  return (
    <div className="grid grid-cols-1 justify-items-center place-self-center rounded-sm bg p-2  gap-4 bg-slate-200 m-2 w-2/5 ">
      <Heading label={"Signip"}></Heading>
      <Subheading label={"Login to your account"}></Subheading>
      <Input placeholder={"Email"}></Input>
      <Input placeholder={"Password"}></Input>
      <Button label={"Signin "} ></Button>
      <BottomTxt label={"Create new account"} link={"/signup"} linktxt={"SignUp"}></BottomTxt>


    </div>
  );
}
