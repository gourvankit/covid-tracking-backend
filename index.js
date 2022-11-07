const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/user");
const eventsRoute = require("./Routes/events");
const volunteerRoute = require("./Routes/volunteer");
const cors = require("cors");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/events", eventsRoute);
app.use("/api/volunteer", volunteerRoute);

app.listen("8800", () => {
  console.log("Backend server running");
});
