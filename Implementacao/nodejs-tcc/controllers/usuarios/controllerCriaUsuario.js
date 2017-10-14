module.exports = function (req, res) {
  const db = req.app.locals.db;
  db.collection('Usuarios').count(function (err, count) {
    if (err) res.sendStatus(500);
    var query = { email: req.body.email };
    db.collection('Usuarios').find(query).toArray(function (err, result) {
      if (err) res.sendStatus(500);
      if (result != null && result.length == 0) {
        db.collection('Usuarios', function (err, collection) {
          if (err) res.sendStatus(500);
          collection.insert({
            id: count + 1,
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
          });
          res.sendStatus(204);
        });
      } else {
        res.send(
          {
            status: 200,
            mensagem: 'Este email já está sendo utilizado.'
          }
        )
      }
    });
  });
};