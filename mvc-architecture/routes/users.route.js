const router = require("express").Router();

const { userGet, userPost } = require("../controlers/users.controler");


router.get("/", userGet);

router.post("/", userPost);

module.exports = router;