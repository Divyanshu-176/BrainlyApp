import type { ReactElement } from "react";

export function SidebarItem({text,icon}:{text:string, icon?:ReactElement}){
    return <div className="flex p-4 gap-2 text-lg text-gray-700 font-medium cursor-pointer
         hover:bg-linear-to-l hover:from-transparent hover:to-gray-200">
       {icon}{text}
    </div>
}