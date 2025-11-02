import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Signin=()=>{
    const navigate = useNavigate()
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
 
    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}/api/signin`, {username,password})
        
        const token = response.data.token
        localStorage.setItem("authorization", token)

        navigate("/dashboard")

        alert("Bitch you signed in!!")


    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-2xl  min-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username" type="text"/>
            <Input ref={passwordRef} placeholder="Password" type="password"/>
            <div className="flex justify-center pt-4">
                <Button variant="primary" text="Signin" size="lg" fullWidth={true} onClick={signin} />
            </div>
        </div>
    </div>
}