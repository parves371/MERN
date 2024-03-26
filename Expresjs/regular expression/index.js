require('dotenv').config(); // load.env file
const express = require('express'); 


const app = express();
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;



app.get('/products/:id([0-9]+)', (req, res) => {
    const id = req.params.id
    res.send(`<h1> your product id ${id}  </h1>`);
}); 


app.listen(port, () => {
    console.log(`your server is running at ${hostname}:${port} `) 
});