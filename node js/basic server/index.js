const http = require('http')
// console.log('Server running at http://127.0.0.1:8081/');


http.createServer((req,res)=>{
    res.write("hellow world i am parves ahmed shuvo")
    res.end()
}).listen(4444);