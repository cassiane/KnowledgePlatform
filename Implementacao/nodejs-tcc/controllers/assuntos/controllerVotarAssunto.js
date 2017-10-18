module.exports = function (req, res) {
    const db = req.app.locals.db;
    var query = { id: req.body.id };
    var usuario = {
        "usuario": req.body.idUsuario.toString()
    };
    db.collection('Assuntos').find(query).toArray(function (err, result) {
        if (result[0].votos == null) {
            result[0].votos = [
                {
                    "usuario": req.body.idUsuario.toString()
                }
            ]
        } else {
            result[0].votos.push(usuario);
        }

        
        db.collection('Assuntos').updateOne(query, result[0].votos, function (err, result) {
            if (err) {
                res.sendStatus(500);
            }
            res.sendStatus(204);
        });
    });
};