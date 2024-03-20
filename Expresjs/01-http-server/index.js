const app = require('./app');

const port = 5000;
const hostname= "127.0.0.1"



app.listen(port, () => console.log(`Example app listening on port http://${hostname}:${port}`));
