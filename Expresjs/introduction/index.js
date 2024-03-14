const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('helow this is home page');
});


app.get('/about', (req, res) => {
    res.send('helow this is about page');
});


app.get('/info', (req, res) => {
    res.send({
        name: "parves",
        age: 23,
        city: "dhaka"
    });
});


app.listen(5000);
