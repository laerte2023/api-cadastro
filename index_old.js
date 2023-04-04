const express = require('express')
const app = express()

app.get("/", function(req,res){
    res.send("servidor rodando na porta 8081")
})
app.get("/ola/:nome/:cargo", function(req,res){
    res.send("ola " + req.params.nome + ", seu cargo é: " + req.params.cargo + " nessa empresa!")
})
app.get('/html', function(req,res){
    res.sendFile(__dirname + "/html/index.html")
})
app.get('/sobre',function(req,res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.listen(8081, function(){
    console.log('servidor rodando na porta 8081!')
})