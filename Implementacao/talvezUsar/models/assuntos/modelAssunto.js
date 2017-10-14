//db
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var Usuario = require('../../models/usuarios/modelUsuario' );

var AssuntoSchema = new Schema({
    assunto: {
        type: String,
        unique: true,
        required: true
    },
    usuarioCriador: {
        type: Schema.ObjectId, ref: "Usuario",
        unique:true,
        required: true
    },    
    usuarioEscritor: {
        type: { type: Schema.Types.ObjectId, ref: 'Usuario' },
        required: false
    }, 
    conteudo:{
        type: String,
        unique: true,
        required: false
    },
    votos: {
        fans: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }]
    },
    imagens: { 
        data: Buffer, 
        contentType: String,
        required:false
    }   
    //campo video do tipo video nao obrigatorio
});

//quando tiver o db
module.exports = mongoose.model('Assunto', AssuntoSchema);
