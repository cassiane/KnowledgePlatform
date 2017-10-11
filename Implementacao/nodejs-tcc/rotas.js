module.exports = {
    getUsuarios: function (req, res) {
        res.json({ message: "rota para GET do /usuarios" })
    },
    //require('./controllers/usuarios/controllerListaUsuario'),
    postUsuarios: function (req, res) {
        res.json({ message: "rota para GET do /usuarios" })
    },
    //require('./controllers/usuarios/controllerCriaUsuario')
    /*login: require('./controllers/autenticação/controllerLogin'),
    postAssuntos: require('./controllers/assuntos/controllerCriaAssunto'),
    getAssuntos: function (req, res) {
        res.json({ message: "rota para GET do /assuntos" })
    },
    postVotarAssunto: function (req, res) {
        res.json({ message: "rota para POST do /assuntos/votar" })
    },
    postNotificacao: function (req, res) {
        res.json({ message: "rota para POST do /notificacao" })
    },
    getNotificacao: function (req, res) {
        res.json({ message: "rota para GET do /notificacao" })
    },*/
}