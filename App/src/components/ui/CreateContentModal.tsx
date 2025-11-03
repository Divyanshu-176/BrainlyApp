import { useRef, useState } from "react"
import { CrossIcon } from "../../icons/CrossIcon"
import { PlusIcon } from "../../icons/PlusIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../../config"



enum Contenttype{
    Youtube="youtube",
    Twitter="twitter",
    Other="other"
}

export const CreateContentModal =({open, onClose}:{open:boolean, onClose:()=>void})=>{
    const titleRef = useRef<HTMLInputElement | null>(null)
    const linkRef = useRef<HTMLInputElement | null>(null)
    const [type, setType] = useState(Contenttype.Youtube)

    async function addContent(){
        
        const title = titleRef.current?.value;
        const link = linkRef.current?.value

        await axios.post(`${BACKEND_URL}/api/content`, {title, link, type},{
            headers:{Authorization:localStorage.getItem("authorization")}
        })


    }

    return <div>
        {open && <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-100  flex justify-center">
            
            <div className="flex flex-col opacity-100 justify-center ">
                <span className="bg-white opacity-100 p-4 rounded text-black">
                    <div className=" flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-2">
                        <Input ref={titleRef} placeholder="Enter Title" type="text"/>
                        <Input ref={linkRef} placeholder="Enter Link" type="text"/>
                    </div>

                    <div className="flex gap-2 justify-center mt-4">
                        <Button text="Youtube" variant={type===Contenttype.Youtube ? "primary":"secondary"} size="md" onClick={()=>{setType(Contenttype.Youtube)}}/>
                        <Button text="Twitter" variant={type===Contenttype.Youtube ? "primary":"secondary"} size="md" onClick={()=>{setType(Contenttype.Twitter)}}/>
                        <Button text="Other" variant={type===Contenttype.Other ? "primary":"secondary"} size="md" onClick={()=>{setType(Contenttype.Other)}}/>
                    </div>

                    <div className="flex justify-center text-semibold mt-4" onClick={onClose}>
                        <Button variant="primary" text="Add Content" size="md" startIcon={<PlusIcon size="md"/>} onClick={addContent}/>
                    </div>
                    
                </span>
            </div>
            
        </div>}
    </div>
}