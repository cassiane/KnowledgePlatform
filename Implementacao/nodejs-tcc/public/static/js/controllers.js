/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('abastecimentoApp.controllers', [])
.controller('AssuntoListController', function ($scope, $state, popupService, $window, Assunto) {

    Assunto.query(function (response) {
        debugger;
        $scope.assuntos = response;
    });
}).controller('NotificacaoListController', function ($scope, $state, popupService, $window, Notificacao) {

    Notificacao.query(function (response) {
        debugger;
        $scope.notificacoes = response;
    });
});