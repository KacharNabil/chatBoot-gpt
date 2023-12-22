import User from "../models/User.js";
export const getAllUsers = async (req, res, next) => {
    try {
        //get all users 
        const users = await User.find();
        return res.status(200).json({ message: 'ok', users });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'ERROR', cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map