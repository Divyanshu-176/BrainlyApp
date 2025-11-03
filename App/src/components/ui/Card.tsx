import { BookIcon } from "../../icons/BookIcon"
import { DeleteIcon } from "../../icons/DeleteIcon"
import { GotoIcon } from "../../icons/GotoIcon"
import { ShareIcon } from "../../icons/ShareIcon"
import { Xicon } from "../../icons/XIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"

interface cardProps{
    title:string,
    link?:string,
    type: "twitter"|"youtube" |"other"
}


export const Card = ({title, link, type} : cardProps) =>{


    return <div className="bg-white border-gray-200 border-2  rounded-xl p-4 max-w-70 min-w-70 min-h-48">
        
        <div className="flex justify-between">
            <div className="flex gap-3 items-center text-lg font-semibold">
                <div className="text-gray-500">

                    {type ==="twitter" && <Xicon/>}
                    {type ==="youtube" && <YoutubeIcon/>}
                    {type === "other" && <BookIcon/>}
                    

                </div>
                {title}
            </div>

            <div className="flex gap-3 items-center pr-2">
                {type==="other" ? '': <div className="text-gray-500 cursor-pointer" onClick={() => window.open(link, '_blank')}><GotoIcon/></div>}
                <div className="text-gray-500 cursor-pointer"><DeleteIcon/></div>
            </div>
        </div>

        <div className="pt-4">
            {type==="twitter" && <blockquote className="twitter-tweet"><a href= {link.replace("x.com", "twitter.com")} ></a> </blockquote> }
            {type==="other" && <div>dduhdiuh</div>}
            {type==="youtube" && <iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        </div>
    </div>
}