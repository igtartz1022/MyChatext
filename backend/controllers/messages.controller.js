import { getReceiverSocketId, io } from "../config/socket.js";
import Message from "../models/message.model.js";
import User from "../models/user.models.js";


// handle getting personal message (pm) ---
export const getPersonalMessage = async (req, res) => {
    try {
        const { id: userToChat } = req.params
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                {
                    senderId: myId,
                    receiverId: userToChat
                },
                {
                    senderId: userToChat,
                    receiverId: myId
                }
            ]
        })

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getPersonalMessage controller", error.message)
        res.status(500).json({ message: "Internal Server Error." })
    }
};


// handle getting global messages ---
export const getPublicMessages = async (req, res) => {
    try {

        const messages = await Message.find({ receiverId: { $exists: false } });
        res.status(200).json(messages);
    } catch (error) {
        console.error("Error in getGlobalMessages controller:", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
};


// handle sending message to someone---
export const sendPersonalMessage = async (req, res) => {
    try {
        const { text } = req.body;
        const senderId = req.user._id;
        const { id: receiverId } = req.params;

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
        });
        await newMessage.save();

        console.log("Message sent by:", senderId);
        res.status(200).json(newMessage);

        // Real-time message sending
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
    } catch (error) {
        console.error("Error in sendPersonalMessage controller:", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
};


// handle sending message to all---
export const sendAllMessage = async (req, res) => {
    try {

        const { text } = req.body;
        const senderId = req.user._id;

        const newMessage = new Message({
            senderId,
            text,
        })
        await newMessage.save();
        res.status(200).json(newMessage);

        // TODO: realtime application here --
        io.emit("newPublicMessage", newMessage);
    } catch (error) {
        console.error("Error in sendAllMessage controller:", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
};



















