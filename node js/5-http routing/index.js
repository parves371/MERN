const http = require('http');
const fs = require('fs');


const port = 5000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
    const handleReadFile = (pathName, statusCode) => {
        fs.readFile(pathName, 'utf-8', (err, data) => {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    }

    if (req.url === "/") {
        handleReadFile('./views/home.html', 200);
    }
    else if (req.url === "/about") {
        handleReadFile('./views/about.html', 200);
    }
    else if (req.url === "/contact") {
        handleReadFile('./views/contact.html', 200);
    }
    else if (req.url === "/shope") {
        handleReadFile('./views/shope.html', 200);
    }
    else {
        handleReadFile('./views/404.html', 404);
    }
});

myServer.listen(port, hostName, () => {
    console.log(`this server is running at http://${hostName}:${port} `);
});



