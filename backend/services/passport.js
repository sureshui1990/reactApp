const password = require("passport");
const User = require("../models/users");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const JwtExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

const localOptions = {
  usernameField: "email",
};
// Create local strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }

    // compare email and password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return done(err);
      }
      done(null, isMatch);
    });
  });
});

// jwt options for jwt strategy
const jwtOptions = {
  jwtFromRequest: JwtExtractJwt.fromHeader("auth"),
  secretOrKey: config.secretKey,
};

// Create Jwt Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) {
      done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
password.use(jwtLogin);
password.use(localLogin);
