//db
//var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-nodejs');

var Usuario = require('./models/usuarios/modelUsuario');
var Assunto = require('./models/assunto/modelAssunto')
//quando tiver o db 
//1
/* var NotificacaoSchema = new mongoose.Schema({  */
var NotificacaoSchema = {
    assunto: {
        type: String,
        unique: true,
        required: true
    },
    usuarioCriador: {
        type: Usuario,
        unique:true,
        required: true
    },
    usuarioEscritor: {
        type: Usuario,
        unique:true,
        required: false
    }, 
    conteudo:{
        type: String,
        unique: true,
        required: false
    }
    //campo votos lista do tipo usuário não obrigatório
    //campo imagem do tipo imagem não obrigatório
    //campo video do tipo video nao obrigatorio
}

//quando tiver o db
module.exports = model('Assunto', AssuntoSchema);
//module.exports = mongoose.model('Assunto', AssuntoSchema);