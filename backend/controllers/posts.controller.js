import Post from "../models/post.model.js";
import User from "../models/user.models.js";


// handle getting users info ---
export const getUsersInfo = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersInfo controller:", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
};


// handle getting my info ---
// export const getMyinfo = async (req, res) => {
//     try {
//         const loggedInUserId = req.user._id;
//         const myInfo = await User.find(loggedInUserId).select("-password");
//         res.status(200).json(myInfo);
//     } catch (error) {
//         console.error("Error in getMyinfo controller:", error.message);
//         res.status(500).json({ message: "Internal Server Error." });
//     }
// };


// handle adding posts ---
export const addPosts = async (req, res) => {
    try {

        const { text } = req.body;
        const img = req.file ? req.file.filename : null;


        const senderId = req.user._id;
        const userName = await User.findById(senderId);
        console.log(userName)

        let imageUrl;
        if (img) {
            console.log(img)
        }

        const newPost = new Post({
            senderId: senderId,
            senderName: userName.fullName,
            senderImage: userName.profilePic,
            text,
            image: img
        })
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        console.log("Error in addPosts controller", error.message)
        res.status(500).json({ message: "Internal Server Error." })
    }
};


// handle fetching public posts ---
export const getPublicPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        console.log("Error in getPublicPosts controller", error.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
};



// handle fetching my posts ---
export const getMyPosts = async (req, res) => {
    try {

        const myId = req.user._id;
        const userName = await User.findById(myId);

        const posts = await Post.find({ senderName: userName.fullName })
        res.status(200).json(posts)
    } catch (error) {
        console.log("Error in getMyPosts controller", error.message)
        res.status(500).json({ message: "Internal Server Error." })
    }
};


// handle fetching others posts ---
export const getOtherPosts = async (req, res) => {
    try {

        const { id } = req.params;
        const userName = await User.findById(id);

        const posts = await Post.find({ senderName: userName.fullName })
        res.status(200).json(posts)
    } catch (error) {
        console.log("Error in getOtherPosts controller", error.message)
        res.status(500).json({ message: "Internal Server Error." })
    }
};