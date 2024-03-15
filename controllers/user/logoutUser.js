const logoutUser = async (req, res) => {
  res.cookie("jwt", null, { maxAge: 1 });
  res.send("logout successfully");
};

module.exports = logoutUser;
