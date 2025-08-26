const user = require("../models/user");
const getAllUsers = async (req, res) => {
  const users = await user.find().select("-password").lean();
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }
  res.json(users);
};
module.exports = { getAllUsers };
