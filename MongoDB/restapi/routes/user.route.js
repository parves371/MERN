const { getAllUsers, createUsers, getOneUsers, deleteUsers, updateUsers } = require("../controlers/user.controler");

const route = require("express").Router();

route.get("/", getAllUsers);
route.get("/:id", getOneUsers);
route.delete("/:id", deleteUsers);
route.patch("/:id", updateUsers);
route.post("/", createUsers);

module.exports = route;
