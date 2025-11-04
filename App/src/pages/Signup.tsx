import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BrainIcon } from "../icons/BrainIcon"

export const Signup=()=>{
    const navigate = useNavigate()

    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
 
    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/signup`, {username,password})

        alert("Bitch you signed up!!")
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-2xl  min-w-48 p-8">
            <div className="flex ml-2 items-center  mt-2 mb-4">
                <div><BrainIcon/></div>
                <span className="text-4xl ml-2 font-semibold">Brainly</span>
            </div>
            <Input ref={usernameRef} placeholder="Username" type="text"/>
            <Input ref={passwordRef} placeholder="Password" type="password"/>
            <div className="mt-2 gap-2 flex justify-center text-sm">
                <span className="text-gray-700">Already Signed up?</span> 
                <button className="text-blue-500 cursor-pointer hover:text-blue-600 hover:underline" onClick={()=>{navigate('/signin')}}>Sign-in</button>
            </div>
            <div className="flex justify-center mt-4">
                <Button onClick={signup} variant="primary" text="Signup" size="lg" fullWidth={true} />
            </div>
        </div>
    </div>
}