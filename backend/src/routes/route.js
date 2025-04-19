const express = require("express");
const router = express.Router();
const { authController, fileController } = require("../controllers/index");
const upload = require("../middleware/upload");

router.get("/test", authController.fetchTest);
router.get("/getFileById", fileController.getFileById);

router.post(
  "/upload/singleFile",
  upload.single("file"),
  fileController.singleFileUpload
);
router.post(
  '"/upload/multiFile',
  upload.array("file", 5),
  fileController.multiFileUpload
);

module.exports = router;
