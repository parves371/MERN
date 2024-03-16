const http = require('http');

const port = 5000;
const hostname= '127.0.0.1'

const myServer=http.createServer((req,res)=>{
    res.writeHead(202,{'Content-Type': 'text/plain'});
    res.write('<h1> hellow </h1>');
    res.end();
});

myServer.listen(port,()=>{
    console.log(`server is runing at http://${hostname}:${port}`);
})