const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

const getJWTToken = (user) => {
  const timeStamp = new Date().getTime();
  const token = jwt.sign(
    { sub: user.id, email: user.email, iat: timeStamp },
    config.secretKey
  );
  return token;
};

const signin = (req, res, next) => {
  res.send({ token: getJWTToken(req.user) });
};

const signup = (req, res, next) => {
  let { email, password } = req.body;

  if (!email || !password) {
    res.status(422);
    res.send({ error: "Please provide email and password" });
    return res.end();
  }

  User.findOne({ email: email }, async (err, userExist) => {
    if (err) {
      return next(err);
    }
    if (userExist) {
      res.status(422);
      res.send({ error: "User exist", alert: "Please use login" });
      return res.end();
    }

    // bcrypt
    const hashPassword = await bcrypt.hash(password, 10);
    // // new acc
    const user = new User({
      email,
      password: hashPassword,
    });

    // Save the new user with information
    user.save((err) => {
      if (err) {
        return next(err);
      }
      res.json({ token: getJWTToken(user) });
    });
  });
};


const getUsers = (req, res, next) => {
  User.find({}, (err, result) => {
    if(err) {return {err}}
    res.json({ data: result})
  })
}

module.exports = {
  signup,
  signin,
  getUsers
};
