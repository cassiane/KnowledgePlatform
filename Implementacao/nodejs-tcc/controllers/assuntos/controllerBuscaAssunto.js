module.exports = function buscaAssunto(req, res) {
    const db = req.app.locals.db;
    var query = { "id": req.params.id};
    db.collection('Assuntos').find(query).toArray(function (err, result) {
        res.send(result);
    });
}