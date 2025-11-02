import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const Signup=()=>{

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
            <Input ref={usernameRef} placeholder="Username" type="text"/>
            <Input ref={passwordRef} placeholder="Password" type="password"/>
            <div className="flex justify-center mt-4">
                <Button onClick={signup} variant="primary" text="Signup" size="lg" fullWidth={true} />
            </div>
        </div>
    </div>
}