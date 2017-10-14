//db
/*
var mongoose = require('mongoose');
const db = req.app.locals.db;
var bcrypt = require('bcrypt-nodejs');

//quando tiver o db 
//1

var UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
});

//2
//comando.pre funcão que irá verificar antes de salvar um usuário
//se a senha foi alterada
//se foi alterada retorna a senha encriptada
//se der um erro retorna ele e para o fluxo
UsuarioSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(5, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});
//3
//método para verificar a senha utilizando o compare do bcrypt
//se tudo ok retorna true
UsuarioSchema.methods.verificaSenha = function (password, next) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) return next(err);
        next(isMatch);
    });
};
//quando tiver o db
module.exports = mongoose.model('Usuario', UsuarioSchema);
*/