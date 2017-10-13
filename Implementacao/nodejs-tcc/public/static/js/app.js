/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('abastecimentoApp',['ui.router','ngResource','abastecimentoApp.controllers','abastecimentoApp.services']);

angular.module('abastecimentoApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('abastecimentos',{
        url:'/abastecimentos',
        templateUrl:'static/partials/abastecimentos.html',
        controller:'AbastecimentoListController'
    }).state('viewAbastecimento',{
       url:'/abastecimentos/:id/view',
       templateUrl:'static/partials/abastecimento-view.html',
       controller:'AbastecimentoViewController'
    }).state('newAbastecimento',{
        url:'/abastecimentos/new',
        templateUrl:'static/partials/abastecimento-add.html',
        controller:'AbastecimentoCreateController'
    }).state('editAbastecimento',{
        url:'/abastecimentos/:id/edit',
        templateUrl:'static/partials/abastecimento-edit.html',
        controller:'AbastecimentoEditController'
    });
}).run(function($state){
   $state.go('abastecimentos');
});