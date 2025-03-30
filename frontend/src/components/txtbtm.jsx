import { Link } from "react-router-dom";

export function BottomTxt({label,link,linktxt}){
    return <h1 className="text-md underline text-slate-500">{label}  <Link to={link}>{linktxt}</Link></h1>
}