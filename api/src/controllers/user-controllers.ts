import { NextFunction, Request, Response } from "express"
import User from "../models/User.js"
import { compare, hash } from "bcrypt";
import { createToken } from "../utils/token-manager.js";

export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
        //get all users 
        const users = await User.find();
        return res.status(200).json({message: 'ok', users}); 
    } catch (error) {
        console.log(error);
        return  res.status(404).json({message: 'ERROR', cause: error.message});
    }  
};
export const userSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
        //user signup 
        const {name,email,password} = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).send('this user is aleardy registered');
        }
        const hashedPassword = await hash(password,10);
        const user = new User({ name, email, password: hashedPassword});
        await  user.save();
          // remove the exicting cookie
          res.clearCookie("auth_token",{
            httpOnly: true,
            domain: 'localhsot',
            signed: true,
            path: '/',
        });

        const token = createToken(user._id.toString() ,user.email,"7d");
        const expires = new Date();
        expires.setDate(expires.getDate()+ 7);

        res.cookie("auth_token",token,{
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed : true,
        });
        
        return res.status(200).json({id:user._id,name:user.name,email:user.email});
    } catch (error) {
        console.log(error);
        return  res.status(404).json({message: 'ERROR', cause: error.message});
    }  
};

export const userLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
        //user login
        const {email,password} = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('there is no user with this email');
        }
        const isPasswordCorrect = await compare(password,user.password);
        if (!isPasswordCorrect) {
            return res.status(401).send('incorrect password');
        }


        // remove the exicting cookie
        res.clearCookie("auth_token",{
            httpOnly: true,
            domain: 'localhsot',
            signed: true,
            path: '/',
        });

        const token = createToken(user._id.toString() ,user.email,"7d");
        const expires = new Date();
        expires.setDate(expires.getDate()+ 7);

        res.cookie("auth_token",token,{
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed : true,
        });

        return res.status(200).json({id:user._id,name:user.name,email:user.email});
    } catch (error) {
        console.log(error);
        return  res.status(404).json({message: 'ERROR', cause: error.message});
    }  
};

