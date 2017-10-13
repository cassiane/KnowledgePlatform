/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('abastecimentoApp.controllers',[]).controller('AbastecimentoListController',function($scope,$state,popupService,$window,Abastecimento){

    Abastecimento.query(function(response) {
        debugger;
        $scope.abastecimentos=response;
    });

    $scope.deleteAbastecimento=function(abastecimento){
        if(popupService.showPopup('Deseja excluir o abastecimento ?')){
            Abastecimento.remove(abastecimento.id, function(response) {
                $window.location.href='';
            });
        }
    }

}).controller('AbastecimentoViewController',function($scope,$stateParams,Abastecimento){
    debugger;
    Abastecimento.get($stateParams.id, function(response) {
        $scope.abastecimento=response.data;
    });
}).controller('AbastecimentoCreateController',function($scope,$state,$stateParams,Abastecimento){

    $scope.abastecimento=new Object();
    $scope.abastecimento.details = {};

    $scope.addAbastecimento=function(){
        Abastecimento.add($scope.abastecimento, function(response) {
            $state.go('abastecimentos');
        });
    }

}).controller('AbastecimentoEditController',function($scope,$state,$stateParams,Abastecimento){
    $scope.updateAbastecimento=function(){
        Abastecimento.update($scope.abastecimento, function(response) {
            $state.go('abastecimentos');
        });
    };

    $scope.loadAbastecimento=function(){
        debugger;
        Abastecimento.get($stateParams.id, function(response) {
            $scope.abastecimento=response.data;
        });
    };

    $scope.loadAbastecimento();
});