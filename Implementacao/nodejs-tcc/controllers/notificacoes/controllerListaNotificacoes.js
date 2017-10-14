module.exports = function (req, res) {
    const db = req.app.locals.db;
    var query = { usuarioDestinatarioId: req.params.usuarioId };
    db.collection('Notificacoes').find(query).toArray(function (err, result) {
        if (err) res.sendStatus(500);
        res.send(result);
    });
};