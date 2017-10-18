var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    MongoClient = require('mongodb').MongoClient,
    router = express.Router();
//db


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);
app.use("/", express.static("public"));

//rotas
var rotas = require('./rotas')
router.route('/usuarios')
    .get(rotas.getUsuarios)
    .post(rotas.postUsuarios);
router.route('/login/email=:email&senha=:senha')
    .get(rotas.login)
router.route('/assuntos')
    .get(rotas.getAssuntos)
    .post(rotas.postAssuntos)
router.route('/assuntos/votarassunto')
    .post(rotas.postVotarAssunto);
router.route('/notificacoes')
    .post(rotas.postNotificacao);
router.route('/notificacoes/:usuarioId')
    .get(rotas.getNotificacoes);

var urldb = 'mongodb://root:root@ds117625.mlab.com:17625/knowkedgeplatform';
MongoClient.connect(urldb, function (err, db) {
    if (err) {
        console.log(err)
    } else {
        app.locals.db = db;
        app.listen(3000);
        console.log("iniciado na porta 3000");
    }
});