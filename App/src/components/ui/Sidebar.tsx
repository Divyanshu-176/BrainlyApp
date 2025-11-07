import { BookIcon } from "../../icons/BookIcon";
import { BrainIcon } from "../../icons/BrainIcon";
import { DocIcon } from "../../icons/DocIcon";
import { UrlIcon } from "../../icons/UrlIcon";
import { Xicon } from "../../icons/XIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { useShowContent } from "../../hooks/useShowContent";

export function Sidebar(){

    const {setShowContent} = useShowContent()



    return <div className="h-screen bg-white shadow-md w-76 fixed top-0 left-0">
        <div className="flex flex-col">
            <div className="flex ml-2 items-center  mt-2">
                <div><BrainIcon/></div>
                <span className="text-4xl ml-2 font-semibold">Brainly</span>
            </div>
            <br />
            <SidebarItem icon={<Xicon/>} text="Tweets" onClick={()=>{setShowContent('Tweets')}}/>
            <SidebarItem icon={<YoutubeIcon/>} text="Youtube" onClick={()=>{setShowContent('Youtube')}}/>
            <SidebarItem icon={<UrlIcon/>} text="Links" onClick={()=>{setShowContent('Links')}}/>
            <SidebarItem icon={<DocIcon/>} text="Document" onClick={()=>{setShowContent('Document')}}/>
            <SidebarItem icon={<BookIcon/>} text="All" onClick={()=>{setShowContent('All')}}/>            
        </div>
    </div>
}