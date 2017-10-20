/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('abastecimentoApp', ['ui.router', 'ngResource', 'abastecimentoApp.controllers', 'abastecimentoApp.services', 'abastecimentoApp.servicesNotificacoes']);

angular.module('abastecimentoApp').config(function ($stateProvider, $httpProvider) {
    $stateProvider.state('index', {
        url: '/index',
        // templateUrl: 'partials/index.html',
        views: {
             '':{
                 templateUrl: 'partials/index.html',
             },
             'assuntos@index': {
                 templateUrl: 'partials/assuntos.html',
                 controller: 'AssuntoListController'
             },
             'notificacoes@index':{
                 templateUrl: 'partials/notificacoes.html',
                 controller: 'NotificacaoListController'
             }
        }       
    }).state('assuntos', {
        url: '/assuntos',
         templateUrl: 'partials/assuntos.html',
         controller: 'AssuntoListController'
     }).state('notificacoes', {
         url: '/index',
         templateUrl: 'partials/notificacoes.html',
         controller: 'NotificacaoListController'
    }).state('createPageAssunto', {
        url: '/createPageAssunto',
        templateUrl: 'partials/assunto-createPage.html',
        controller: 'AssuntoCreatePageController'
    }).state('login', {
        url: "/",
        templateUrl: 'login.html',
        controller: 'LoginController'
    })
}).run(function ($state) {
    $state.go('index');
});