const logoutUser = async (req, res) => {
  req.session.user_id = null;
  res.send("logout successfully");
};

module.exports = logoutUser;
