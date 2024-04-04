const { getAllUsers, createUsers } = require("../controlers/user.controler");

const route = require("express").Router();

route.get("/", getAllUsers);
route.post("/", createUsers);

module.exports = route;
