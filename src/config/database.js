const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://pujithavankadari1244_db_user:SagarJaini123@namastenode.rxxns9u.mongodb.net/Expenses"
  );
};

module.exports = connectDb;
