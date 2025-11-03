import type { ReactElement } from "react";

export function SidebarItem({text,icon}:{text:string, icon?:ReactElement}){
    return <div className="flex p-4 gap-2 text-lg text-gray-700 font-medium cursor-pointer transition-transform duration-200 hover:scale-120 origin-left
         ">
       {icon}{text}
    </div>
}