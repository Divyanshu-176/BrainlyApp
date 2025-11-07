import type { ReactElement } from "react";

export function SidebarItem({text,icon,onClick}:{text:string, icon?:ReactElement, onClick:()=>void}){
    return <div  onClick={onClick}
    className="flex p-4 gap-2 text-lg text-gray-700 font-medium cursor-pointer transition-transform duration-200 hover:scale-120 origin-left
         ">
       {icon}{text}
    </div>
}