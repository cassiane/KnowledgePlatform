module.exports = function (req, res) {
    const db = req.app.locals.db;
    db.collection('Notificacoes').find({}).toArray(function (err, result) {
        if (err) {
            res.sendStatus(500);
        }
        res.send(result);
    });
};