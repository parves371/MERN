const fs = require('fs');
/*
fs.writeFile('demo2.txt', "this is my first demo. now ", (err,) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("successfull");
    }
})

fs.appendFile('demo2.txt', "this is demo 2 and", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(
            "successfull"
        );
    };
})

fs.readFile('demo2.txt','utf-8' ,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }

})

fs.rename('demo3.txt','demo4.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfull");
    }
})

*/

fs.unlink('demo2.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("successfull");
    }
})