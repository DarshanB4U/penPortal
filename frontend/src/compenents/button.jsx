export function Button({label,onClick,formData}){
    return <div>
        <button onClick={onClick} className="bg-gray-800 p-2 text-slate-50 font-semibold rounded-sm shadow-sm">{label}</button>
    </div>
}