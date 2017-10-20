module.exports = function buscaUsuario(req, res) {
    const db = req.app.locals.db;
    var query = { email: req.body.idUsuario };
    db.collection('Usuarios').find(query).toArray(function (err, result) {
        res.send(result);
    });
}