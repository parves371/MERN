const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./config/config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set("view engine", "ejs");

require("./config/database");
require("./config/passport");
const User = require("./models/User.model");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: config.db.url,
      collectionName: "sessions",
    }),
    // cookie: { secure: true }
  })
);
app.use(passport.initialize());
app.use(passport.session());

// base url
app.get("/", (req, res) => {
  res.render("index");
});

// register: get

app.get("/register", (req, res) => {
  res.render("register");
});
// register: post
app.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).send("User already exists");
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      const newUser = new User({
        username: req.body.username,
        password: hash,
      });
      await newUser.save();
      res.status(201).redirect("/login");
    });
  } catch (error) {
    res.status(500).send(error.maessage);
  }
});

const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/profile");
  }
  next();
};

// login : get
app.get("/login", checkLoggedIn, (req, res) => {
  res.render("login");
});
// login: post
app.post(
  "/me",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/profile");
  }
);
app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/profile",
  })
);

const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

// profile protected route
app.get("/profile", checkAuthenticated, (req, res) => {
  res.render("profile");
});

// logout
app.get("/logout", (req, res) => {
  try {
    req.logout((err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});
app.use((err, req, res, next) => {
  res.status(500).send("Server Error");
});

module.exports = app;
