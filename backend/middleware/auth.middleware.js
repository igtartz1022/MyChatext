import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

export const protectRoute = async (req, res, next) => {
    try {
        let token = req.cookies.jwt || req.headers.authorization?.split(" ")[1]; // Check cookies or Authorization header

        if (!token) {
            return res.redirect('/login');
        }

        const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedJwt) {
            return res.redirect('/login');
        }

        const user = await User.findById(decodedJwt.userId).select("-password");
        if (!user) {
            return res.redirect('/login');
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);

        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
            return res.redirect('/login');
        }

        res.status(500).json({ message: "Internal Server Error." });
    }
};
