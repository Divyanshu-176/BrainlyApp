import { ShareIcon } from "../../icons/ShareIcon"

interface cardProps{
    title:string,
    link:string,
    type: "twitter"|"youtube"
}


export const Card = ({title, link, type} : cardProps) =>{
    return <div className="bg-white rounded-xl border-gray-200 border-2  p-4 max-w-70 min-h-48">
        
        <div className="flex justify-between">
            <div className="flex gap-3 items-center text-lg font-semibold">
                <div className="text-gray-500"><ShareIcon size="md"/></div>
                {title}
            </div>

            <div className="flex gap-3 items-center pr-2">
                <div className="text-gray-500"><ShareIcon size="md"/></div>
                <div className="text-gray-500"><ShareIcon size="md"/></div>
            </div>
        </div>

        <div className="pt-4">
            {/* <iframe className="w-full" src="https://www.youtube.com/embed/Qkg-tmf5L1E?si=qQ6a0pHVCweC13Pb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
            {/* <blockquote className="twitter-tweet">
                <a href="https://twitter.com/username/status/1984961632569794606"></a> 
            </blockquote> */}



            {type==="twitter" && <blockquote className="twitter-tweet"><a href= {link.replace("x.com", "twitter.com")} ></a> </blockquote> }
            {type==="youtube" && <iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        </div>
    </div>
}