const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signUp", async (req, res) => {
  console.log(req.body);
  // Creating a new instance of user Modal
  const user = new User(req.body);

  try {
    await user.save();
    res.send("Data saved succesfully😊");
  } catch (err) {
    res.status(401).send("Failed to save Data");
  }
});

// Get user by email
app.get("/user", async (req, res) => {
  const email = req.body.emailId;
  console.log(email);
  try {
    const users = await User.find({ emailId: email });
    if (users.length === 0) {
      res.status(404).send("No user Found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(401).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
  } catch (err) {
    res.status(401).send("Something went wrong");
  }
});

// delete user from Database
app.delete("/delete", async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findByIdAndDelete({ _id: userId });
    res.send("User deleted succesfully");
  } catch (err) {
    res.status(401).send("Something went wrong");
  }
});

app.patch("/update", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(401).send("Something went wrong" + err.message);
  }
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
