/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('abastecimentoApp', ['ui.router', 'ngResource', 'abastecimentoApp.controllers', 'abastecimentoApp.services', 'abastecimentoApp.servicesNotificacoes']);

angular.module('abastecimentoApp').config(function ($stateProvider, $httpProvider) {
    $stateProvider.state('index', {
        url: '/index',
        views: {
            '': {
                templateUrl: 'static/partials/assuntos.html',
                controller: 'AssuntoListController'
            },
            'notificacoes': {
                templateUrl: 'static/partials/notificacoes.html',
                controller: 'NotificacaoListController'
            }
        }
    })
}).run(function ($state) {
    $state.go('index');
});