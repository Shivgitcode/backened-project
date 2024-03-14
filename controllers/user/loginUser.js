const User = require("../../schema/userShema");
const bcrypt = require("bcrypt");
const loginUser = async (req, res) => {
  const { username, userPassword } = req.body;
  const user = await User.find({ username });
  const hash = user.password;
  const isLoggedIn = await bcrypt.compare(userPassword, hash);
  if (isLoggedIn) {
    res.redirect;
  }
};
