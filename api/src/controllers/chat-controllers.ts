import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { configureOpenAi } from "../config/openaiConfig.js";
import { ChatCompletionRequestMessage, OpenAIApi } from "openai";


export const generateChatCompletion = async (
    req:Request ,
    res: Response,
    next: NextFunction
    ) => {
    const {message} = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({message:"User not registered OR Token malfunctioned"}) 
        }
       
        const chats = user.chats.map(({role,content})=>({role,content})) as ChatCompletionRequestMessage[];
        chats.push({content: message , role: "user"});
        user.chats.push({content: message , role: "user"});
       
        const config = configureOpenAi();
        const openai = new OpenAIApi(config);
        
        const chatResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats,
        });
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save();
        return res.status(200).json({chats: user.chats});

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "something went wrong !"});       
        
    }
    
}