import express from "express"
import { contentModel, linkModel, userModel } from "./db.js";
import jwt from "jsonwebtoken"
import { JWT_PASSWORD } from "./config.js";
import { userMiddleware } from "./middleware.js";
import { randomgen } from "./utils.js";
import cors from "cors"

import type { Request } from "express";


const app = express()
app.use(cors())
app.use(express.json())


app.post("/api/signup", async (req,res)=>{
    const username= req.body.username;
    const password = req.body.password;

    try {
        await userModel.create({
        username:username,
        password:password
    })

    res.json({
        msg:"User signup Successful"
    })
    } catch (error) {
        res.status(411).json({
            msg:"User Already Exists"
        })
    }
})


app.post("/api/signin", async (req,res)=>{
    const {username, password} = req.body;

    const existingUser = await userModel.findOne({
        username,password
    })
    if(existingUser){
        const token = jwt.sign({
            id:existingUser._id
        }, JWT_PASSWORD)

        res.json({
            token
        })
    }else{
        res.status(403).json({
            msg:"Incorrect credentials"
        })
    }

})




interface extendedReq extends Request{
    userId?:string
}


app.post("/api/content",userMiddleware , async (req:extendedReq,res)=>{
    const {title,link} = req.body
    await contentModel.create({
        title,
        link,
        userId: req.userId,
        tags:[] 
    })

    res.json({
        message:"Content Added"
    })
})




app.get("/api/content", userMiddleware, async(req:extendedReq,res)=>{
    const userId = req.userId;
    const content = await contentModel.find({
        userId
    }).populate("userId", "username")

    res.json({
        content
    })
})

app.delete("/api/content", userMiddleware,async (req:extendedReq, res)=>{
    const contentId = req.body.contentId;

    await contentModel.deleteMany({
        _id:contentId,
        userId:req.userId
    })

    res.json({
        msg:"Content Deleted"
    })

})









app.post("/api/brain/share", userMiddleware, async(req:extendedReq,res)=>{
    const {share} = req.body;

    if(share){
        const existingLink = await linkModel.findOne({
            userId:req.userId
        })

        if(existingLink){
            res.json({
                msg:"Existing hash point",
                point:"/api/brain/"+existingLink.hash
            })
        }else{
            const hash = randomgen(10)
            await linkModel.create({
                userId: req.userId,
                hash:hash
            })

            res.json({
                msg:"new created hash point",
                point:"/api/brain/"+hash
            })
        }

        

    }else{
        await linkModel.deleteOne({
            userId:req.userId
        })

        res.json({
            msg:"link removed"
        })
    }
})



app.get("/api/brain/:sharelink", async (req,res)=>{
    const hash = req.params.sharelink;


    const link = await linkModel.findOne({
        hash
    })

    if(!link){
        res.status(411).json({
            msg:"shared link not found"
        })
        return;
    }

    const content = await contentModel.find({
        userId:link?.userId
    })

    const user = await userModel.findOne({
        _id:link?.userId
    })

    if(!user){
        res.status(411).json({
            msg:"user not found"
        })
        return;
    }

    res.json({
        username:user?.username,
        content
    })
})


app.listen(3000)
console.log("Port Started")
