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
  console.log('ee',req)
  // res.send({ token: getJWTToken(req.user),user:req.user });
  User.findOne( { "email": req.body.email}, (err, result) => {
    if(err) {return {err}}
    const { email,id } = result;
    const token = getJWTToken({email,id});
    res.json({ token, user: result });
  })
};

const signup = (req, res, next) => {
  let { email, password,firstName,lastName } = req.body;

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
      firstName,lastName
    });

    // Save the new user with information
    user.save((err) => {
      if (err) {
        return next(err);
      }
      const responseData = {
        token: getJWTToken(user),
        user
      }
      res.json(responseData);
    });
  });
};


const getUsers = (req, res, next) => {
  User.find({}, (err, result) => {
    if(err) {return {err}}
    res.json({ data: result})
  })
};

const getUserProfile = (req, res, next) => {
  User.findById( req.params.id, (err, result) => {
    if(err) {return {err}}
    res.json({ data: result})
  })
};

module.exports = {
  signup,
  signin,
  getUsers,
  getUserProfile
};
