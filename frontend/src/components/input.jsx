export function Input({ placeholder, onChange, name }) {
  return (
    <input 
      onChange={onChange}
      name={name}
      // type={type}
      className="text-slate-950 max-w-md bg-orange-100 w-full p-2 rounded-sm"
      placeholder={placeholder} 
    />
  );
}
