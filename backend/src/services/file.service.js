const { File } = require("../models/index");
const formattedResponse = require("../utils/formattedResponse");

exports.singleFileUpload = async (req, res) => {
  try {
    const { file } = req;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded." });
    }

    const createFile = new File({
      filename: req?.body?.name,
      path: file?.path,
      mimetype: file?.mimetype,
    });

    const savedFile = await createFile.save();

    return formattedResponse.success(
      res,
      "File upload successfully",
      savedFile
    );
  } catch (error) {
    console.log("catch singleFileUpload: ", error?.message);
    throw error;
  }
};

exports.multiFileUpload = async (req, res) => {
  try {
    return await res.status(200).send({ message: "File upload successfully" });
  } catch (error) {
    console.log("catch multiFileUpload: ", error?.message);
    throw error;
  }
};

exports.getFileById = async (req, res) => {
  try {
    const { id } = req?.query;

    const getFile = await File.findById(id);

    return formattedResponse.success(res, "File fetched successfully", getFile);
  } catch (error) {
    console.log("catch getFileById: ", error?.message);
    throw error;
  }
};
