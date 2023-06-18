const passport = require("passport");
const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });


const route = (app) => {
  app.get("/", requireAuth, (req, res) => {
    res.send({ content: "hi there" });
  });

  app.post("/signin", requireSignin, Authentication.signin);

  app.post("/signup", Authentication.signup);
  
  app.get("/users",requireAuth, Authentication.getUsers);
  app.get("/user/:id", Authentication.getUserProfile);
  
  app.put("/userprofileupdate", Authentication.updateUserProfile);
};

module.exports = route;
