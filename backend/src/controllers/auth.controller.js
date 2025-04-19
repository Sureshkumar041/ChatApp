const { authService } = require("../services/index");

exports.fetchTest = async (req, res) => {
  try {
    return await authService.fetchTest(req, res);
  } catch (error) {
    return res.status(500).send({ message: "Failed to fetch data" });
  }
};
