const db = require('./db')
const Post = db.sequelize.define('postagens2',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.STRING
    }
})
//Post.sync({force:true})
module.exports = Post