import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        requried: true,
        unique: true,
    },
    firstName: {
        type: String,
        requried: true,
    },
    lastName: {
        type: String,
        requried: true,
    },
    fullName: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        requried: true,
        minlength: 6,
    },
    profilePic: {
        type: String,
        default: "",
    },
},
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;