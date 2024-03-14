const User = require("../../schema/userShema");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 12);
  console.log(hashedPass);
  await User.create({
    username,
    email,
    password: hashedPass,
  });
  res.send("user created");
};

module.exports = registerUser;
