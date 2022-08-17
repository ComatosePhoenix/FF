const { on } = require('events');
var fs = require('fs');



const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//let html = fs.readFileSync('./ff.html')

const server = http.createServer((req, res) => {
    console.log(req.url)
if (req.url.includes('..')){
    //something funky is going on, abort
    res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('The Url is invalid');
    return
}
fs.readFile('.'+req.url,'utf-8',((err, file)=>{
    if(err){
        console.log(err);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('The page cannot be found T_T');
        return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(file);
}))


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
