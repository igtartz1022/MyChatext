import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getPublicMessages, getPersonalMessage, sendAllMessage, sendPersonalMessage } from "../controllers/messages.controller.js";

const router = express.Router();



// fetching public & personal messages ---
router.get("/all", protectRoute, getPublicMessages)
router.get("/:id", protectRoute, getPersonalMessage)

// sending public and personal messages
router.post("/send/all", protectRoute, sendAllMessage)
router.post("/send/:id", protectRoute, sendPersonalMessage)

export default router;