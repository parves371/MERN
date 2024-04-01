const {getLogin,postLogin} = require("../controlers/login.controler");

const route = require("express").Router();

route.get("/", getLogin);
route.post("/", postLogin);

module.exports = route;
