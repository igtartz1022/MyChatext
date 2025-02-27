import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        requried: true,
        ref: "User",
    },
    senderName: {
        type: String,
        requried: true,
        ref: "User",
    },
    senderImage: {
        type: String,
        ref: "User",
        default: "",
    },
    text: {
        type: String,
    },
    image: {
        type: String,
        default: "",
    },
},
    { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);
export default Post;