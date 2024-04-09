const { postLogin, postRregister } = require("../controlers/login.controler");

const route = require("express").Router();

route.post("/register", postRregister);

route.post("/login", postLogin);

module.exports = route;
