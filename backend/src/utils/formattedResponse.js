module.exports = {
  success: (res, message, data = {}) => {
    res.status(200).json({
      status: true,
      message,
      data,
    });
  },
  error: (res, message, error = {}, statusCode = 500) => {
    res.status(statusCode).json({
      status: false,
      message,
      error,
    });
  },
};
