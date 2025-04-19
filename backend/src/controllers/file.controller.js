const { fileService } = require("../services/index");
const formattedResponse = require("../utils/formattedResponse");

exports.singleFileUpload = async (req, res) => {
  try {
    return await fileService.singleFileUpload(req, res);
  } catch (error) {
    const message = error?.message ? error?.message : error;
    return formattedResponse.error(res, message);
  }
};

exports.getFileById = async (req, res) => {
  try {
    return await fileService.getFileById(req, res);
  } catch (error) {
    const message = error?.message ? error?.message : error;
    return formattedResponse.error(res, message);
  }
};

exports.multiFileUpload = async (req, res) => {
  try {
    return await fileService.multiFileUpload(req, res);
  } catch (error) {
    const message = error?.message ? error?.message : error;
    return formattedResponse.error(res, message);
  }
};
