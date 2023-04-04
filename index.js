const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post')


//config
    //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars')
    // BODY PARSER
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
    //rotas
    app.get('/', function(req,res){
        res.render('home')
    })
    app.get("/cad", function(req,res){
        res.render('formulario')
    })
    app.post("/add", function(req,res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("houve um erro: " + erro)
        })
    })


app.listen(8081, function(){
    console.log('servidor rodando na porta 8081!')
})
