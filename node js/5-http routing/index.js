const http = require('http');
const port = 5000;
const hostName = "127.0.0.1";


const myServer = http.createServer((req, res) => {
    res.write("wellcome tp my server");
    res.end();
});

myServer.listen(port, hostName, () => {
    console.log(`this server is running at http://${hostName}:${port} `);
});



