exports.fetchTest = async (req, res) => {
  try {
    return await res.status(200).send({ message: "Failed to fetch data" });
  } catch (error) {
    return res.status(500).send({ message: "Failed to fetch data" });
  }
};
