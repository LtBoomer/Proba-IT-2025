const multer = require("multer");
const path = require("path");

const dest = path.join(__dirname, "../Media/grillIcons");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueName + ext);
  },
});
const allowedExtensions = [".png", ".jpg", ".jpeg"];

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();

  if (!allowedExtensions.includes(ext)) {
    return cb(new Error("Please upload only .png, .jpg or .jpeg formats"), false);
  }

  cb(null, true);
};
const uploadImage = multer({ storage, fileFilter });

module.exports = uploadImage;
