import { BookIcon } from "../../icons/BookIcon";
import { BrainIcon } from "../../icons/BrainIcon";
import { Xicon } from "../../icons/XIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";


export function Sidebar(){
    return <div className="h-screen bg-white shadow-md w-76 fixed top-0 left-0">
        <div className="flex flex-col">
            <div className="flex ml-2 items-center  mt-2">
                <div><BrainIcon/></div>
                <span className="text-4xl ml-2 font-semibold">Brainly</span>
            </div>
            <br />
            <SidebarItem icon={<Xicon/>} text="Twitter"/>
            <SidebarItem icon={<YoutubeIcon/>} text="Youtube"/>
            <SidebarItem icon={<BookIcon/>} text="Others"/>
            <SidebarItem icon={<BookIcon/>} text="All"/>            
        </div>
    </div>
}