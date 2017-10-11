var Assunto = require('../../models/assuntos/modelAssunto');
module.exports = function(req, res){
      var data = new Assunto({
        assunto: req.body.assunto,
        usuarioCriador: req.body.usuarioCriador
        });
        data.save(function(err) {
          if (err)
            res.send(err);
          res.json({ message: 'Novo Assunto', data: data });
        });
    };