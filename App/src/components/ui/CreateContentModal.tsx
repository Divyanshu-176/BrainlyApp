import { CrossIcon } from "../../icons/CrossIcon"
import { PlusIcon } from "../../icons/PlusIcon"
import { Button } from "./Button"
import { Input } from "./Input"





export const CreateContentModal =({open, onClose})=>{

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
                        <Input placeholder="Enter Title" type="text"/>
                        <Input placeholder="Enter Link" type="text"/>
                    </div>

                    <div className="flex justify-center text-semibold mt-4">
                        <Button variant="primary" text="Add Content" size="md" startIcon={<PlusIcon size="md"/>}/>
                    </div>
                    
                </span>
            </div>
            
        </div>}
    </div>
}