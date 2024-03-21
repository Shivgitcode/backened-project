const logoutUser = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 5 });
  res.status(200).json({
    message: "logged out successfully",
  });
};

module.exports = logoutUser;
