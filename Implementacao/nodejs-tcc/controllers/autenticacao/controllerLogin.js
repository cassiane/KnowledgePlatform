module.exports = function (req, res) {
    const db = req.app.locals.db;
    var query = { email: req.query.email, senha: req.query.senha };
    
    db.collection('Usuarios').find(query).toArray(function (err, result) {
        if (err) res.sendStatus(500);
        if (result.length == 0) res.sendStatus(404);
        res.send(result);
        //req.session.usuario = result;
    });
};