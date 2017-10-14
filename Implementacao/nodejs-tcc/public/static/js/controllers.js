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
        $scope.usuario = "2";
        Notificacao.get($scope.usuario, function (response) {            
            $scope.notificacoes = response;
        });
    });