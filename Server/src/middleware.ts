import type { Request, Response, NextFunction } from "express"
import jwt, { decode } from "jsonwebtoken"

import { JWT_PASSWORD } from "./config.js";






interface extendedReq extends Request{
    userId?:string
}



export const userMiddleware = (req:extendedReq,res: Response,next:NextFunction)=>{
    const token = req.headers.authorization;

    const decoded= jwt.verify(token as string, JWT_PASSWORD)

    if(decoded){
        //@ts-ignore
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            msg:"Your are not logged in"
        })
    }
}