var controllerNotificacao = require('../notificacoes/controllerCriaNotificacao');
var controllerUsuario = require('../usuarios/controllerBuscaUsuario');
var controllerAssunto = require('../assuntos/controllerBuscaAssunto');
module.exports = function (req, res) {
    const db = req.app.locals.db;
    var query = { id: req.body.id };
    var usuario = {
        "usuario": req.body.idUsuario
    };
    db.collection('Assuntos').find(query).toArray(function (err, result) {
        if (result != null && result.length != 0) {
            if (result[0].votos == null) {
                result[0].votos = [
                    {
                        "usuario": req.body.idUsuario
                    }
                ]
                var novoValor = result[0];
            } else {
                result[0].votos.push(usuario);
                var novoValor = result[0];
            }

            db.collection('Assuntos').updateOne(query, novoValor, function (err, result) {
                if (err) res.sendStatus(500);                
                db.collection('Assuntos').find(query).toArray(function (err, result) {
                    if (result[0].votos.length >= 15) {
                        enviarNotificacao(result[0]);
                    }
                });
                res.sendStatus(204);
            });
        } else {
            res.send({
                status: 404,
                mensagem: "Assunto não encontrado"
            });
        }
    });
};

function enviarNotificacao(assunto) {
    var areasAssunto = assunto.areas;
    for (var i = 0; i < areasAssunto.length; i++) {
        var query = { "areas.area": areasAssunto[i] };
        db.collection('Usuarios').find(query).toArray(function (err, result) {
            if (result.length != 0) {
                var usuarios = result;
                for (var i = 0; i < usuarios.length; i++) {
                    db.collection('Notificacoes').count(function (err, count) {
                        db.collection('Notificacoes', function (err, collection) {                            
                            collection.insert({
                                id: count + 1,
                                usuarioRemetente: {},
                                usuarioDestinatario: usuarios[i],
                                assunto: assunto,
                                texto: "Este assunto possui mais de 15 votos e voce possui este conhecimento. Escreva uma página!",
                                lida: "false"
                            });
                        });
                    });
                }
            }
        });
    }
}