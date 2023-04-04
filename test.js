const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','root','123456',
{host:"localhost",
dialect: 'mysql'})
/*sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("falha ao se conectar!" + erro)
})*/
//CRIAÇÃO DO MODEL POSTAGEM
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
Postagem.create({
    titulo: "nova era",
    conteudo: "nova era do planeta"
})

const Usuario = sequelize.define('usuarios', {
    Nome: {
        type: Sequelize.STRING
    },
    Sobrenome: {
        type: Sequelize.TEXT
    },
    Idade: {
        type: Sequelize.INTEGER
    },
    EMAIL: {
        type: Sequelize.STRING
    }
    })
    Usuario.create({
        Nome: "ana paula",
        Sobrenome: "zurker",
        Idade: 19,
        Email: "aninha@aninha.com"
    })
    const Infos = sequelize.define('documentos',{
        RG: {
            type: Sequelize.STRING
        },
        CPF: {
            type:Sequelize.STRING
        },
    })
    Infos.create({
        RG: "54.987.467-05",
        CPF: "654.832.956-45"
    })
//infos, postagem ou Usuario.sync({force:true})//cria a tabela no mysql deve ser apagado ou comentado após o primeiro uso!

//infos.sync({force:true})