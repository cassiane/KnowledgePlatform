var bcrypt = require('bcrypt-nodejs');
var senhaEncriptada = '';
module.exports = function (req, res) {
  const db = req.app.locals.db;
  bcrypt.genSalt(5, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(req.body.senha, salt, null, function (err, hash) {
        if (err) return next(err);
        senhaEncriptada = hash; 
    });
});
  db.collection('Usuarios', function (err, collection) {
    collection.insert({
      nome: req.body.nome,
      email: req.body.email,
      senha: senhaEncriptada
    });
    db.collection('Usuarios').count(function (err, count) {
      if (err) throw err;
      console.log('Total Linhas na coleção : ' + count);
    });
  });
};

function criptografaSenha(senha){
  const crypto = require('crypto');
  const hash = crypto.createHash('sha256');
  
  hash.on('readable', () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString('hex'));
    }
  });  
  hash.write('some data to hash');
  hash.end();
}