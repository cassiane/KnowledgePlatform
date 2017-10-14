module.exports = function (req, res) {
    const db = req.app.locals.db;
    db.collection('Usuarios').find({}).toArray(function (err, result) {
        if (err) {
            res.sendStatus(500);
            console.log(err);
        }
        res.send(result);
    });
};