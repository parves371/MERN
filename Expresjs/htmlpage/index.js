const express = require('express');
const path = require('path')
const app = express();
const port = 5000;

const pagesPath = path.join(__dirname, 'pages')

console.log(pagesPath);

app.get('', (_, res) => {
    // res.send('Hello World!');
    res.sendFile(`${pagesPath}/home.html`)
})

app.get('/about', (req, res) => {
    res.send('Hello World!');
})

app.get('/user', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(`${pagesPath}/user.html`)
})

app.get('*', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(`${pagesPath}/404.html`)
})

// app.use(express.static(pagesPath));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));