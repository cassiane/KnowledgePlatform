module.exports = function (req, res) {
  const db = req.app.locals.db;
  db.collection('Usuarios').count(function (err, count) {
    if (err) throw err;
    db.collection('Usuarios', function (err, collection) {
      collection.insert({
        id: count+1,
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaEncriptada
      });
    });
  });
};