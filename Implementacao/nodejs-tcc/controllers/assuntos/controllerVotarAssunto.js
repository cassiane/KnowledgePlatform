module.exports = function (req, res) {
    const db = req.app.locals.db;
    var query = { id: req.body.id };
    var newvalues = { $set: {
        numero_votos: {
            usuario:req.body.idUsuario
        }
    } };
    db.collection('Assuntos').updateOne(query, newvalues, function (err, result) {
        if (err) {
            res.sendStatus(500);
        }
        res.sendStatus(204);
    });
};