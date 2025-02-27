import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { addPosts, getMyPosts, getOtherPosts, getPublicPosts, getUsersInfo } from "../controllers/posts.controller.js";
import upload from "../middleware/post.middleware.js";

const router = express.Router();

// get users info ---
router.get("/users", protectRoute, getUsersInfo)
// router.get("/info", protectRoute, getMyinfo)

// adding posts ---
router.post("/add", protectRoute, upload.single("file"), addPosts)

// fetching public, other and personal posts ---
router.get("/all", protectRoute, getPublicPosts)
router.get("/self", protectRoute, getMyPosts)
router.get("/:id", protectRoute, getOtherPosts)

export default router;