angular.module('assuntosApp',['ui.router','ngResource', 'assuntosApp.appController', 'assuntosApp.assuntoController', 'app.appService']);

angular.module('app').config(function($stateProvider,$httpProvider){
    $stateProvider.state('listAssuntos',{
        url:'/assuntos',
        templateUrl:'bolhas/bolhas.html',
        controller:'appListAssuntoController'
    })
}).run(function($state){
    $state.go('listAssuntos');
 });