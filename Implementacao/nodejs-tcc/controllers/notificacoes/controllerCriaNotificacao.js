module.exports = function (req, res) {
  const db = req.app.locals.db;
  db.collection('Notificacoes').count(function (err, count) {
    if (err) res.sendStatus(500);
    
    db.collection('Notificacoes', function (err, collection) {
      if (err) res.sendStatus(500)      
      collection.insert({
        id: count + 1,
        usuarioRemetente: req.body.usuarioRemetente,
        usuarioDestinatario: req.body.usuarioDestinatario,
        assunto: req.body.assunto,
        texto: req.body.texto
      });
      res.sendStatus(204);
    });
  });
}