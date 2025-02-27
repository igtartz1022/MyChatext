import express from "express";
import { checkAuth, getPersonalInfo, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import upload from "../middleware/profile.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/check", protectRoute, checkAuth);

router.get("/personal", protectRoute, getPersonalInfo);

router.put("/update-profile", protectRoute, upload.single("profilePic"), updateProfile);

export default router;