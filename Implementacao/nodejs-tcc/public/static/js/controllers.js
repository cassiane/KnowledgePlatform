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
        $scope.usuario = "1";
        Notificacao.get($scope.usuario, function (response) {
            $scope.notificacoes = response;
        });
    }).controller('LoginController', function ($scope, $state, popupService, $window, Usuario) {

        $scope.login = function () {
            Usuario.get($scope.usuario.email, $scope.usuario.senha, function (response) {
                $scope.usuario = response;
                $state.go('index');
            })
        };
    }).controller('UsuarioCreateController', function ($scope, $state, popupService, $window, Usuario) {
        $scope.usuario = new Object();
        $scope.addUsuario = function () {
            Usuario.add($scope.usuario, function (response) {
                $state.go('login');
            });
        }
    });