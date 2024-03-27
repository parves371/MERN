const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();
const port = 5000;


// app.use(reqFilter);
route.use(reqFilter);

/**
 * Handles GET requests to root route.
 * Sends simple HTML response.
 */
app.get("", (req, res) => {
    res.send("<h1> hi hellow </h1>");
});
route.get('/users', (req, res) => {
    res.send('<h1> this is users page </h1>');
});

route.get('/about', (req, res) => {
    res.send('<h1> this is about page </h1>');
});

app.use('/', route);


app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // No code was selected, so no documentation can be generated.
