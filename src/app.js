const express = require("express");
const app = express();

const {adminAuth} = require('./middlewares/auth')


// app.use("/user", adminAuth)
app.use("/user",adminAuth,(req, res) => {
  console.log("user 2nd Route");
  res.send("2nd route");
});

app.listen(7777, () => {
  console.log("Server is succesfully listening on port 7777");
});
