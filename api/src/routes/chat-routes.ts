import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatValidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";



const chatRoutes = Router();

chatRoutes.post("/new",validate(chatValidator),verifyToken,generateChatCompletion);

export default chatRoutes;