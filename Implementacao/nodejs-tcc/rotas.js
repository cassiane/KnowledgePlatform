module.exports = {
    getUsuarios: require('./controllers/usuarios/controllerListaUsuario'),
    postUsuarios: require('./controllers/usuarios/controllerListaUsuario'),
    login: require('./controllers/autenticacao/controllerLogin'),
    postAssuntos: require('./controllers/assuntos/controllerCriaAssunto'),
    getAssuntos: require('./controllers/assuntos/controllerListaAssuntos'),
    postVotarAssunto: require('./controllers/assuntos/controllerVotarAssunto'),
    postNotificacao: require('./controllers/notificacoes/controllerCriaNotificacao'),
    getNotificacao: require('./controllers/notificacoes/controllerListaNotificacao')};