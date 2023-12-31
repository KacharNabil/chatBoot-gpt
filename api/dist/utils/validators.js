import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
export const loginValidator = [
    body("email").notEmpty().trim().isEmail().withMessage("the email is required"),
    body("password").trim().isLength({ min: 6 })
        .withMessage("password should contain at least 6 characters")
];
export const signupValidator = [
    body("name").notEmpty().withMessage("the name is required"),
    ...loginValidator
];
export const chatValidator = [
    body("message").notEmpty().withMessage("message is required"),
];
//# sourceMappingURL=validators.js.map