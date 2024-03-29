const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const Product = mongoose.model('Products', productsSchema);

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


// create data
app.post("/products", async (req, res) => {
    try {
        const { title, price, description } = req.body;
        const newProduct = new Product({
            title: title,
            price: price,
            description: description,
        })
        const ProductData = await newProduct.save();
        res.status(201).send(ProductData);

    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
})
// read data

app.get("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const productData = await Product.findOne({ _id: id }, { title: 0, price: 1, description: 1, _id: 0 });
        if (productData) {
            res.status(200).send(productData);
        } else {
            res.status(404).send({
                message: "Data not found"
            })
        }

    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
})




app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
    await connectDb()
}
);