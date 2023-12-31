import User from "../models/User.js";
import { configureOpenAi } from "../config/openaiConfig.js";
import { OpenAIApi } from "openai";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({ message: "User not registered OR Token malfunctioned" });
        }
        // grab the previeus chats of the user
        const chats = user.chats.map(({ role, content }) => ({ role, content }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        // send all the chat with the new one
        const config = configureOpenAi();
        const openai = new OpenAIApi(config);
        // get the latest response 
        const chatResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats,
        });
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "something went wrong !" });
    }
};
//# sourceMappingURL=chat-controllers.js.map