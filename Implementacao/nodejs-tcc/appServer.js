var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    jwt = require("jwt-simple"),
    getModule = require('getmodule'),
    mongoose = require('mongoose'),
    MongoClient = require('mongodb').MongoClient;
    router = express.Router(),
    validarJWT = require('./validarJWT');
//db
var urldb = 'mongodb://root:root@ds117625.mlab.com:17625/knowkedgeplatform';//coloque a url do db aqui

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);
app.use("/", express.static("public"));

//rotas
var rotas = require('./rotas')
router.route('/usuarios')
    .get(rotas.getUsuarios)
    .post(rotas.postUsuarios);
/*router.route('/login')
/    .post(rotas.login);
router.route('/assuntos')
    .get(rotas.getAssuntos)
    .post(rotas.postAssuntos)
    .post(rotas.postVotarAssunto);
router.route('/notificacao')
    .post(rotas.postNotificacao)
    .get(rotas.getNotificacao);*/



//db
mongoose.connect(urldb, function(err, db){
    app.locals.db = db;
    app.listen(3000);
    console.log("iniciado na porta 3000");
    console.log("Conexão com mongo efetuada");
});

/*
MongoClient.connect('mongodb://root:root@ds117625.mlab.com:17625/knowkedgeplatform', function (err, db) {    
    app.locals.db = db;
    app.listen(3000);
    console.log("iniciado na porta 3000");
});*/




