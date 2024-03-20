const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.send('<h1>this about page </h1>');
    res.end();
})

router.get('/user', (req, res) => {
    res.send('<h1>this user page </h1>');
    res.end();
})

module.exports = router;