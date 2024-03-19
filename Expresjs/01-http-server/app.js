const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('hi i am get request home');
});
app.post('/', (req, res) => {
    res.send('hi i am post request home');
});

app.put('/', (req, res) => {
    res.send('hi i am put request home');
});

app.delete('/', (req, res) => {
    res.send('hi i am delete request home');
});












module.exports = app;