/* eslint-disable @typescript-eslint/no-explicit-any */

export function Input({placeholder, type, ref}: {placeholder:string, type:string, ref?:any }){
    return <div>
        <input type={type} placeholder={placeholder} ref={ref}
        className="px-4 py-2 rounded border-b border-gray-300 text-black font-semibold outline-none"  />
    </div>
}
