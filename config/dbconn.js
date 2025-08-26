const mongooose = require("mongoose");
const connectDB = async () => {
  try {
    await mongooose.connect(process.env.DATABASE_URI);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
