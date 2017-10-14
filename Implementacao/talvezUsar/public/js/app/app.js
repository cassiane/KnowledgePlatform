angular.module('app',['ui.router','ngResource']);

angular.module('app').config(function($stateProvider,$httpProvider){
    $stateProvider.state('assuntos',{
        url:'/home',
        templateUrl:'/partials/assunto/assunto-list.html',
        controller:'appController'
    }).state('menu'), {
        url:'/home',
        templateUrl:'/partials/menu.html',
        controller:'appController'
    }
}).run(function($state){
   $state.go('assuntos');
});