angular.module('userApp',['ui.router','ngResource','userApp.controllers','userApp.services']);

angular.module('userApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('user',{
        url:'/user',
        templateUrl:'partials/user-list.html',
        controller:'UserListController'
    }).state('newUser',{
        url:'/user/new',
        templateUrl:'partials/user-add.html',
        controller:'UserCreateController'
    });
}).run(function($state){
   $state.go('user');
});