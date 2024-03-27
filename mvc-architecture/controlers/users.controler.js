const path = require('path');

const users = require('../models/users.model');

const userGet = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
}

const userPost = (req, res) => {
    const { name, age } = req.body;
    const newUser = {
        name,
        age,
    };
    users.push(newUser);
    res.status(201).json({
        success: true,
        users
    });
}


module.exports = {
    userGet,
    userPost
}