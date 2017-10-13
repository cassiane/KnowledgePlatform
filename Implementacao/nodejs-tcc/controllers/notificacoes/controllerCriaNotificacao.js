module.exports = function (req, res) {
  const db = req.app.locals.db;
  db.collection('Notificacoes').count(function (err, count) {
    if (err) res.sendStatus(500);
    console.log('Inserido');
    db.collection('Notificacoes', function (err, collection) {
      if (err) res.sendStatus(500)
      res.sendStatus(204);

      collection.insert({
        id: count + 1,
        usuarioRemetente: req.body.idUsuarioRemetente,
        usuarioDestinatario: req.body.idUsuarioDestinatario,
        assunto: req.body.idAssunto,
        texto: req.body.texto
      });
    });
  });
}