const express = require('express');
const path = require('path')
const app = express();
const port = 5000;

const pagesPath = path.join(__dirname,'pages')

console.log(pagesPath);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use(express.static(pagesPath));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));