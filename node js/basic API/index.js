const http = require('http')
// console.log('Server running at http://127.0.0.1:8081/');
const data =require('./data')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' }); 
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);