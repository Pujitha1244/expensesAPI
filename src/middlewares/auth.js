const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked");

  const token = "xyz";
  const isAdminAuth = token === "xyzvdcsx";
  if (!isAdminAuth) {
    res.status(401).send("Unauthorized User");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
}
