module.exports = function (req, res) {
  const db = req.app.locals.db;
  db.collection('Notificacoes').count(function (err, count) {
    if (err) res.sendStatus(500);
    
    db.collection('Notificacoes', function (err, collection) {
      if (err) res.sendStatus(500)      
      collection.insert({
        id: count + 1,
        usuarioRemetenteId: req.body.usuarioRemetenteId,
        usuarioRemetenteNome: req.body.usuarioRemetenteNome,
        usuarioDestinatarioId: req.body.usuarioDestinatarioId,
        usuarioDestinatarioNome: req.body.usuarioDestinatarioNome,
        assuntoId: req.body.assuntoId,
        assuntoDescricao: req.body.assuntoDescricao,
        texto: req.body.texto
      });
      res.sendStatus(204);
    });
  });
}