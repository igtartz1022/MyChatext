import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploaded/profilepics");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const validImageTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (validImageTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type. Only PNG, JPEG, and JPG are allowed."));
        }
    },
});

export default upload;
