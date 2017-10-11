var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
//1
var UsuariosSchema = new mongoose.Schema({
  nome: {
    type: String,
    unique: true,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
//2
UsuariosSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});
//3
UsuariosSchema.methods.verificaSenha = function(password, next) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return next(err);
    next(isMatch);
  });
};
module.exports = mongoose.model('Usuarios', UsuariosSchema);