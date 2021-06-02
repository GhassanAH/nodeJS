const http = require('http');
const server = http.createServer((req,res) =>{

    if(req.url === '/'){
        res.end('Hello there, it \'s your home page')
    }else if(req.url === '/about'){
        res.end('Hello there, it \'s your about page')
    }else{
        res.end('<h1>Ops</h1> <br> <p> This page is not availabe </p> <br> <a href="/">Click me</a>')
    }

    

})

server.listen(5000);

