import { Signin } from "./Signin"
import { Signup } from "./Signup"

export const Login = ()=>{
    return <div className="flex">
        <Signup/>
        <Signin/>
    </div>
}