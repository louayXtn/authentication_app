require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/dbconn");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const corsoptions = require("./config/corsoptions");
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors(corsoptions));
app.use(cookieParser());
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/root"));
app.use("/auth", require("./routes/authroutes"));
app.use("/users", require("./routes/userroutes"));
// app.all("*", (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
// });

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
