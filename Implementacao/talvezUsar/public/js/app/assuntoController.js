angular.module('app.assuntoController', [])
    .controller('appAddAssuntoController', function ($scope, $state, Assunto) {
        $scope.assunto = new Object();

        $scope.addAssunto = function () {
            Assunto.add($scope.assunto, function (response) {
                $state.go('listAssuntos');
            });
        }
    }).controller('appListAssuntoController', function ($scope, Assunto) {
        Assunto.query(function (response) {
            $scope.asssuntos = response;
        });
    });