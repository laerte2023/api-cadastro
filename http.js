var http = require('http')
http.createServer(function(req,res){
    res.end("olá")
}).listen(8090);
console.log('ola')