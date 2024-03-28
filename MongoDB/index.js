const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/e-comm');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, async () => {
    console.log(`Example app listening on port ${port}!`)
    await connectDb()

}
);