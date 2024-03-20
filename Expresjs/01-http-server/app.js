const express = require('express');
const app = express();
const userRouter = require('./routes/user.route');

// app.get('*', (req, res) => {
//     res.send('<h1>404!! not found </h1>');
// }) //for only get rquest
app.use('/api/user', userRouter);


app.use('/register', (req, res) => {
    res.status(200).json({
        "name": "MD. Parves Ahmed Shuvo",
        "phone": "01764797841",
        "statusCode": "200",
    })

})
app.use('/login', (req, res) => {
    res.status = 200;
    res.cookie("name", "parves1");
    res.cookie("age", "parves2");
    res.end()
});

app.use('/', (req, res) => {
    res.send('hi i am get request home');
    res.end();
});

app.use((req, res) => {
    res.send('<h1>404!! not found </h1>');
})//works for all the methods

// app.post('/', (req, res) => {
//     res.send('hi i am post request home');
//     res.end();

// });

// app.put('/', (req, res) => {
//     res.send('hi i am put request home');
//     res.end();
// });

// app.delete('/', (req, res) => {
//     res.send('hi i am delete request home');
//     res.end();

// });


module.exports = app;