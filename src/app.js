const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signUp", async (req, res) => {
  const user = new User({
    firstName: "Poojitha",
    lastName: "Vankadari",
    emailId: "poojitha@gmail.com",
    password: "poojitha@123",
  });
  // Creating a new instance of user Modal
  await user.save();
  res.send("User Saved")
});

connectDb()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server is succesfully listening on port 7777");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected!");
  });
