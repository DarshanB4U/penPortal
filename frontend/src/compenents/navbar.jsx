import { Link } from "react-router-dom";
import { Avatar } from "./blog";

export function Navbar() {
  return (
    <nav className=" flex fixed w-full z-50  bg-slate-100 shadow-sm justify-between border border-b-red-600 p-2">
      <div className="flex  ">
        <div className="p-1 flex  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.9"
            stroke="indigo"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
          <h1 className="text-3xl font-serif  ">Penportal</h1>
        </div>
      </div>
      <div>
        <Link to={"/feed"}><button className=" bg-stone-900 hover:bg-amber-500 text-white  font-bold py-1 m-2 px-5 rounded-full">
          Home
        </button></Link>
        

        <button className="bg-stone-900 hover:bg-green-600 text-white  font-bold py-1 m-2 px-5 rounded-full">
          About
        </button>
        <Link to={"/signup"}>
        <button className="bg-emerald-900 hover:bg-rose-600 text-white  font-bold py-1 m-2 px-5 rounded-full">
          Get Started
        </button>
        </Link>
        <Avatar name={"Darshan"}></Avatar>
      </div>
    </nav>
  );
}
