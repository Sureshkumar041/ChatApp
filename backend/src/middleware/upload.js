const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Define storage for the uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderPath = path.join("uploads");

    // Create Folder If upload folder not created
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    cb(null, folderPath); // File saving folder name
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file?.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

// File filter to validate file type
function fileFilter(req, file, cb) {
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, and PDF are allowed."));
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fieldSize: 5 * 1024 * 1024 },
}); // 5 MB limit

module.exports = upload;
