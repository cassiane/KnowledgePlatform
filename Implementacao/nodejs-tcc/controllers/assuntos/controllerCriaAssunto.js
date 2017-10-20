module.exports = function (req, res) {
  const db = req.app.locals.db;
  db.collection('Assuntos').count(function (err, count) {
    if (err) res.sendStatus(500);

    var query = { assuntoDescricao: req.body.assunto };
    db.collection('Assuntos').find(query).toArray(function (err, result) {
      if (err) throw err;
      if (result != null && result.length == 0) {
        db.collection('Assuntos', function (err, collection) {
          if (err) res.sendStatus(500)
          res.sendStatus(204);

          collection.insert({
            id: (count + 1).toString(),
            assunto: req.body.assunto,
            votos: [],
            areas: req.body.areas
          });
          console.log('Inserido');
        });
      } else {
        var response = {
          'status': '200',
          'mensagem': 'Este assunto já foi sugerido ! Experimente votar nele ou procurar uma página referente!'
        };
        res.send(response);
      }
    });
  });
};