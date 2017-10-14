angular.module('userApp.controllers', [])
    .controller('appLoginController',
    function($scope, $state, popupService, $window, App) {
        //.query == GET
        App.login(function(user) {
            $scope.fazerLogin = function(){
                App.login($scope.user, function(response) {
                    $state.go('index');
                });
            }
        });
    });